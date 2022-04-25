// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const experiences5Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'experiences-5',
  id: '_experiences_5',
  sectionType: 'section',
  index: 2,
  title: 'Experiences',
  titlePlain: 'Experiences',
  numeral: '3',
  content:
    '<div class="paragraph">\n<p>As previously mentioned, we found three recurrent series of circumstances in which architecture decisions and the process of architecting reportedly generated social debt.</p>\n</div>\n<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p><strong>Lonesome Architecting:</strong> we observed this pattern manifesting when non-architects are forced to make decisions while actual architects are "too few and far apart".\nOne of the software architects reporting this condition in industry also complained that he and his colleagues had [&#8230;&#8203;] not enough time to dedicate to decision-making (and related changes) as well as properly disseminating architecture decisions.\nSome of the most common consequences we found resulting from this\npattern are: (a) decision unawareness; (b) misalignment between\nproduct version and architecture; (c) lack of awareness on the\nproduct&#8217;s needs; (d) overly fast decision-making to "patch-up". The\ndebt in this case is associated to delays needed to find out about\ndecisions and apply the necessary modifications, possibly rewriting\ncode with considerable waste. Also, from a social point of view, this\ncircumstance results in loss of project vision (i.e., frequent quotes\nwere "what are we doing? what does the product need for its\nimprovement?") with resulting frustration and mistrust.</p>\n</li>\n<li>\n<p><strong>Obfuscated Architecting:</strong> Obfuscated architecting takes place when multiple sub-groups emerge in a development network without a harmonised organisational and socio-technical vision necessary to operate in the network. We observed this pattern manifesting when new or changed architecture decisions imply implementation changes that necessitate new people to be included in the development network (e.g., different skills are needed). we observed this pattern in presence of multiple products (both legacy and new) being operated together but in the process of being integrated. New people to be included in the development network lacked the frame of mind and vision needed to understand and cope with the legacy product. This obfuscates the communication of architecture decisions. Some of the most common consequences we found resulting from this pattern are: (a) single communication points for architecture decisions - many developers eventually felt left out of the development network when it came to software architecture, since they could not reach architects properly, this led to time waste and resulting  developers\' frustration; (b) circumstances indicating socio-technical code-churn.</p>\n</li>\n<li>\n<p><strong>Architecting by Osmosis:</strong> In layman&#8217;s terms, osmosis refers to the process of permeating a solvent through a semi-permeable (series of) membrane(s). By comparison, architecting by osmosis means making architecture decisions using knowledge that is filtered through many semi-permeable communication links. we observed architecting by osmosis manifesting when the following sequence of events occurs: (1) the effects of certain decisions reach clients and product operators but result in inoperable software; (2) operators, pushed by clients, share malcontent with developers and suggest technical changes; (3) developers evaluate (and sometimes partially implement) possible technical changes and suggest change to architecture decisions; (4) architects make necessary changes in decisions with knowledge that was partially filtered by all communication layers in the development network.</p>\n</li>\n</ol>\n</div>'
}
