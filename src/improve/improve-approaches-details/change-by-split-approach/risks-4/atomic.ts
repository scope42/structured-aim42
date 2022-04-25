// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const risks4Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'risks-4',
  id: '_risks_4',
  sectionType: 'section',
  index: 4,
  title: 'Risks',
  titlePlain: 'Risks',
  numeral: '5',
  content:
    '<div class="ulist">\n<ul>\n<li>\n<p>Creating several copies of a large system plus infrastructure\ncan be expensive and resource-intensive.</p>\n</li>\n<li>\n<p>Identifying really disjunct user groups might be impossible for\nseveral business domains, rendering this approach useless.</p>\n</li>\n<li>\n<p>The required team-split might pose organizational challenges,\nas a currently productive (albeit large) team has to be disrupted.</p>\n</li>\n<li>\n<p>It might be difficult to define appropriate interfaces for the\nfactored-out <em>commons</em>. If these commons are overly scattered\nthroughout the legacy code, this extraction might be impossible,\nmaking the resulting split systems more complicated than they should be.</p>\n</li>\n<li>\n<p>If business code is overly tangled, having very high cyclomatic\ncomplexity, it can be arbitrarily difficult to remove those parts\nthat are not required for a single user type/category. Analyzing such\ncode segments should be performed my members of several split-teams.</p>\n</li>\n<li>\n<p>Associated processes (like requirements, test, documentation and operations) of\nthe split systems might become more difficult to manage in the first\nphases of a split. Due to the reduced sizes of split systems, it might\nbe likely such processes will become simpler over time.</p>\n</li>\n</ul>\n</div>'
}
