const fs = require('fs')
const asciidoctor = require('asciidoctor')()
const camelCase = require('camelcase')
const jsdom = require("jsdom")

const GENERATED_COMMENT = "// This file is generated. Please don't modify it directly."

function main() {
  const doc = asciidoctor.loadFile('aim42/src/main/asciidoc/index.adoc', { safe: "safe" })
  processStructuralNode(doc, "src")
}

function processStructuralNode(node, path) {
  console.log("Processing structural node: " + path)
  if (!fs.existsSync(path)) { fs.mkdirSync(path) }

  generateDescriptionFile(node, path)
  generateContentFile(node, path)

  node.getSections().forEach(child => processStructuralNode(child, path + "/" + getSlug(child)))
}

function getSlug(section) {
  return section.getId().toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/^-/, "")
}

function getPlainText(html) {
  const dom = new jsdom.JSDOM("<!DOCTYPE html><body>" + html + "</body>")
  return dom.window.document.querySelector("body").textContent.trim();
}

function generateDescriptionFile(node, path) {

  const description = generateDescription(node)

  const isDocument = description.type === "document"
  const type = isDocument ? "Document" : "Section"
  const variable = isDocument ? "aim42" : camelCase(description.slug)

  const sectionFile = `
    ${GENERATED_COMMENT}

    import { ${type} } from 'types'

    export const ${variable}: ${type} = ${JSON.stringify(description)}
  `
  fs.writeFileSync(path + '/index.ts', sectionFile, { flag: 'w' })
}

function generateDescription(node) {

  const type = node.getNodeName();

  switch (type) {
    case "document":
      return { type, ...generateStructuralNodeDescription(node) }
    case "section":
      return {
        type,
        slug: getSlug(node),
        id: node.getId(),
        sectionType: node.getSectionName(),
        index: node.getIndex(),
        caption: node.getCaption(),
        ...generateStructuralNodeDescription(node)
      }
      // case "image":
      //   return {
      //     type,
      //     id: node.getId(),
      //     ...generateTitledNodeDescription(node),          
      //     alt: node.getAttribute("alt"),
      //     src: node.getAttribute("target")
      //   }
      default:
        // Note: if we want to divide other types further, "dlist" returns a weird data structure from getBlocks
        return { type, content: node.convert() }
  }
}

function generateTitledNodeDescription(node) {
  return {
    title: node.getTitle(),
    titlePlain: getPlainText(node.getTitle()),
    caption: node.getCaption(),
    numeral: typeof node.getNumeral() === "object" ? undefined : node.getNumeral()
  }
}

function generateStructuralNodeDescription(node) {
  return {
    ...generateTitledNodeDescription(node),
    children: node.getBlocks().map(b => generateDescription(b))
  }
}

function generateContentFile(node, path) {
  const isDocument = node.getNodeName() === "document"
  const variable = (isDocument ? "aim42" : camelCase(getSlug(node))) + "Content"
  const content = `
    export const ${variable}: string = ${JSON.stringify(node.getContent())}
  `
  fs.writeFileSync(path + "/content.ts", content, { flag: 'w' })
}

main();