// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description38: Section = {
  type: 'section',
  slug: 'description-38',
  id: '_description_38',
  sectionType: 'section',
  index: 2,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '3',
  children: [
    {
      type: 'olist',
      content:
        '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Identify different user groups, at best disjunct. An example: For an\nonline E-commerce system, such groups might be private and corporate customers.</p>\n<div id="figure-split-initial" class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/cbs-1-initial.png" alt="CBS, initial">\n</div>\n<div class="title">Figure 26. Change-by-split, initial situation</div>\n</div>\n</li>\n<li>\n<p>As a preparation, copy the whole system, with all sources and everything\nrequired to develop, build, test and run the system. This might include\ndatabases or other middleware. Every part should be completely independend\nof the others.</p>\n<div id="figure-split-copied" class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/cbs-2-copied.png" alt="CBS, copied">\n</div>\n<div class="title">Figure 27. Change-by-split, system copied for every user type/category</div>\n</div>\n</li>\n<li>\n<p>Identify commonalities among these different user groups, crosscutting concerns\nthat every user group needs in a common way. In our E-commerce example,\nthose might be pdf-generation, user/role management or the like. Factor out those\ncommons into a separate module/subsystem, which is used by (likely all) other split systems.</p>\n<div class="paragraph">\n<p>Make part of the whole development team responsible for the commons.</p>\n</div>\n<div id="figure-split-commons" class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/cbs-3-factored-commons.png" alt="CBS, commons">\n</div>\n<div class="title">Figure 28. Change-by-split, factored out commons</div>\n</div>\n</li>\n<li>\n<p>Now you can optimize and/or refactor the commons subsystem. As its code\nis now centralized, that task might become somewhat simpler than within\nthe original legacy system. At the same time, remove all commons-code from the split\nsystems - reducing them in size.</p>\n<div class="paragraph">\n<p>Split the rest of the whole development team according the split systems. Make\none developer group responsible for one split system.</p>\n</div>\n<div id="figure-split-reduced-commons" class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/cbs-4-reduced-commons.png" alt="CBS, reduced commons">\n</div>\n<div class="title">Figure 29. Change-by-split, reduced splits, optimized commons</div>\n</div>\n</li>\n<li>\n<p>Now for the core of this approach: Aggressively reduce every split system\nto its core: remove all code not required for the split-specific\nuser group, remove all code that can also be handled by the Commons subsystem.\nThis step might be performed parallel to optimizing the commons.</p>\n<div id="figure-split-final" class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/cbs-5-final.png" alt="CBS, final">\n</div>\n<div class="title">Figure 30. Change-by-split, all split systems reduced/optimized</div>\n</div>\n<div class="paragraph">\n<p>This final step might need extensive preparation, e.g. by creating user-category\nspecific unit-/integration-/acceptance tests. Reducing unneeded code\ncan be quite difficult, if the original code has (extremely) high cyclomatic complexity\nor is very difficult to understand for other reasons (configurability, strange\n  technologies, using strange/outdated/proprietary frameworks etc.).</p>\n</div>\n</li>\n</ol>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Steps 4 and 5 might be interchanged or done in parallel.</p>\n</div>'
    }
  ]
}
