// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description41: Section = {
  type: 'section',
  slug: 'description-41',
  id: '_description_41',
  sectionType: 'section',
  index: 2,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '3',
  children: [
    {
      type: 'olist',
      content:
        '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Mark the Method or Class you would like to replace as deprecated.</p>\n</li>\n<li>\n<p>Introduce an abstraction that is implemented by the old implementation. If the\nAPI of the new solution differs, consider the Adapter Pattern to perform<br>\n<span class="image"><img src="./images/change-by-abstraction-1.png" alt="Change by abstraction" width="step 1"></span></p>\n</li>\n<li>\n<p>Incrementally move all the calls where the deprecated Class/Method is still\nbeing used to use the new API instead.<br>\n<span class="image"><img src="./images/change-by-abstraction-2.png" alt="Change by abstraction" width="step 2"></span></p>\n</li>\n<li>\n<p>You can now implement and start testing the new functionality by deriving\nit from the abstraction you introduced in step 2.<br>\n<span class="image"><img src="./images/change-by-abstraction-3.png" alt="Change by abstraction" width="step 3"></span></p>\n</li>\n<li>\n<p>When all the places where the deprecated Class/Method is called directly\nare moved to the abstraction, you can use a feature toggle in a proxy class that implements\nthe common abstraction to toggle between the old and the new implementation.<br>\n<span class="image"><img src="./images/change-by-abstraction-3.png" alt="Change by abstraction" width="step 4"></span></p>\n</li>\n<li>\n<p>If you made sure the new functionality performs well enough, you can remove\nthe deprecated implementation and possibly the abstraction.</p>\n</li>\n</ol>\n</div>'
    }
  ]
}
