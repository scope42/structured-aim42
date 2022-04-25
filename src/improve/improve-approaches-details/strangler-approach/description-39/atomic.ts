// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description39Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'description-39',
  id: '_description_39',
  sectionType: 'section',
  index: 1,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '2',
  content:
    '<div class="paragraph">\n<p>Rewriting an old system with the <a href="#big-bang-approach">Section 4.7.1, &#8220;<span class="pattern">Big Bang Approach</span>&#8221;</a> is a risky endeavor. It is harder than you might think at the beginning.</p>\n</div>\n<div class="paragraph">\n<p>An alternative way is to gradually create a new system around the edges of the old, letting it grow slowly over\nseveral years until the old system is strangled. The most important reason to consider a strangler application over a\ncut-over rewrite is reduced risk (it might cost more to do a strangler, but that&#8217;s the price of risk reduction) [1].</p>\n</div>\n<div class="paragraph">\n<p>Paul Hammont depicts the strangler approach as follows [2]:</p>\n</div>\n<div id="figure-strangulation" class="imageblock">\n<div class="content">\n<img src="./images/strangulation.jpg" alt="strangulation">\n</div>\n<div class="title">Figure 31. Strangler Applications (Paul Hammant)</div>\n</div>\n<div class="paragraph">\n<p>He discusses two ways of achieving the goal of moving from the (red) old system to the (blue) new system:</p>\n</div>\n<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>With adding new features</p>\n</li>\n<li>\n<p>Without adding new features</p>\n</li>\n</ol>\n</div>\n<div class="paragraph">\n<p>Deciding to go for the first strategy means that you can still keep your business happy because you are still able to\ndeliver new features. However, this approach will take longer than the second one.</p>\n</div>'
}
