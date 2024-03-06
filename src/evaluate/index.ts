// This file is generated. Please don't modify it directly.

import { Section } from '../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const evaluate: Section = {
  type: 'section',
  slug: 'evaluate',
  id: 'Evaluate',
  sectionType: 'section',
  index: 3,
  title: 'Evaluate',
  titlePlain: 'Evaluate',
  numeral: '3',
  children: [
    {
      type: 'image',
      content:
        '<div class="imageblock">\n<div class="content">\n<img src="./images/01-intro-and-overview/evaluate-phase.png" alt="evaluate-phase">\n</div>\n<div class="title">Figure 13. Evaluate-Phase</div>\n</div>'
    },
    {
      type: 'section',
      slug: 'goals-2',
      id: '_goals_2',
      sectionType: 'section',
      index: 0,
      title: 'Goals',
      titlePlain: 'Goals',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Make the issues, problems and risks found during the <a href="#Analyze">analysis</a>\ncomparable by estimating or measuring their <strong>value</strong>\n(that&#8217;s why we call this activity <strong>evaluate</strong>):</p>\n</div>'
        },
        {
          type: 'olist',
          content:
            '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>estimate <em>value</em> of problems, issues, risks and their remedies</p>\n</li>\n<li>\n<p>prioritize issues, their remedies and improvement measures</p>\n</li>\n</ol>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Usually, evaluation implies <em>estimation</em>, only in few cases can you measure\nor observe the evaluation subject and produce <em>hard facts</em>.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'estimation',
      id: '_estimation',
      sectionType: 'section',
      index: 1,
      title: 'Estimation',
      titlePlain: 'Estimation',
      numeral: '2',
      children: [
        {
          type: 'image',
          content:
            '<div id="figure-evaluation-concepts" class="imageblock">\n<div class="content">\n<img src="./images/evaluate-domain-conceptmap.png" alt="evaluate domain conceptmap">\n</div>\n<div class="title">Figure 14. Evaluation Concepts Domain Model</div>\n</div>'
        },
        {
          type: 'table',
          content:
            '<table class="tableblock frame-all grid-all" style="width: 80%;">\n<caption class="title">Table 3. Evaluation Domain Concepts</caption>\n<colgroup>\n<col style="width: 12.5%;">\n<col style="width: 50%;">\n<col style="width: 37.5%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top">Domain concept</th>\n<th class="tableblock halign-left valign-top">Explanation</th>\n<th class="tableblock halign-left valign-top">Example</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Estimation</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">an <em>approximation</em> of any subject\n  (here: issues, problems or remedies), which is needed because\n\tfacts or real observations are not available or possible.</p></td>\n<td class="tableblock halign-left valign-top"><div class="content"></div></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Subject</p></td>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph">\n<p>a recurring problem in the <a href="#System">[System]</a> or\nassociated processes</p>\n</div></div></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Parameter</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">an important element or foundation of the\nestimation.</p></td>\n<td class="tableblock halign-left valign-top"><div class="content"><div class="ulist">\n<ul>\n<li>\n<p>number of developers on the system</p>\n</li>\n<li>\n<p>Lines-of-Code (LOC)</p>\n</li>\n</ul>\n</div></div></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Assumption</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">a fixed setting for any parameter.\n  See <a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a></p></td>\n<td class="tableblock halign-left valign-top"><div class="content"></div></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Observation</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">measure, count, calculate gather real data\nfor parameters</p></td>\n<td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph">\n<p>if every developer is\nconcerned by the problem, we count their number.</p>\n</div></div></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Interval</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">see <a href="#Estimate-In-Interval">Section 3.3.2, &#8220;<span class="pattern">Estimate in Interval</span>&#8221;</a></p></td>\n<td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph">\n<p>between 15% and 25%</p>\n</div></div></td>\n</tr>\n</tbody>\n</table>'
        }
      ]
    },
    {
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
                    '<div class="admonitionblock caution">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Caution</div>\n</td>\n<td class="content">\nBe aware of the anchoring effect <a href="http://en.wikipedia.org/wiki/Anchoring_effect" class="bare">http://en.wikipedia.org/wiki/Anchoring_effect</a>\n</td>\n</tr>\n</table>\n</div>'
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
  ]
}
