// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const staticCodeAnalysis: Section = {
  type: 'section',
  slug: 'static-code-analysis',
  id: 'Static-Code-Analysis',
  sectionType: 'section',
  index: 24,
  title: '<span class="pattern">Static Code Analysis</span>',
  titlePlain: 'Static Code Analysis',
  numeral: '25',
  children: [
    {
      type: 'section',
      slug: 'intent-25',
      id: '_intent_25',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Static Analysis can serve two purposes:</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Analyse source code to identify building blocks and their dependencies, determine complexity, coupling, cohesion and other structural properties.</p>\n</li>\n<li>\n<p>Detect certain types of bugs, dangerous coding patterns and bad coding style.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-24',
      id: '_description_24',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Use source code analysis tools to analyse static properties of the system&#8217;s source code,\ne.g. the following:</p>\n</div>'
        },
        {
          type: 'dlist',
          content:
            '<div class="dlist">\n<dl>\n<dt class="hdlist1">Coupling and dependencies</dt>\n<dd>\n<p>Where do the building-blocks (e.g. classes, packages, modules, subsystems) of your system depend upon? What are the intra-system call- and communication relationships?</p>\n</dd>\n</dl>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'experiences-10',
      id: '_experiences_10',
      sectionType: 'section',
      index: 2,
      title: 'Experiences',
      titlePlain: 'Experiences',
      numeral: '3',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Many projects (commercial and open-source) apply automated static code analysis as part of their build processes.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-11',
      id: '_applicability_11',
      sectionType: 'section',
      index: 3,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Apply static code analysis when the code base is medium sized or large and the appropriate tools are available.</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Many metrics and tools are tailored to object-oriented programming languages.</p>\n</li>\n<li>\n<p>Dynamically typed languages often have limited tool support.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'also-known-as-7',
      id: '_also_known_as_7',
      sectionType: 'section',
      index: 4,
      title: 'Also Known As',
      titlePlain: 'Also Known As',
      numeral: '5',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Code quality analysis</p>\n</li>\n<li>\n<p>Software measurement and metrics</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'related-patterns-14',
      id: '_related_patterns_14',
      sectionType: 'section',
      index: 5,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '6',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Software-Archeology">Section 2.3.22, &#8220;<span class="pattern">Software Archeology</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Structural-Analysis">[Structural-Analysis]</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references-9',
      id: '_references_9',
      sectionType: 'section',
      index: 6,
      title: 'References',
      titlePlain: 'References',
      numeral: '7',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="http://sonarqube.org">SonarQube</a>, LGPL-licenced open-source platform to analyze code.</p>\n</li>\n<li>\n<p><a href="http://clarkware.com/software/JDepend.html">JDepend</a>, open-source Java dependency checker.</p>\n</li>\n<li>\n<p><a href="http://www.hello2morrow.com/products/sonargraph">Sonargraph</a>, static code analyzer focused on software structure and architecture.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
