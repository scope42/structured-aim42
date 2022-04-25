// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description50Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'description-50',
  id: '_description_50',
  sectionType: 'section',
  index: 0,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '1',
  content:
    '<div class="paragraph">\n<p>Collect and organize architectural information about the <a href="#System">[System]</a>:\nDocument structures, concepts, decisions, interfaces etc. of the <a href="#System">[System]</a>\nto <em>locate</em> issues, risks and opportunities for improvement.</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>Business or technical system context, with external interfaces. Learn this\nfrom <a href="#Context-Analysis">Section 2.3.3, &#8220;<span class="pattern">Context-Analysis</span>&#8221;</a> or <a href="#Infrastructure-Analysis">Section 2.3.8, &#8220;<span class="pattern">Infrastructure-Analysis</span>&#8221;</a>.</p>\n</li>\n<li>\n<p>Solution strategy, often to be learnt from <a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a> with\nexperienced developers of the system.</p>\n</li>\n<li>\n<p>Building block structure, the static organization of the source code.\nAt least elaborate the highest level of code blocks (level 1 building blocks)</p>\n</li>\n<li>\n<p>Runtime structures, like important use-case scenarios. Sometimes this can be\nlearned from <a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a>.</p>\n</li>\n<li>\n<p>Infrastructure and deployment, often derived from <a href="#Infrastructure-Analysis">Section 2.3.8, &#8220;<span class="pattern">Infrastructure-Analysis</span>&#8221;</a>.</p>\n</li>\n<li>\n<p>Cross-cutting and technical concepts, like domain models, persistence,\nuser-interface and other concepts.</p>\n</li>\n<li>\n<p>Important architecture and design decisions taken and revoked during\ndevelopment of the system.</p>\n</li>\n</ul>\n</div>'
}
