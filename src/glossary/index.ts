// This file is generated. Please don't modify it directly.

import { Section } from '../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const glossary: Section = {
  type: 'section',
  slug: 'glossary',
  id: '_glossary',
  sectionType: 'appendix',
  index: 9,
  caption: 'Appendix C: ',
  title: 'Glossary',
  titlePlain: 'Glossary',
  numeral: 'C',
  children: [
    {
      type: 'dlist',
      content:
        '<div class="dlist">\n<dl>\n<dt class="hdlist1">AIM42</dt>\n<dd>\n<p>Architecture Improvement Method.</p>\n</dd>\n<dt class="hdlist1">ATAM</dt>\n<dd>\n<p>Architecture Tradeoff Analysis Method. Extensively described in\n<a href="#Clements-ATAM">Clemens-2001</a> and <a href="#SEI-ATAM">online by the SEI</a>,\nbriefly described as <a href="#ATAM">aim42 pattern</a>.</p>\n</dd>\n<dt class="hdlist1">Failure</dt>\n<dd>\n<p>Loss of functionality under defined (<em>stated</em>) conditions.</p>\n</dd>\n<dt class="hdlist1">Issue</dt>\n<dt class="hdlist1">Remedy</dt>\n<dt class="hdlist1">SEI</dt>\n<dd>\n<p>Software Engineering Institute at the Carnegie Mellon University.\nA federally funded research and development institute,\nsponsored by the US Departement of Defense.</p>\n</dd>\n</dl>\n</div>'
    },
    {
      type: 'dlist',
      content:
        '<div id="System" class="dlist">\n<dl>\n<dt class="hdlist1">System</dt>\n<dd>\n<p>The system to be improved - often a single software system, but it might be a complex combination of hardware, software and organizational aspects. <em>Systems</em> in our sense consists of:</p>\n<div class="ulist">\n<ul>\n<li>\n<p>software, usually with corresponding data structures and data</p>\n</li>\n<li>\n<p>required infrastructure software, like operating system, database, UI-frameworks, middleware etc.</p>\n</li>\n<li>\n<p>required hardware infrastructure, like processors, storage facilities, network, routers etc.</p>\n</li>\n<li>\n<p>associated development processes, like requirements engineering, architecture, implementation, version- and configuration management, build- and deployment</p>\n</li>\n<li>\n<p>associated administration and operation processes or procedures</p>\n</li>\n<li>\n<p>associated organizational processes, like budgeting, HR, controlling, management etc.</p>\n</li>\n<li>\n<p>associated external systems, like data-/event providers or consumers.</p>\n</li>\n</ul>\n</div>\n</dd>\n</dl>\n</div>'
    },
    {
      type: 'paragraph',
      content: '<div class="paragraph">\n<p>and maybe even more :-)</p>\n</div>'
    },
    {
      type: 'dlist',
      content:
        '<div class="dlist">\n<dl>\n<dt class="hdlist1">Value</dt>\n<dd>\n<p>(of an improvement or remedy). Approximately -1 times the cost of the associated issue(s). If an improvement solves only part of an issue, value estimation becomes much harder.</p>\n</dd>\n</dl>\n</div>'
    }
  ]
}
