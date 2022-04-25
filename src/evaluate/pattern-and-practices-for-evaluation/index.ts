// This file is generated. Please don't modify it directly.

import { Section } from '../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const patternAndPracticesForEvaluation: Section = {
  type: 'section',
  slug: 'pattern-and-practices-for-evaluation',
  id: '_pattern_and_practices_for_evaluation',
  sectionType: 'section',
  index: 2,
  title: 'Pattern and Practices for Evaluation',
  titlePlain: 'Pattern and Practices for Evaluation',
  numeral: '3',
  children: [
    {
      type: 'pass',
      content:
        '<map name="EvaluationPractices">\n\t<area shape=rect coords="14,157,118,204" href="#Explicit-Assumption">\n\t<area shape=rect coords="3,8,75,57" href="#Estimate-Feature-Value">\n\t<area shape=rect coords="346,3,425,62" href="#Estimate-In-Interval">\n\t<area shape=rect coords="533,3,653,62" href="#Estimate-Improvement-Cost">\n\t<area shape=rect coords="147,3,251,62" href="#Estimate-Issue-Cost">\n\t<area shape=rect coords="482,150,618,199" href="#Collect-Opportunities-For-Improvement">\n\t<area shape=rect coords="200,145,297,193" href="#Collect-Issues">\n</map>\n<img border=0 src="images/evaluate-patterns-conceptmap.png" usemap="#EvaluationPractices", alt="concept map of the evaluate patterns">'
    },
    {
      type: 'section',
      slug: 'estimate-feature-value',
      id: 'Estimate-Feature-Value',
      sectionType: 'section',
      index: 0,
      title: '<span class="pattern">Estimate Feature Value</span>',
      titlePlain: 'Estimate Feature Value',
      numeral: '1',
      children: [
        {
          type: 'section',
          slug: 'intent-30',
          id: '_intent_30',
          sectionType: 'section',
          index: 0,
          title: 'Intent',
          titlePlain: 'Intent',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Estimate the (monetary) value of a given feature, so you can compare features of the system with each other.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'description-29',
          id: '_description_29',
          sectionType: 'section',
          index: 1,
          title: 'Description',
          titlePlain: 'Description',
          numeral: '2',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Involve business or management stakeholders, as they often have a clear notion of business value.</p>\n</li>\n<li>\n<p>If you cannot determine real numbers available, use <a href="#Explicit-Assumption">explicit assumptions</a></p>\n</li>\n<li>\n<p>Instead of numbers, you might use categories or orders-of-magnitude (like small, medium, large). You should prefer numbers, though!</p>\n</li>\n</ul>\n</div>'
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      slug: 'estimate-in-interval',
      id: 'Estimate-In-Interval',
      sectionType: 'section',
      index: 1,
      title: '<span class="pattern">Estimate in Interval</span>',
      titlePlain: 'Estimate in Interval',
      numeral: '2',
      children: [
        {
          type: 'section',
          slug: 'intent-31',
          id: '_intent_31',
          sectionType: 'section',
          index: 0,
          title: 'Intent',
          titlePlain: 'Intent',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Estimation is a guess, not a <strong>measurement</strong>.\nEstimates are uncertain, otherwise, they would be observations (or measurements!).</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'description-30',
          id: '_description_30',
          sectionType: 'section',
          index: 1,
          title: 'Description',
          titlePlain: 'Description',
          numeral: '2',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Therefore, estimate in intervals, giving a lower and upper bound to your estimate. The difference between the two shows your confidence in the estimate. If this difference is relatively small, it shows high confidence.</p>\n</div>'
            },
            {
              type: 'admonition',
              content:
                '<div class="admonitionblock caution">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Caution</div>\n</td>\n<td class="content">\nBe aware of the anchoring effect <a href="http://en.wikipedia.org/wiki/Anchoring" class="bare">http://en.wikipedia.org/wiki/Anchoring</a>\n</td>\n</tr>\n</table>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Good estimates ensure that the estimated value will be contained in the interval with a very high probability.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Estimates often rely on assumptions - which should be <a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a>.</p>\n</div>'
            }
          ]
        }
      ]
    },
    {
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
    },
    {
      type: 'section',
      slug: 'estimate-improvement-cost',
      id: 'Estimate-Improvement-Cost',
      sectionType: 'section',
      index: 3,
      title: '<span class="pattern">Estimate Improvement Cost</span>',
      titlePlain: 'Estimate Improvement Cost',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>See: "Software Estimation. The Black Art Demystified (Steve McConnell)"</p>\n</div>'
        }
      ]
    }
  ]
}
