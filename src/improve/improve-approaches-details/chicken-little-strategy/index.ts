// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const chickenLittleStrategy: Section = {
  type: 'section',
  slug: 'chicken-little-strategy',
  id: 'Chicken-Little-Strategy',
  sectionType: 'section',
  index: 1,
  title: '<span class="pattern">Chicken-Little Approach</span>',
  titlePlain: 'Chicken-Little Approach',
  numeral: '2',
  children: [
    {
      type: 'section',
      slug: 'intent-34',
      id: '_intent_34',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Software-Migration with incremental steps to avoid or reduce the risks coming along with the Big Bang approach.</p>\n</div>'
        }
      ]
    },
    {
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
    },
    {
      type: 'section',
      slug: 'risks-2',
      id: '_risks_2',
      sectionType: 'section',
      index: 2,
      title: 'Risks',
      titlePlain: 'Risks',
      numeral: '3',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Gateways can be highly complex.\nImplementing a forward gateway may not be possible due to the structure of the legacy system.</p>\n</li>\n<li>\n<p>It may be difficult to keep consistency between the legacy and the target database.</p>\n</li>\n<li>\n<p>A composite system is highly complex and not easy to comprehend for new team members. The loss of experienced developers and their know-how are even more\nsevere.</p>\n</li>\n<li>\n<p>Estimating time and budget is difficult.\nWhen the migration begins, it is challenging to estimate how long it will take and how much it will cost.</p>\n</li>\n<li>\n<p>Also, reverse engineering is tricky.\nThere is the danger of missing features, so early feedback of users is invaluable.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-16',
      id: '_applicability_16',
      sectionType: 'section',
      index: 3,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Use this approach (or the main ideas) when you need to migrate in a safe and incremental way. It is highly recommended for mission-critical systems.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'consequences-8',
      id: '_consequences_8',
      sectionType: 'section',
      index: 4,
      title: 'Consequences',
      titlePlain: 'Consequences',
      numeral: '5',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Software migration is not easy, and one will need patience and endurance.\nMigration projects can last several years. For that, a strong team is required.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'also-known-as-10',
      id: '_also_known_as_10',
      sectionType: 'section',
      index: 5,
      title: 'Also Known As',
      titlePlain: 'Also Known As',
      numeral: '6',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Incremental migration</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'related-patterns-19',
      id: '_related_patterns_19',
      sectionType: 'section',
      index: 6,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '7',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#database-first-approach">Section 4.7.3, &#8220;<span class="pattern">Database First Approach</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#database-last-approach">Section 4.7.4, &#8220;<span class="pattern">Database Last Approach</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#composite-database-approach">Section 4.7.5, &#8220;<span class="pattern">Composite Database Approach</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references-13',
      id: '_references_13',
      sectionType: 'section',
      index: 7,
      title: 'References',
      titlePlain: 'References',
      numeral: '8',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>[1] <a href="#Brodie-Stonebraker">[Brodie-Stonebraker]</a></p>\n</li>\n<li>\n<p>[2] Matthias Möser, Abschied nehmen vom Legacy-System, Java Magazin 3.18, <a href="https://entwickler.de/leseproben/legacy-systeme-agil-ersetzen-579827753.html" class="bare">https://entwickler.de/leseproben/legacy-systeme-agil-ersetzen-579827753.html</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
