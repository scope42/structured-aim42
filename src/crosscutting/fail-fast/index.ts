// This file is generated. Please don't modify it directly.

import { Section } from '../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const failFast: Section = {
  type: 'section',
  slug: 'fail-fast',
  id: 'Fail-Fast',
  sectionType: 'section',
  index: 9,
  title: '<span class="pattern">Fail Fast</span>',
  titlePlain: 'Fail Fast',
  numeral: '10',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>"fail fast" is actually a reference to an architecture principle describing a runtime behaviour of a system. I.e. if the application already knows that a remote system is not reachable, it should not try to send other/ more requests to this system so that this system can recover. Instead the application should immediately return either an error message or - even better - a functional fallback value.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Transferring this to software improvements, a fail-fast approach would be to immediately report when an improvement can not be applied. Don&#8217;t wait e.g. until the end of the sprint to communicate the failure. Instead this early feedback provides the opportunity to reflect and pivot on the improvement before the next sprint is started.</p>\n</div>'
    },
    {
      type: 'section',
      slug: 'takeaways',
      id: '_takeaways',
      sectionType: 'section',
      index: 0,
      title: 'Takeaways',
      titlePlain: 'Takeaways',
      numeral: '1',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>fail-fast is actually an architecture principle for software runtime behaviour</p>\n</li>\n<li>\n<p>report failures as early as possible</p>\n</li>\n<li>\n<p>use failures as opportunities to pivot</p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
