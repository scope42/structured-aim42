// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const estimateIssueCost: Section = {
  type: 'section',
  slug: 'estimate-issue-cost',
  id: 'Estimate-Issue-Cost',
  sectionType: 'section',
  index: 2,
  title: '<span class="pattern">Estimate Issue Cost</span>',
  titlePlain: 'Estimate Issue Cost',
  numeral: '3',
  children: [
    {
      type: 'section',
      slug: 'intent-32',
      id: '_intent_32',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Find out how much a given issue costs in units of money or effort in a period or for every occurrence.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-31',
      id: '_description_31',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p><em>Finding out</em> the cost of an issue usually requires estimation or guessing, so there are\nuncertainty and probability involved.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>For example, if a server needs to be rebooted once every 24hrs and an operator needs 30 minutes to perform this reboot (and corresponding activities), then you can approximate the cost of this problem for, let&#8217;s say, a month:</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>5 workdays × 4 weeks × 30 min = 10hrs of operator&#8217;s effort.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>If you multiply with (an approximated or averaged) wage, you get <em>problem cost</em>.</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>If possible, try to <em>measure</em> or observe instead of guessing or estimating.</p>\n</li>\n<li>\n<p>If you cannot determine real numbers, and you need to guess, estimate or approximate, use <a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a>.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'related-practices-4',
      id: '_related_practices_4',
      sectionType: 'section',
      index: 2,
      title: 'Related Practices',
      titlePlain: 'Related Practices',
      numeral: '3',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Estimate-In-Interval">Section 3.3.2, &#8220;<span class="pattern">Estimate in Interval</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
