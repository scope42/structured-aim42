// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const risks7Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'risks-7',
  id: '_risks_7',
  sectionType: 'section',
  index: 3,
  title: 'Risks',
  titlePlain: 'Risks',
  numeral: '4',
  content:
    '<div class="ulist">\n<ul>\n<li>\n<p>An excessive amount of log statements is likely to have negative impact on the\napplication&#8217;s performance. The impact is however manageable by using</p>\n<div class="ulist">\n<ul>\n<li>\n<p>guarded log statements that will only be constructed if a certain log level\nis enabled,</p>\n</li>\n<li>\n<p>asynchronous appenders (like the disruptor-based approach used by <a href="http://logging.apache.org/log4j/2.x/">Log4J 2</a>),</p>\n</li>\n<li>\n<p>context-sensitive logging (e.g. to enable debug logs only for a certain scenario or user).</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>Collecting and indexing a huge amount of log data requires additional storage,\napprox. by factor 10. Think of retention policies in order to make the data\nstream manageable.</p>\n</li>\n</ul>\n</div>'
}
