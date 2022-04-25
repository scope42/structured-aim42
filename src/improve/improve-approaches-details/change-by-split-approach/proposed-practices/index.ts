// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const proposedPractices: Section = {
  type: 'section',
  slug: 'proposed-practices',
  id: '_proposed_practices',
  sectionType: 'section',
  index: 7,
  title: 'Proposed practices',
  titlePlain: 'Proposed practices',
  numeral: '8',
  children: [
    {
      type: 'ulist',
      content:
        '<div class="ulist">\n<ul>\n<li>\n<p>Find a relatively small user-group and <em>pilot</em> (try-out)\nthis approach.</p>\n</li>\n<li>\n<p>Involve the affected user groups as early as possible to\nfacilitate possible required changes on their side.</p>\n</li>\n<li>\n<p>Try to to identify potential <em>neuralgic sections</em> within the code,\nthat do not belong into the factored-out commons and will likely affect\nseveral of the split systems. Try to minimize the effort required\nto analyze and untangle such sections by gathering people from various\nsplit-teams.</p>\n</li>\n<li>\n<p>Don&#8217;t try everything at once: Spread out step 5 (optimize splits) over\nseveral, possibly many, development iterations or releases. Let the split\nteams become comfortable with their reduced split systems.</p>\n</li>\n</ul>\n</div>'
    }
  ]
}
