// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const measureAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'measure',
  id: 'Measure',
  sectionType: 'section',
  index: 7,
  title: '<span class="pattern">Measure</span>',
  titlePlain: 'Measure',
  numeral: '8',
  content:
    '<div class="sect4">\n<h5 id="_intent_47">Intent</h5>\n<div class="paragraph">\n<p>If you don’t measure it, you can’t optimize it.&#8201;&#8212;&#8201;Coda Hale</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_description_46">Description</h5>\n<div class="paragraph">\n<p>TODO: explain different kind of metrics (static-code, runtime, organisational&#8230;&#8203;)</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_experiences_21">Experiences</h5>\n\n</div>\n<div class="sect4">\n<h5 id="_risks_9">Risks</h5>\n<div class="paragraph">\n<p>If you measure too many different parameters or attributes, you might get drown in numbers.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_applicability_27">Applicability</h5>\n<div class="paragraph">\n<p>This pattern should always be considered.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_consequences_18">Consequences</h5>\n\n</div>\n<div class="sect4">\n<h5 id="_also_known_as_17">Also Known As</h5>\n<div class="ulist">\n<ul>\n<li>\n<p>quantitative analysis</p>\n</li>\n<li>\n<p>quantitative runtime analysis</p>\n</li>\n<li>\n<p>profiling</p>\n</li>\n<li>\n<p>organisational metrics</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_related_patterns_29">Related Patterns</h5>\n<div class="ulist">\n<ul>\n<li>\n<p>This pattern is an important enabler for a successful <a href="#Runtime-Artifact-Analysis">[Runtime-Artifact-Analysis]</a> or performance analysis.</p>\n</li>\n<li>\n<p><a href="#Instrument-System">Section 2.3.10, &#8220;<span class="pattern">Instrument System</span>&#8221;</a> and <a href="https://en.wikipedia.org/wiki/Profiling_(computer_programming)">profiling</a> are very similar to this pattern, however they are limited to a temporary instrumentation that is needed during the Analysis phase to identify or scope a certain problem that cannot be isolated without modifying the code.</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_references_25">References</h5>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="https://www.youtube.com/watch?v=czes-oa0yik">Coda Hale Talk on "Metrics-Everywhere"</a></p>\n</li>\n</ul>\n</div>\n</div>'
}
