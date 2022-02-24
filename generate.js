const fs = require('fs')
const asciidoctor = require('asciidoctor')()
const camelCase = require('camelcase')
const jsdom = require("jsdom")

const GENERATED_COMMENT = "// This file is generated. Please don't modify it directly."

async function main() {
  const doc = asciidoctor.loadFile('aim42/src/main/asciidoc/index.adoc', { safe: "safe" })
  processStructuralNode(doc, "src", true)
}

async function processStructuralNode(section, path, isDocument = false) {
  console.log("Processing structural node: " + path)
  if (!fs.existsSync(path)) { fs.mkdirSync(path) }

  generateDescriptionFile(section, path, isDocument)
  generateContentFile(section, path, isDocument)

  section.getSections().forEach(child => processStructuralNode(child, path + "/" + getSlug(child)))
}

function getSlug(section) {
  return section.getId().toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/^-/, "")
}

function getPlainText(html) {
  const dom = new jsdom.JSDOM("<!DOCTYPE html><body>" + html + "</body>")
  return dom.window.document.querySelector("body").textContent.trim();
}

function generateDescriptionFile(node, path, isDocument = false) {

  const description = {
    title: node.getTitle(),
    titlePlain: getPlainText(node.getTitle())
  }

  if (!isDocument) {
    description.slug = getSlug(node)
    description.id = node.getId()
    description.sectionType = node.getSectionName()
  }

  const type = isDocument ? "Document" : "Section"
  const variable = isDocument ? "aim42" : camelCase(description.slug)

  const sectionFile = `
    ${GENERATED_COMMENT}

    import { ${type} } from 'types'

    export const ${variable}: ${type} = ${JSON.stringify(description)}
  `
  fs.writeFileSync(path + '/index.ts', sectionFile, { flag: 'w' })
}

function generateContentFile(node, path, isDocument = false) {
  const variable = (isDocument ? "aim42" : camelCase(getSlug(node))) + "Content"
  const content = `
    export const ${variable}: string = ${JSON.stringify(node.getContent())}
  `
  fs.writeFileSync(path + "/content.ts", content, { flag: 'w' })
}

main();