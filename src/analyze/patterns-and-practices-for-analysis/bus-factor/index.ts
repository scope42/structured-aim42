// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const busFactor: Section = {
  type: 'section',
  slug: 'bus-factor',
  id: 'Bus-Factor',
  sectionType: 'section',
  index: 28,
  title: '<span class="pattern">Bus factor</span>',
  titlePlain: 'Bus factor',
  numeral: '29',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The bus factor is a measurement of the risk resulting from information and capabilities not being shared among team members, from the phrase "in case they get hit by a bus" (Wikipedia).</p>\n</div>'
    },
    {
      type: 'section',
      slug: 'intent-29',
      id: '_intent_29',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Improve the structure of a system or its documentation so that the organisation is not at risk if certain key people leave.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-28',
      id: '_description_28',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>In an ideal world, the whole team owns the all code and anybody can safely change anything. Often this is not the case, because</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>the (monolithic) system has already grown so large and complex that knowing all the details and concepts are too overwhelming for\na single person</p>\n</li>\n<li>\n<p>requirements of certain parts of the domain are always given to the same developer (by the management), because this\ndeveloper knows everything about the domain and can therefore implement these requirements very fast. Any newbie would need\na lot of time to achieve small things and the organisation takes on this organisational debt (they gain an advantage\nshort term, but it could be very problematic long term), because they don&#8217;t want to invest in distributing knowledge</p>\n</li>\n<li>\n<p>developers want to increase their employability. If only they know about a critical part of the system, they cannot be fired\nor put under pressure easily. Therefore they want to protect those parts and try hard to not let others work on the code.\nSometimes this even leads to deliberate complexity - complexity that has been introduced to obfuscate better understanding\nby other developers.</p>\n</li>\n</ul>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Usually, a team has already a good grasp on which parts of the system certain developers own the knowledge almost completely.\nIt is vital to get some numbers through mining repository data, e.g. if you think that dev A is the only one knowing about\nsome security code, then you can analyze the commit history of the security package. Adam Tornhill gives a lot of ideas\nand also code snippets on how to do that in his book "Your Code As a Crime Scene". What he does is looking at the changed\nlines of a package over all the commits of a certain time frame. If a large amount (e.g. &gt;80%) of those commits is coming from a single\ndevelopers, you should act.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'experiences-11',
      id: '_experiences_11',
      sectionType: 'section',
      index: 2,
      title: 'Experiences',
      titlePlain: 'Experiences',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>It is often easy to spot and verify problematic knowledge islands, but getting rid of them (e.g. pair programming,\ndocumentation, automation) is really hard, because the developers living on that knowledge island usually want to\nprotect it.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-14',
      id: '_applicability_14',
      sectionType: 'section',
      index: 3,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '4',
      children: []
    },
    {
      type: 'section',
      slug: 'related-patterns-17',
      id: '_related_patterns_17',
      sectionType: 'section',
      index: 4,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '5',
      children: []
    }
  ]
}
