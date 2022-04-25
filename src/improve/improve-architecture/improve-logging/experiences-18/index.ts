// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const experiences18: Section = {
  type: 'section',
  slug: 'experiences-18',
  id: '_experiences_18',
  sectionType: 'section',
  index: 2,
  title: 'Experiences',
  titlePlain: 'Experiences',
  numeral: '3',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Most projects write log files in a more or less sophisticated fashion, in many\ncases log messages are phrased in a rather unstructured way. It turns out that\na well-designed logging concept helps to make the log stream easier to understand.\nThis concept should provide some guidelines regarding which log level should be\nused in which situation, how the wording of log messages could be unified and\nwhich additional log levels or markers shall be used for what purpose.</p>\n</div>'
    },
    {
      type: 'admonition',
      content:
        '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="paragraph">\n<p>In a customer project we used an object-relational-mapping (ORM) tool for a\ndatabase independent access layer. The data access was inherently transactional\nand created a lot of database traffic so that deadlock situations on the database\nwere expected and properly handled with a delayed retry mechanism.</p>\n</div>\n<div class="paragraph">\n<p>While this approach worked quite well, we got frequently complaints from the\noperations team, which reported a number of ERROR log messages along with longish\nstacktraces that set their alarm bells off. These log messages were written by\nthe ORM tool whenever a DB deadlock was experienced. Since the application could\nperfectly deal with this situation this was not an error anymore and should have\nbeen logged as WARN or INFO at best. The problem was that a third-party\nframework used the wrong log level and was thus causing a lot of confusion.\nBear this in mind when working on a framework-like codebase and thinking about\nlog levels.</p>\n</div>\n</td>\n</tr>\n</table>\n</div>'
    }
  ]
}
