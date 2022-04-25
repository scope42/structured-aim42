// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const butterflyMethodology: Section = {
  type: 'section',
  slug: 'butterfly-methodology',
  id: '_butterfly_methodology',
  sectionType: 'section',
  index: 5,
  title: '<span class="pattern">Butterfly-Methodology</span>',
  titlePlain: 'Butterfly-Methodology',
  numeral: '6',
  children: [
    {
      type: 'section',
      slug: 'intent-38',
      id: '_intent_38',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Data migration method without the need of gateways.\nEnables zero-downtime migrations by working with temporary data stores.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-37',
      id: '_description_37',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The Butterfly methodology focuses on data. There is no need for a gateway like in the Chicken-Little Strategy.\nAt the beginning there is an initial data migration, which can be used to develop the new application\nwithout an influence on the legacy system. When the migration process starts, the data of the legacy system\ngets freezed and set to read-only.\nFrom now on data changes will be stored in a temporarily store.\nA Data Access Allocator (DAA) decides, if a request has to be send to temp store (for already changed data) or to the original database.\nWith the help of a Chrysalizer (a data transformator), where transformation rules are implemented, all the data from the read-only database will be moved to the new system.\nNo data will be lost, because changes are written to the first temp store.\nWhen the initial migration is finished, the data of the temp-store will be migrated, changes will be written to a second temp store and the first one\nis set to read-only. This process will continue until the time period of the migration is so short, that there will be no change in between the two stores anymore.\nAt this moment, the legacy system can be shut down, the last temp store gets migrated and the new system is turned on.\nThis approach helps to migrate a productive system without downtime.\nAnother pro is, that the process can be canceled at any time by rolling back the temp stores. It is also possible to execute tests of the parallel\ndevelopment with actual data.\nA problem can be the amount of hardware that is needed to keep all the temp stores if you have a massive amount of data.\nAlso it can be very expensive to implement the DAA.</p>\n</div>'
        },
        {
          type: 'image',
          content:
            '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/butterfly.png" alt="Butterfly-Methodology">\n</div>\n<div class="title">Figure 25. Butterfly-Methodology</div>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'experiences-13',
      id: '_experiences_13',
      sectionType: 'section',
      index: 2,
      title: 'Experiences',
      titlePlain: 'Experiences',
      numeral: '3',
      children: []
    },
    {
      type: 'section',
      slug: 'risks-3',
      id: '_risks_3',
      sectionType: 'section',
      index: 3,
      title: 'Risks',
      titlePlain: 'Risks',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>If the Butterfly Method will be successful depends on the factor v / u,\nwhere u is the speed of the Chrysalizer and v the speed of the DAA to setup new temp stores.\nIf v = 0 this approach is similar to the <a href="#big-bang-approach">Section 4.7.1, &#8220;<span class="pattern">Big Bang Approach</span>&#8221;</a>, if v &gt; u the migration will never end.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-18',
      id: '_applicability_18',
      sectionType: 'section',
      index: 4,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '5',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Apply this pattern if you need to migrate a mass of data without downtime.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'consequences-9',
      id: '_consequences_9',
      sectionType: 'section',
      index: 5,
      title: 'Consequences',
      titlePlain: 'Consequences',
      numeral: '6',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Enables zero downtime migrations by working with temporary data stores.\nIf the amount of data is huge, there is a need for a lot of hardware.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Critical success factors are:</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>a very good understanding of the old and new system</p>\n</li>\n<li>\n<p>an initial migration without errors / mistakes</p>\n</li>\n<li>\n<p>a fast Chrysalizer</p>\n</li>\n<li>\n<p>a efficient Data Access Allocator</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'also-known-as-11',
      id: '_also_known_as_11',
      sectionType: 'section',
      index: 6,
      title: 'Also Known As',
      titlePlain: 'Also Known As',
      numeral: '7',
      children: []
    },
    {
      type: 'section',
      slug: 'related-patterns-23',
      id: '_related_patterns_23',
      sectionType: 'section',
      index: 7,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '8',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Chicken-Little-Strategy">Section 4.7.2, &#8220;<span class="pattern">Chicken-Little Approach</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references-17',
      id: '_references_17',
      sectionType: 'section',
      index: 8,
      title: 'References',
      titlePlain: 'References',
      numeral: '9',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#BISBAL">[BISBAL]</a></p>\n</li>\n<li>\n<p><a href="#ERDLE">[ERDLE]</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
