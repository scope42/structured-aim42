// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const estimateInIntervalAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'estimate-in-interval',
  id: 'Estimate-In-Interval',
  sectionType: 'section',
  index: 1,
  title: '<span class="pattern">Estimate in Interval</span>',
  titlePlain: 'Estimate in Interval',
  numeral: '2',
  content:
    '<div class="sect4">\n<h5 id="_intent_31">Intent</h5>\n<div class="paragraph">\n<p>Estimation is a guess, not a <strong>measurement</strong>.\nEstimates are uncertain, otherwise, they would be observations (or measurements!).</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_description_30">Description</h5>\n<div class="paragraph">\n<p>Therefore, estimate in intervals, giving a lower and upper bound to your estimate. The difference between the two shows your confidence in the estimate. If this difference is relatively small, it shows high confidence.</p>\n</div>\n<div class="admonitionblock caution">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Caution</div>\n</td>\n<td class="content">\nBe aware of the anchoring effect <a href="http://en.wikipedia.org/wiki/Anchoring_effect" class="bare">http://en.wikipedia.org/wiki/Anchoring_effect</a>\n</td>\n</tr>\n</table>\n</div>\n<div class="paragraph">\n<p>Good estimates ensure that the estimated value will be contained in the interval with a very high probability.</p>\n</div>\n<div class="paragraph">\n<p>Estimates often rely on assumptions - which should be <a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a>.</p>\n</div>\n</div>'
}
