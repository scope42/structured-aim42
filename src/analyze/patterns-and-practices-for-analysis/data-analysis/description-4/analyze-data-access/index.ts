// This file is generated. Please don't modify it directly.

import { Section } from '../../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const analyzeDataAccess: Section = {
  type: 'section',
  slug: 'analyze-data-access',
  id: '_analyze_data_access',
  sectionType: 'section',
  index: 1,
  title: 'Analyze Data Access',
  titlePlain: 'Analyze Data Access',
  numeral: '2',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Get an overview of data access paths: How is data read or written?\nDo the queries match their requirements, or are complex mappings\nor unsuitable indirections involved?</p>\n</div>'
    },
    {
      type: 'ulist',
      content:
        '<div class="ulist">\n<ul>\n<li>\n<p>What queries or executed how often?</p>\n</li>\n<li>\n<p>How large are the results in number or volume?</p>\n</li>\n<li>\n<p>Do relationships between query results have to be computed or do appropriate indices exist?</p>\n</li>\n</ul>\n</div>'
    }
  ]
}
