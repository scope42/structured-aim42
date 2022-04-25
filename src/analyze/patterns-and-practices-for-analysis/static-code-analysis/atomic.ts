// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const staticCodeAnalysisAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'static-code-analysis',
  id: 'Static-Code-Analysis',
  sectionType: 'section',
  index: 24,
  title: '<span class="pattern">Static Code Analysis</span>',
  titlePlain: 'Static Code Analysis',
  numeral: '25',
  content:
    '<div class="sect4">\n<h5 id="_intent_25">Intent</h5>\n<div class="paragraph">\n<p>Static Analysis can serve two purposes:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>Analyse source code to identify building blocks and their dependencies, determine complexity, coupling, cohesion and other structural properties.</p>\n</li>\n<li>\n<p>Detect certain types of bugs, dangerous coding patterns and bad coding style.</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_description_24">Description</h5>\n<div class="paragraph">\n<p>Use source code analysis tools to analyse static properties of the system&#8217;s source code,\ne.g. the following:</p>\n</div>\n<div class="dlist">\n<dl>\n<dt class="hdlist1">Coupling and dependencies</dt>\n<dd>\n<p>Where do the building-blocks (e.g. classes, packages, modules, subsystems) of your system depend upon? What are the intra-system call- and communication relationships?</p>\n</dd>\n</dl>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_experiences_10">Experiences</h5>\n<div class="ulist">\n<ul>\n<li>\n<p>Many projects (commercial and open-source) apply automated static code analysis as part of their build processes.</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_applicability_11">Applicability</h5>\n<div class="paragraph">\n<p>Apply static code analysis when the code base is medium sized or large and the appropriate tools are available.</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>Many metrics and tools are tailored to object-oriented programming languages.</p>\n</li>\n<li>\n<p>Dynamically typed languages often have limited tool support.</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_also_known_as_7">Also Known As</h5>\n<div class="ulist">\n<ul>\n<li>\n<p>Code quality analysis</p>\n</li>\n<li>\n<p>Software measurement and metrics</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_related_patterns_14">Related Patterns</h5>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#Software-Archeology">Section 2.3.22, &#8220;<span class="pattern">Software Archeology</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Structural-Analysis">[Structural-Analysis]</a></p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_references_9">References</h5>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="http://sonarqube.org">SonarQube</a>, LGPL-licenced open-source platform to analyze code.</p>\n</li>\n<li>\n<p><a href="http://clarkware.com/software/JDepend.html">JDepend</a>, open-source Java dependency checker.</p>\n</li>\n<li>\n<p><a href="http://www.hello2morrow.com/products/sonargraph">Sonargraph</a>, static code analyzer focused on software structure and architecture.</p>\n</li>\n</ul>\n</div>\n</div>'
}
