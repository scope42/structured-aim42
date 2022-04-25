// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const softwareArcheologyAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'software-archeology',
  id: 'Software-Archeology',
  sectionType: 'section',
  index: 21,
  title: '<span class="pattern">Software Archeology</span>',
  titlePlain: 'Software Archeology',
  numeral: '22',
  content:
    '<div class="sect4">\n<h5 id="_intent_22">Intent</h5>\n<div class="paragraph">\n<p>Understand software by examining existing source code.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_description_21">Description</h5>\n<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Make sure you have the complete code, scripts, frameworks and tools required to build the system.</p>\n</li>\n<li>\n<p>Ensure you have access rights to all required systems, at least to version control, database, participating servers etc.</p>\n</li>\n<li>\n<p>Ensure you can build the system from scratch (compile, load all dependencies, link or whatever steps are necessary).</p>\n</li>\n<li>\n<p>Practice <a href="#View-Based-Understanding">View-Based Understanding</a> by sketching notes or diagrams. Get an <em>aerial view</em>, a glimpse of the topmost, biggest structures in the code.</p>\n</li>\n<li>\n<p>Try to understand the <em>terminology</em> of the original authors by scanning code and searching for multiple occurrences. Start creating a <em>glossary</em>.</p>\n</li>\n<li>\n<p>Introduce <em>tracing</em> or <em>logging</em> statements. Aspect-oriented tools (like AspectJ) might be helpful.</p>\n</li>\n</ol>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_experience_2">Experience</h5>\n<div class="ulist">\n<ul>\n<li>\n<p>By examining the build scripts of the software project or the job definitions on a continuous integration server, you can build the software and the needed testing environment on your own.</p>\n</li>\n<li>\n<p>With simple tools like the <code>git shortlog -ns</code> command you can easily check parts of a software system for potential loss of knowledge based on the commits per developer.</p>\n</li>\n<li>\n<p>By using word clouds, you can quickly extract the most occurring terms in your source code and start creating a glossary for the most prominent words.</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_applicability_10">Applicability</h5>\n<div class="paragraph">\n<p>You have to understand a system with:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>little or no current documentation.</p>\n</li>\n<li>\n<p>no knowledgeable technical stakeholders or development team available</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_related_patterns_11">Related Patterns</h5>\n<div class="ulist">\n<ul>\n<li>\n<p>Code Reading</p>\n</li>\n<li>\n<p><a href="#Runtime-Artifact-Analysis">[Runtime-Artifact-Analysis]</a></p>\n</li>\n<li>\n<p><a href="#Structural-Analysis">[Structural-Analysis]</a></p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_references_6">References</h5>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#Hunt-Archeology">[Hunt-Archeology]</a>, pleasant introduction without adherence to any strict pattern template. Recommended reading.</p>\n</li>\n<li>\n<p><a href="#Moyer-Archeology">[Moyer-Archeology]</a>, short report.</p>\n</li>\n<li>\n<p><a href="#OORP">[OORP]</a>, page 53ff. , "Read all the Code in One Hour" suggest to read all source code in a short period of time to get a rough feeling about the software system.</p>\n</li>\n<li>\n<p><a href="#OORP">[OORP]</a>, page 97ff. , "Speculate about Design" suggest to create diagrams based on hypothesis and progressive refinement.</p>\n</li>\n<li>\n<p><a href="#Tornhill-XRay">[Tornhill-XRay]</a> shows many ways of using version control systems to recreate knowledge about software systems.</p>\n</li>\n</ul>\n</div>\n</div>'
}
