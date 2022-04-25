// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const consequences7Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'consequences-7',
  id: '_consequences_7',
  sectionType: 'section',
  index: 5,
  title: 'Consequences',
  titlePlain: 'Consequences',
  numeral: '6',
  content:
    '<div class="ulist">\n<ul>\n<li>\n<p>You and your stakeholders are OK with</p>\n<div class="ulist">\n<ul>\n<li>\n<p>Not getting new features, rather less, for the time of the rewrite despite having higher cost (writing the new system and running the old one)</p>\n</li>\n<li>\n<p>The new system will have less features than the old one (at least in the beginning)</p>\n</li>\n<li>\n<p>The new system will have more bugs (because the old one is already battle-proved for a long time and the new one is not).\nPlease be aware that it is naive to belief that you can deliver the new system almost bug free, because you already have\nthe experience of the old system</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>In case the application cannot be rewritten within 3 months, you and your stakeholders need besides enough budget and manpower\na lot of patience to rewrite the application completely. Getting impatient and rush into the release creates bad Technical Debt</p>\n</li>\n<li>\n<p>You will have higher cost and risk of failure, but no benefit for your users. If you want to give your users a benefit, too, you cannot\nsimply replace the old system with a new one, but you also need to rethink the way the application behaves in terms\nof usability, speed or flexibility. If you don&#8217;t want to incrementally improve your product, but rather introduce a\nrevolution, the big bang rewrite is what you need</p>\n</li>\n<li>\n<p>In case you rewrite the system using a new platform and language, there will be winners and losers regarding the change.\nDevelopers who are strong in the "old" technology will feel left behind unless they get a good chance in mastering the\nnew technology. In any case, they will loose their strong expert position for some time and that alone causes tension and conflict.</p>\n</li>\n</ul>\n</div>'
}
