// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const runtimeAnalysis: Section = {
  type: 'section',
  slug: 'runtime-analysis',
  id: 'Runtime-Analysis',
  sectionType: 'section',
  index: 20,
  title: '<span class="pattern">Runtime-Analysis</span>',
  titlePlain: 'Runtime-Analysis',
  numeral: '21',
  children: [
    {
      type: 'section',
      slug: 'intent-21',
      id: '_intent_21',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Analyze the runtime behavior of the <a href="#System">[System]</a>, e.g. with respect to time and resource consumption or creation.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-20',
      id: '_description_20',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Ask stakeholders about <em>perceived</em> runtime behavior - double check by measuring.</p>\n</li>\n<li>\n<p>Measure runtime behavior, e.g. with profilers, logs or traces.</p>\n</li>\n<li>\n<p>Inspect <em>artifacts</em> created at runtime (e.g. logfiles, protocolls, system-traces) for information about problems, root-causes or system behavior.</p>\n</li>\n<li>\n<p>Perform <a href="#Infrastructure-Analysis">Section 2.3.8, &#8220;<span class="pattern">Infrastructure-Analysis</span>&#8221;</a> to learn about the technical infrastructure.</p>\n</li>\n</ul>\n</div>'
        },
        {
          type: 'dlist',
          content:
            '<div class="dlist">\n<dl>\n<dt class="hdlist1">WARNING</dt>\n<dd>\n<p>Measuring might influence behavior. That can be especially disturbing in multi-threaded, multi-user or multi-core applications.</p>\n</dd>\n</dl>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'related-practices-3',
      id: '_related_practices_3',
      sectionType: 'section',
      index: 2,
      title: 'Related Practices',
      titlePlain: 'Related Practices',
      numeral: '3',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Infrastructure-Analysis">Section 2.3.8, &#8220;<span class="pattern">Infrastructure-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Instrument-System">Section 2.3.10, &#8220;<span class="pattern">Instrument System</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Quantitative-Analysis">Section 2.3.15, &#8220;<span class="pattern">Quantitative-Analysis</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
