// This file is generated. Please don't modify it directly.

import { Section } from '../../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const analyzeDataActualityAndCorrectness: Section = {
  type: 'section',
  slug: 'analyze-data-actuality-and-correctness',
  id: '_analyze_data_actuality_and_correctness',
  sectionType: 'section',
  index: 4,
  title: 'Analyze Data Actuality and Correctness',
  titlePlain: 'Analyze Data Actuality and Correctness',
  numeral: '5',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Especially in data concerning dynamic entities like people, organizations,\nmarkets, commodities etc., facts are very likely to change over time.\nSuch data (<em>stored facts</em>) might become invalid sooner or later.\nOther types of information (like tax records, invoices or bookings on bank accounts) are created once and remain valid forever).</p>\n</div>'
    },
    {
      type: 'admonition',
      content:
        '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="ulist">\n<ul>\n<li>\n<p>Peoples\' address typically changes something between 2-10 times during\ntheir lives.</p>\n</li>\n<li>\n<p>Empirical studies show that between 5 and 10% of business or job email addresses\nbecome invalid every year.</p>\n</li>\n</ul>\n</div>\n</td>\n</tr>\n</table>\n</div>'
    },
    {
      type: 'ulist',
      content:
        '<div class="ulist">\n<ul>\n<li>\n<p>Which parts of the data are subject to (what kind of) changes?</p>\n</li>\n<li>\n<p>Are parts of the data known to be invalid or contain invalid portions?</p>\n</li>\n<li>\n<p>Does the System handle potentially wrong or invalid data appropriately?</p>\n</li>\n<li>\n<p>Are there (organizational or technical) processes in place that deal with\ndata inconsistencies or faults?</p>\n</li>\n</ul>\n</div>'
    }
  ]
}
