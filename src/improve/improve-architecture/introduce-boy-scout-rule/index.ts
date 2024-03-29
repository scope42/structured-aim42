// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const introduceBoyScoutRule: Section = {
  type: 'section',
  slug: 'introduce-boy-scout-rule',
  id: 'Introduce-Boy-Scout-Rule',
  sectionType: 'section',
  index: 5,
  title: '<span class="pattern">Introduce Boy Scout Rule</span>',
  titlePlain: 'Introduce Boy Scout Rule',
  numeral: '6',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The &#8220;Boy Scout Rule&#8221; for software development basically states that we</p>\n</div>'
    },
    {
      type: 'quote',
      content:
        '<div class="quoteblock">\n<blockquote>\n&#8220;Always check a module in cleaner than when you checked it out.&#8221;.\n</blockquote>\n<div class="attribution">\n&#8212; Robert C. Martin\n</div>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Uncle Bob (Robert C. Martin) proposed this adoption of the rule from the boy\nscout rulebook which reads &#8220;Try and leave this world a little better than you\nfound it.&#8221; for the software development world in an article in Kevlin Henney&#8217;s\n&#8220;97 Things a Programmer Should Know&#8221; <a href="#Henney">[Henney]</a>.</p>\n</div>'
    },
    {
      type: 'section',
      slug: 'intent-45',
      id: '_intent_45',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Enable cross-cutting architectural improvement even if it is not feasible to change the whole codebase.</p>\n</div>'
        },
        {
          type: 'admonition',
          content:
            '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\nOften the introduction of concepts like layering is deemed <em>“impossible”</em> due to the huge codebase that would be affected. In these cases the Boy Scout Rule approach is a lightweight way to enhance the code quality one day at a time.\n</td>\n</tr>\n</table>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-44',
      id: '_description_44',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Drafting from an <a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a>, define a specific rule set\non how to improve the contents of specific file types.</p>\n</li>\n<li>\n<p>Specify how much effort should be allowed to perform each specific\nclean-up operation</p>\n</li>\n<li>\n<p>Specify how to proceed if the cleanup takes up too much time</p>\n</li>\n<li>\n<p>Revisit the rule set regularly</p>\n</li>\n<li>\n<p>Install a mechanism to ensure that the things that where too big to\nbe cleaned up while visiting the file will end up in the\n<a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a>.</p>\n</li>\n</ul>\n</div>'
        },
        {
          type: 'admonition',
          content:
            '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="title">Example Boy Scout Rule agreement</div>\n<div class="paragraph">\n<p>This is a very concrete agreement from a specific project - yours\nshould look rather different.</p>\n</div>\n<div class="paragraph">\n<p><strong>Boy Scout Rule agreement for project X from 2014-02-19 onwards:</strong>\n. Apply defined source code formatting (via IDE) to adhere to coding style<br>\nIf the formatting introduces errors and those errors can not be fixed within 10\nMinutes revert changes and add the file to the "redo formatting list" (e.g. add\nan TODO REFORMAT comment, if such a comment already exist add an exclamation mark\neach time you handle the file)</p>\n</div>\n<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Move SQL strings to the db-encapsulation layer and replace the former\ndirect database calls by appropriate calls to the correct architecture elements<br>\nIf this takes longer than 20 minutes revert changes and add file to the list\n"difficulties with database extraction" (e.g. add an TODO DB-EXTRACT comment,\nif such a comment already exist add an exclamation mark each time you handle\nthe file)</p>\n</li>\n<li>\n<p>Remove magic numbers from source code and replace them with\n  constants (e.g. replace if (item.id &gt; 99) with if (item.id &gt;\nItem.COMPOUND_ITEMS_THRESHHOLD).</p>\n</li>\n<li>\n<p>If time allows replace the former "magic number conditionals" with a\n  function on a business logic level (e.g. replace if (item.id &gt;\nItem.COMPOUND_ITEMS_THRESHHOLD)\n  with if (item.is_compound())</p>\n</li>\n</ol>\n</div>\n</td>\n</tr>\n</table>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'experiences-19',
      id: '_experiences_19',
      sectionType: 'section',
      index: 2,
      title: 'Experiences',
      titlePlain: 'Experiences',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Introducing the Boy Scout Rule on a heavily deteriorated code base\ninduces heavy payback on <a href="https://en.wikipedia.org/wiki/Technical_debt">technical debt</a> and often gets challenged\nby team members and senior management. It is important to point out\nthat the extended time spent on fixing the artifacts "as the teams\ngoes" actually is the <em>explicit</em> payment of the technical debt interest rate.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'risks-8',
      id: '_risks_8',
      sectionType: 'section',
      index: 3,
      title: 'Risks',
      titlePlain: 'Risks',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Sometimes the Boy Scout Rule can be taken as a means by itself. In\nthese cases the higher goals tend to be forgotten and thus</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-25',
      id: '_applicability_25',
      sectionType: 'section',
      index: 4,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '5',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The pattern &#8220;Introduce Boy Scout Rule&#8221; can always be applied.<br>\nSome of the most effective uses are</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>unstructured code (no layers, no separation of concerns etc.)</p>\n</li>\n<li>\n<p>systematic weaknesses (insecure logging, insecure handling of\ndatabase inserts etc.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'consequences-16',
      id: '_consequences_16',
      sectionType: 'section',
      index: 5,
      title: 'Consequences',
      titlePlain: 'Consequences',
      numeral: '6',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The introduction the Boy Scout Rule often proved to enable structural\nimprovements as a prerequisite for higher level architectural\nimprovements. Also it heightens the team&#8217;s awareness of good practices\nin their code base.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The introduction of the Boy Scout Rule leads to a dramatic shift in\nthe distribution of the code quality because those parts of the system\nthat get changed the most also get the most care. For more stable\nparts of the system other approaches have to be utilized.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'also-known-as-15',
      id: '_also_known_as_15',
      sectionType: 'section',
      index: 6,
      title: 'Also Known As',
      titlePlain: 'Also Known As',
      numeral: '7',
      children: []
    },
    {
      type: 'section',
      slug: 'related-patterns-27',
      id: '_related_patterns_27',
      sectionType: 'section',
      index: 7,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '8',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Refactoring-Plan">[Refactoring-Plan]</a>, as an alternative or complimenting approach</p>\n</li>\n<li>\n<p><a href="#Introduce-Layering">[Introduce-Layering]</a> can be performed using the Boy Scout Rule</p>\n</li>\n<li>\n<p><a href="#Anticorruption-Layer">Section 4.10.2, &#8220;<span class="pattern">Anticorruption Layer</span>&#8221;</a> can be performed using the Boy Scout Rule</p>\n</li>\n<li>\n<p>An <a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a> should be the basis for the tasks\nperformed when applying the Boy Scout Rule</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references-23',
      id: '_references_23',
      sectionType: 'section',
      index: 8,
      title: 'References',
      titlePlain: 'References',
      numeral: '9',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The original description of the boy scout rule can be found online at <a href="#Boy-Scout-Rule-article">[Boy-Scout-Rule-article]</a>.</p>\n</div>'
        }
      ]
    }
  ]
}
