// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const risks5: Section = {
  type: 'section',
  slug: 'risks-5',
  id: '_risks_5',
  sectionType: 'section',
  index: 3,
  title: 'Risks',
  titlePlain: 'Risks',
  numeral: '4',
  children: [
    {
      type: 'ulist',
      content:
        '<div class="ulist">\n<ul>\n<li>\n<p>You need to overcome the lack of will to actually finish the strangling (usually political will from\nnon-technical stakeholders manifested as lack of budget). If you don&#8217;t completely kill off the old system, you&#8217;ll\nend up in a worse mess because your system now has two ways of doing everything with an awkward interface between the\ntwo. Later, another wave of developers will probably decide to strangle what&#8217;s there, writing yet another strangler\napplication, and again a lack of will might leave the system in an even worse state, with three ways of doing things [1].</p>\n</li>\n<li>\n<p>You need to have consensus across the development team(s) on the future state of the architecture and how to get there.\nIf everyone runs in another direction, then you end up with a new system, which is also hard to maintain.</p>\n</li>\n<li>\n<p>If you&#8217;re introducing technologies that are new to the team or to support/maintenance staff (e.g. adding reliable async\nmessaging to what is currently a synchronous three-tier client/server architecture) then you have to ensure that there\nare experienced technical leads on the project who know how to build systems with that technology and support those\nsystems. And those tech leads have to stick with the project for some time after the old app has been fully strangled.\nOtherwise, the architecture will degrade as inexperienced developers modify it in ways they know but not in ways that\nfit with the new architecture [1].</p>\n</li>\n<li>\n<p>Strangling creates a layer of goo and there is a risk that this layer becomes a mess, too.</p>\n</li>\n</ul>\n</div>'
    }
  ]
}
