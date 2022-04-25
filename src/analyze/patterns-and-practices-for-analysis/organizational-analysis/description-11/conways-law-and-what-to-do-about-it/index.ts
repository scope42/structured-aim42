// This file is generated. Please don't modify it directly.

import { Section } from '../../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const conwaysLawAndWhatToDoAboutIt: Section = {
  type: 'section',
  slug: 'conways-law-and-what-to-do-about-it',
  id: '_conways_law_and_what_to_do_about_it',
  sectionType: 'section',
  index: 1,
  title: 'Conway&#8217;s Law and what to do about it',
  titlePlain: 'Conway’s Law and what to do about it',
  numeral: '2',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>In 1968 Conway observed that <em>"organizations produce designs which are copies of the communication\nstructures of these organizations (If you have four groups working on a compiler, you&#8217;ll get a 4-pass compiler)"</em>. Around\n2006 many companies had a frontend, backend and middleware department reflecting the three-tier architecture they were\nbuilding. Modern companies have individual deployable services built by cross-functional teams.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>James Coplien wrote in his book that <em>"If the parts of an organization (e.g. teams,\ndepartments, or subdivisions) do not closely reflect the essential parts of the product, or if the relationship between\norganizations do not reflect the relationships between product parts, then the project will be in trouble&#8230;&#8203; Therefore:\nMake sure the organization is compatible with the product architecture"</em>.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>David Parnas (1972, 1978) argued that it is easier to split development work across a\ngroup if people can work independently and in parallel. To support parallelism, Parnas encouraged\ndevelopers to avoid sharing assumptions and data. Specifically, he contended that every developer’s task\nassignment should lie within a product module that is “characterized by its knowledge of a design\ndecision that it hides from all others” (1972: p. 1056)</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>That means that the flexibility of an organization is important to effective design\nand operations. It also means that you first create your architecture and then form the organizational communication\naround it. This is not as crazy as it sounds, because existing departments can still exist, but the people inside those\ndepartments need to be insourced into the newly formed product teams representing end-to-end the individual services or\ncomponents of the system.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p><strong>If you want to improve your architecture you need to improve your organization as well</strong></p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>TODO: collect more examples of org transformation</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Since systems usually live longer than corporate structures, it is important that managers keep their organisation\nflexible. An example for organizational flexibility is Soundcloud.\nThey experimented with different organizational models to find the one that fit product development best. That\nexperimentation is possible is important to note - many organizations don&#8217;t do that. They moved over a couple of years\nfrom the classical approach of separate development and operation teams to a structure where teams can act autonomously\nand build and run their systems without handovers to other teams. Since there is still a need for centralized work they\ncreated a production engineering team which takes care of common infrastructure ("run the system that runs systems") and\ndo internal consulting in case a team needs help.\nFor some companies experimentation is really hard, e.g., a large insurance company has 800 people in an operations department and\nclaims because of that "You build it, you run it" is not possible, the company could still keep the departments, but in fact it\npractices insourcing operations people (or UX specialists or business analysts, etc.) into the product teams. That way the\ndepartments, which are hard to change, still exist, but there&#8217;s still a good chance to create a cohesive team structure.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>An example of a popular change of software producing organizations is the move from operations/development/business/testing\nsilos to functional silos (e.g. a cross functional team responsible for product search), because the optimized\nprocess-based organization is horizontally focused on outcomes, not vertically oriented around skills like testing,\ndevelopment and operations.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>TODO: provide more case studies, e.g. UK Government Digital Services, Google, Amazon, ING, Otto</p>\n</div>'
    }
  ]
}
