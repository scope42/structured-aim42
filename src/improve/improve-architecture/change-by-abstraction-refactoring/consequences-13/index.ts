// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const consequences13: Section = {
  type: 'section',
  slug: 'consequences-13',
  id: '_consequences_13',
  sectionType: 'section',
  index: 7,
  title: 'Consequences',
  titlePlain: 'Consequences',
  numeral: '8',
  children: [
    {
      type: 'ulist',
      content:
        '<div class="ulist">\n<ul>\n<li>\n<p>Teams can collaboratively move code towards a new implementation by replacing\ncalls to deprecated methods/classes with calls to the abstraction, even in parallel.</p>\n</li>\n<li>\n<p>The refactoring can be made incrementally.</p>\n</li>\n<li>\n<p>The build will remain "green", even when the refactoring is unfinished.</p>\n</li>\n<li>\n<p>The abstraction enables comparison of the behaviour of the old to the new implementation in production\nor testing environments to make sure that the new implementation matches the old behaviour.</p>\n</li>\n</ul>\n</div>'
    }
  ]
}
