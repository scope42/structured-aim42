// This file is generated. Please don't modify it directly.

import { Section } from '../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const traceability: Section = {
  type: 'section',
  slug: 'traceability',
  id: 'Traceability',
  sectionType: 'section',
  index: 19,
  title: '<span class="pattern">Traceability</span>',
  titlePlain: 'Traceability',
  numeral: '20',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Maintain references to the origin of problems or issues: Remember who told you about a problem, in which documents you found issues and in what version of the source you identified risks or faults.</p>\n</div>'
    },
    {
      type: 'section',
      slug: 'intent-58',
      id: '_intent_58',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>When discussing problems, some stakeholders will question or doubt your findings (see pattern <a href="#Expect-Denial">Section 5.8, &#8220;<span class="pattern">Expect Denial</span>&#8221;</a>). Keeping thorough references to the origins or original sources of major\nfindings keep eventual critics in check.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-56',
      id: '_description_56',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content: '<div class="paragraph">\n<p>(To be done)</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'experiences-28',
      id: '_experiences_28',
      sectionType: 'section',
      index: 2,
      title: 'Experiences',
      titlePlain: 'Experiences',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Some contrary experiences happened when we neglected traceability:</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Stakeholder questioned some of our findings - we could not immediately trace those findings\nback to an original source (i.e. an interview protocol, a particular file/version of source code). These stakeholders immediately suspected <em>all</em> our findings, not only the one or two in question.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Please keep in mind that a lack of traceability, especially for disputed findings or problems,\nmight lead to serious loss of credibility.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>On the other hand, maintaining detailed references is a time-consuming task. You easily spend\nhours with (rather trivial) bookkeeping activities, instead of identifying new and exciting problems.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-31',
      id: '_applicability_31',
      sectionType: 'section',
      index: 3,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Apply traceability whenever you identify problems or issues</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>which might discredit or offend one important stakeholder,</p>\n</li>\n<li>\n<p>which seriously impact parts of the underlying organization, company or business unit,</p>\n</li>\n<li>\n<p>that carry huge financial, technical or organizational risks or penalties.</p>\n</li>\n</ul>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Short rule: The more expensive or dangerous, the more traceability you need.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'related-patterns-34',
      id: '_related_patterns_34',
      sectionType: 'section',
      index: 4,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '5',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Expect-Denial">Section 5.8, &#8220;<span class="pattern">Expect Denial</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
