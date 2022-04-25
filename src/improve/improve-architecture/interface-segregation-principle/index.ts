// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const interfaceSegregationPrinciple: Section = {
  type: 'section',
  slug: 'interface-segregation-principle',
  id: 'Interface-Segregation-Principle',
  sectionType: 'section',
  index: 4,
  title: '<span class="pattern">Interface Segregation Principle</span>',
  titlePlain: 'Interface Segregation Principle',
  numeral: '5',
  children: [
    {
      type: 'section',
      slug: 'intent-44',
      id: '_intent_44',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Reduce coupling between clients and service providers.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-43',
      id: '_description_43',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Service components may provide more functionality than required by one client.\nTo remove the client&#8217;s dependency from functionality not required introduce interfaces that are tailored\nto the client&#8217;s needs.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-24',
      id: '_applicability_24',
      sectionType: 'section',
      index: 2,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content: '<div class="paragraph">\n<p>Apply when</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>clients only require a restricted functionality from a complex service,</p>\n</li>\n<li>\n<p>you have to deal with low cohesion components you cannot change</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'consequences-15',
      id: '_consequences_15',
      sectionType: 'section',
      index: 3,
      title: 'Consequences',
      titlePlain: 'Consequences',
      numeral: '4',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Reduces coupling between client and service providers. Changing the service provider interface will affect fewer clients.</p>\n</li>\n<li>\n<p>Introduces additional interfaces that must be maintained.</p>\n</li>\n<li>\n<p>You have to find a good compromise between "good client fit" and the number of interfaces.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'also-known-as-14',
      id: '_also_known_as_14',
      sectionType: 'section',
      index: 4,
      title: 'Also Known As',
      titlePlain: 'Also Known As',
      numeral: '5',
      children: []
    },
    {
      type: 'section',
      slug: 'related-practices-5',
      id: '_related_practices_5',
      sectionType: 'section',
      index: 5,
      title: 'Related Practices',
      titlePlain: 'Related Practices',
      numeral: '6',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>If <a href="#Never-Change-Running-System">[Never-Change-Running-System]</a> is a must meaning a service component or its API must not be changed, consider using</p>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#Manage-Complex-Client-Dependencies-With-Facade">Section 4.10.7, &#8220;<span class="pattern">Manage Complex Client Dependencies With Facade</span>&#8221;</a> and</p>\n</li>\n<li>\n<p><a href="#Front-End-Switch">[Front-End-Switch]</a></p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references-22',
      id: '_references_22',
      sectionType: 'section',
      index: 6,
      title: 'References',
      titlePlain: 'References',
      numeral: '7',
      children: []
    }
  ]
}
