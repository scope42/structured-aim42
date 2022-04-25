// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const viewBasedUnderstanding: Section = {
  type: 'section',
  slug: 'view-based-understanding',
  id: 'View-Based-Understanding',
  sectionType: 'section',
  index: 27,
  title: '<span class="pattern">View Based Understanding</span>',
  titlePlain: 'View Based Understanding',
  numeral: '28',
  children: [
    {
      type: 'section',
      slug: 'intent-28',
      id: '_intent_28',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Understand the inner workings and internal (code) structure of of the systems. Document (and communicate) this via\narchitectural views, especially the building-block view.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-27',
      id: '_description_27',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Apply <a href="#arc42">[arc42]</a> views</p>\n</li>\n<li>\n<p>Apply <a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p>Interview technical stakeholders</p>\n</li>\n<li>\n<p>Start either from the</p>\n<div class="ulist">\n<ul>\n<li>\n<p>business context, mainly the external business interfaces</p>\n</li>\n<li>\n<p>technical context, the involved hardware and network structure</p>\n</li>\n<li>\n<p>known technology areas, i.e. products, programming languages or frameworks used</p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>'
        },
        {
          type: 'image',
          content:
            '<div id="figure-view-based-understanding" class="imageblock">\n<div class="content">\n<img src="./images/view-based-understanding.jpg" alt="View based understanding">\n</div>\n<div class="title">Figure 12. Three main views (building block, runtime and deployment view)</div>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-13',
      id: '_applicability_13',
      sectionType: 'section',
      index: 2,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Use view-based-understanding when:</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>System has a medium to large codebase</p>\n</li>\n<li>\n<p>Structural understanding of the code is limited: only few stakeholders can explain\nand reason about the code structure</p>\n</li>\n<li>\n<p>Documentation of the code structure is not existing, outdated or wrong</p>\n</li>\n<li>\n<p>Long-term maintenance and evolution of the system is required</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'consequences-6',
      id: '_consequences_6',
      sectionType: 'section',
      index: 3,
      title: 'Consequences',
      titlePlain: 'Consequences',
      numeral: '4',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Explicit overview of the system context with the external interfaces.</p>\n</li>\n<li>\n<p>Overview of the larger units of source-code (subsystems, high-level components) and their relationships.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'also-known-as-8',
      id: '_also_known_as_8',
      sectionType: 'section',
      index: 4,
      title: 'Also Known As',
      titlePlain: 'Also Known As',
      numeral: '5',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>building block view (formerly known as logical view)</p>\n</li>\n<li>\n<p>high-level overview</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'related-patterns-16',
      id: '_related_patterns_16',
      sectionType: 'section',
      index: 5,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '6',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Docs-As-Code">Section 4.12.2, &#8220;<span class="pattern">Docs-As-Code</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Context-Analysis">Section 2.3.3, &#8220;<span class="pattern">Context-Analysis</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references-11',
      id: '_references_11',
      sectionType: 'section',
      index: 6,
      title: 'References',
      titlePlain: 'References',
      numeral: '7',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#arc42">[arc42]</a></p>\n</li>\n<li>\n<p><a href="https://en.wikipedia.org/wiki/4%2B1_architectural_view_model">4+1 architectural view model</a> by Philippe Kruchten</p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
