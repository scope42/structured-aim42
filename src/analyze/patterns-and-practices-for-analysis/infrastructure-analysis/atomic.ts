// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const infrastructureAnalysisAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'infrastructure-analysis',
  id: 'Infrastructure-Analysis',
  sectionType: 'section',
  index: 7,
  title: '<span class="pattern">Infrastructure-Analysis</span>',
  titlePlain: 'Infrastructure-Analysis',
  numeral: '8',
  content:
    '<div class="sect4">\n<h5 id="_intent_8">Intent</h5>\n<div class="paragraph">\n<p>Analyze the technical infrastructure of the <a href="#System">[System]</a>, e.g. with respect to time and resource consumption or creation. Part of <a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a>.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_description_8">Description</h5>\n<div class="paragraph">\n<p>Infrastructure analysis is associated to the more general <a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a>, with focus on\ntechnical infrastructure for operation, test and development of the <a href="#System">[System]</a>.</p>\n</div>\n<div class="paragraph">\n<p>Inspect and analyse the technical infrastructure, for example the following aspects:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>production hardware: does characteristics, type and size of the hardware suit the system\nand the business problem? Hardware might consist of several subsystems, like processing, various levels of storage (processor cache, RAM, flash, disk, tape or others), graphical and network interfaces and arbitrary specialized hardware</p>\n</li>\n<li>\n<p>development and test hardware</p>\n</li>\n<li>\n<p>software infrastructure, like operating system, required database, middleware, frameworks and libraries</p>\n</li>\n</ul>\n</div>\n<div class="paragraph">\n<p>It helps to measure runtime behavior agains expected or required values, for example processing time and memory consumption. <a href="#Instrument-System">Section 2.3.10, &#8220;<span class="pattern">Instrument System</span>&#8221;</a> can support this type of analysis.</p>\n</div>\n<div class="paragraph">\n<p>Specialized stakeholders (like datacenter administrators, operating-system or database experts, hardware designers) can often pinpoint critical aspects of existing infrastructures from their experience.</p>\n</div>\n<div class="paragraph">\n<p>Apply <a href="#View-Based-Understanding">Section 2.3.28, &#8220;<span class="pattern">View Based Understanding</span>&#8221;</a>, especially an infrastructure overview (e.g. deployment diagram) to get an overview of existing hardware plus the associated software. Start with an hardware context and refine. Ensure you have at least all hardware-types (node-types) plus their relations (networks, buses) visible. Double-check this overview with the appropriate stakeholders.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_experience">Experience</h5>\n<div class="paragraph">\n<p>The combination of hardware and software can be arbitrary complex. Even small configuration\nsettings of operating systems (like block or packet sizes) can conflict with hardware capabilities, effectively ruining overall system performance.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_related_practices">Related Practices</h5>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#Improve-Logging">Section 4.10.4, &#8220;<span class="pattern">Improve Logging</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Infrastructure-Analysis">Section 2.3.8, &#8220;<span class="pattern">Infrastructure-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Instrument-System">Section 2.3.10, &#8220;<span class="pattern">Instrument System</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Quantitative-Analysis">Section 2.3.15, &#8220;<span class="pattern">Quantitative-Analysis</span>&#8221;</a></p>\n</li>\n</ul>\n</div>\n</div>'
}
