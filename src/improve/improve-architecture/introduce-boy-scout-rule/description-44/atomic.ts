// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description44Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'description-44',
  id: '_description_44',
  sectionType: 'section',
  index: 1,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '2',
  content:
    '<div class="ulist">\n<ul>\n<li>\n<p>Drafting from an <a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a>, define a specific rule set\non how to improve the contents of specific file types.</p>\n</li>\n<li>\n<p>Specify how much effort should be allowed to perform each specific\nclean-up operation</p>\n</li>\n<li>\n<p>Specify how to proceed if the cleanup takes up too much time</p>\n</li>\n<li>\n<p>Revisit the rule set regularly</p>\n</li>\n<li>\n<p>Install a mechanism to ensure that the things that where too big to\nbe cleaned up while visiting the file will end up in the\n<a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a>.</p>\n</li>\n</ul>\n</div>\n<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="title">Example Boy Scout Rule agreement</div>\n<div class="paragraph">\n<p>This is a very concrete agreement from a specific project - yours\nshould look rather different.</p>\n</div>\n<div class="paragraph">\n<p><strong>Boy Scout Rule agreement for project X from 2014-02-19 onwards:</strong>\n. Apply defined source code formatting (via IDE) to adhere to coding style<br>\nIf the formatting introduces errors and those errors can not be fixed within 10\nMinutes revert changes and add the file to the "redo formatting list" (e.g. add\nan TODO REFORMAT comment, if such a comment already exist add an exclamation mark\neach time you handle the file)</p>\n</div>\n<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Move SQL strings to the db-encapsulation layer and replace the former\ndirect database calls by appropriate calls to the correct architecture elements<br>\nIf this takes longer than 20 minutes revert changes and add file to the list\n"difficulties with database extraction" (e.g. add an TODO DB-EXTRACT comment,\nif such a comment already exist add an exclamation mark each time you handle\nthe file)</p>\n</li>\n<li>\n<p>Remove magic numbers from source code and replace them with\n  constants (e.g. replace if (item.id &gt; 99) with if (item.id &gt;\nItem.COMPOUND_ITEMS_THRESHHOLD).</p>\n</li>\n<li>\n<p>If time allows replace the former "magic number conditionals" with a\n  function on a business logic level (e.g. replace if (item.id &gt;\nItem.COMPOUND_ITEMS_THRESHHOLD)\n  with if (item.is_compound())</p>\n</li>\n</ol>\n</div>\n</td>\n</tr>\n</table>\n</div>'
}
