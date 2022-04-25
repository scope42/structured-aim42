// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description33: Section = {
  type: 'section',
  slug: 'description-33',
  id: '_description_33',
  sectionType: 'section',
  index: 1,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '2',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Chicken Little was already described back in the 1990s of the last century by Michael L. Brodie and Michael Stonebreaker and is explained in their great book \'Migrating Legacy Systems\' [1].</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The name of this approach originates from a Walt Disney cartoon, where the protagonist Chicken Little is a very young hero who saves all with his cautious &amp; conservative character. These are also highly essential &amp; invaluable qualities in software migration.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The name \'Cold Turkey\' for a Big Bang migration was also introduced by Brodie and Stonebreaker, which is a synonym for cold detoxification and therefore clearly describes the dislike of the authors in this kind of migration.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The central idea of Chicken Little is to create a composite system consisting of the legacy system and the new target system.\nIncrementally, components of the legacy system are replaced with components of the target system.\nThe legacy system thereby shrinks and the target system grows.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The composition is implemented through gateways.\nThey transfer both reading and writing requests to the respectively other system.\nA gateway can be a forward or a reverse gateway.\nA forward gateway is integrated into the legacy system and routes requests to the target system.\nA reverse gateway is part of the target system routing to the legacy system.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Brodie and Stonebreaker define Chicken Little as 11 steps.\nEach step is applied for every increment of the migration.\nAn increment can be a use case or a bounded context.\nThe execution of these 11 steps can be in any order and parallel; steps can be omitted.</p>\n</div>'
    },
    {
      type: 'olist',
      content:
        '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p><strong>Incrementally analyze the legacy system</strong></p>\n<div class="paragraph">\n<p>First, it is necessary to understand the legacy system.\nConsequently reverse engineering is needed to find out the requirements, which in principle are valid for the legacy system as well as for the target system.\nUtilize documentation (if at all exists), but be aware that it is mostly outdated and incomplete.\nReading legacy source code might be reasonable only in rare cases.\nApart from that, interview the people who support, manage or use the legacy system.\nIn doing so, consider the principle of need-to-know, otherwise, you can fall into analysis paralysis, which results in delayed development.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally decompose the legacy system structure</strong></p>\n<div class="paragraph">\n<p>In this step, the legacy system is modified to achieve a decomposable structure (3-layer-architecture) or well-defined interfaces.\nThis is required for optimally integrating a gateway (step 7).\nThe cost of this procedure depends on the current structure of the legacy system and might even be unachievable.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally design the target interface</strong></p>\n<div class="paragraph">\n<p>GUIs or APIs of the target system are designed and specified, including a general idea of the architecture of the target system.\nA decision is reached whether gateways should be built.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally design the target application</strong></p>\n<div class="paragraph">\n<p>Similar to the previous step, business logic and rules must be designed and specified.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally design the target database</strong></p>\n<div class="paragraph">\n<p>Finally, the database must be designed to meet data requirements. A prerequisite is understanding the legacy data store which might be complex, especially if it is not a relational database.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally install the target environment</strong></p>\n<div class="paragraph">\n<p>First of all, the requirements for the target environment must be identified. Later on, hardware and server machines will have to be installed and tested, a deployment strategy is developed, and a concept regarding user management finalized.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally create and install the necessary gateways</strong></p>\n<div class="paragraph">\n<p>Now one or more gateways have to be implemented.\nThe best way a gateway works is for fully decomposable systems (3-layer-architecture). For that case either use:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>forward database gateway, see <a href="#database-first-approach">Section 4.7.3, &#8220;<span class="pattern">Database First Approach</span>&#8221;</a></p>\n</li>\n<li>\n<p>reverse database gateway, see <a href="#database-last-approach">Section 4.7.4, &#8220;<span class="pattern">Database Last Approach</span>&#8221;</a></p>\n</li>\n<li>\n<p>forward and reverse database gateway, see <a href="#composite-database-approach">Section 4.7.5, &#8220;<span class="pattern">Composite Database Approach</span>&#8221;</a></p>\n</li>\n</ul>\n</div>\n<div class="paragraph">\n<p>In not fully decomposable systems the gateway must be placed on a higher level, for example between presentation and logic tier.\nIt might be possible to receive a 3-layer-architecture in the legacy system by refactoring (step 2).\nAs the target system grows and the legacy system shrinks, a gateway is reduced accordingly.\nIn the situation of having both a forward and a reverse gateway, this results probably in redundant data in the legacy and target database. Keeping consistency is challenging and distributed transaction (2-phase commit) might be necessary.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally migrate the legacy database</strong></p>\n<div class="paragraph">\n<p>The target DBMS is installed, and the DB-schema resulting from step 5 is implemented. The data has to be migrated, and a gateway is utilized for legacy application calls.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally migrate the legacy application</strong></p>\n<div class="paragraph">\n<p>Modules with business logic based on step 4 will have to be rewritten.\nThe selection of these migrated modules is based on technical and organizational criteria.\nTake that one which is the simplest, most needed, or that one facing the highest risk.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally migrate the legacy interface</strong></p>\n<div class="paragraph">\n<p>GUIs and APIs designed in step 3 are implemented.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally cutover to the target system</strong></p>\n<div class="paragraph">\n<p>Cutover is the process of switching users and their operations from the legacy to the target system.\nThen legacy components can be discarded.\nThe smaller these steps are, the lower the risk.\nIf one step fails, only this step has to be repeated and not the whole project.</p>\n</div>\n</li>\n</ol>\n</div>'
    }
  ]
}
