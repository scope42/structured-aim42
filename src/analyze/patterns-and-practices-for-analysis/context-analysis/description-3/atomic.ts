// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description3Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'description-3',
  id: '_description_3',
  sectionType: 'section',
  index: 2,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '3',
  content:
    '<div class="paragraph">\n<p>Context analysis shall help identify issues associated with <em>external interfaces</em>, e.g. interfaces that:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>influence critical quality requirements of the system (e.g. reliability, security, throughput, runtime performance, operation cost)</p>\n</li>\n<li>\n<p>are overly complex</p>\n</li>\n<li>\n<p>are brittle or fragile</p>\n</li>\n<li>\n<p>are implemented with unsuitable technology</p>\n</li>\n<li>\n<p>are underdocumented or poorly understood</p>\n</li>\n<li>\n<p>transport critical data (important, sensitive, insecure)</p>\n</li>\n<li>\n<p>transport especially huge amounts of data</p>\n</li>\n<li>\n<p>have high operational effort</p>\n</li>\n<li>\n<p>have high usage cost (e.g. cost-per-request or similar)</p>\n</li>\n<li>\n<p>have high cost-of-change or high maintenance costs</p>\n</li>\n<li>\n<p>are difficult or impossible to modify/enhance/change</p>\n</li>\n<li>\n<p>suffer from operational failures or production issues</p>\n</li>\n</ul>\n</div>\n<div class="paragraph">\n<p>Note that <em>user</em> interfaces often belong to the context, especially with\nrespect to the kind of data or events exchanged with users or user groups. Due to the\nimportance of this topic, aim42 devotes an <a href="#User-Analysis">own section</a> to it.</p>\n</div>'
}
