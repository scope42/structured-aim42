// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const whyDoesSoftwareNeedImprovementAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'why-does-software-need-improvement',
  id: '_why_does_software_need_improvement',
  sectionType: 'section',
  index: 2,
  title: 'Why does software need improvement?',
  titlePlain: 'Why does software need improvement?',
  numeral: '3',
  content:
    '<div class="paragraph">\n<p>The most important reason is depicted in the following diagram: The cost-of-change\nof most software increases heavily over time&#8230;&#8203; making those people really unhappy that\nhave to pay for these changes (called maintenance, evolution, new-features or else).</p>\n</div>\n<div class="paragraph">\n<p>An additional effect of long-term maintenance of software is the strong\n<em>decrease in understandability</em>: When a system matures it becomes more and more difficult to understand its inner workings, changes become increasingly risky and consequences of changes become difficult to foresee which can lead to quite blurry effort estimations.</p>\n</div>\n<div id="figure-real-situation" class="imageblock">\n<div class="content">\n<img src="./images/cost-of-change.jpg" alt="target situation" width="50%">\n</div>\n<div class="title">Figure 2. Reality: Maintaining software is too expensive</div>\n</div>\n<div class="paragraph">\n<p>These negative effects share a few common root causes:</p>\n</div>\n<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>lack of <em>conceptual integrity</em></p>\n</li>\n<li>\n<p><em>internal disorder</em></p>\n</li>\n<li>\n<p>overly <em>complex internal structure</em>, either of source code or data</p>\n</li>\n<li>\n<p>overly <em>complex concepts</em> (cross-cutting solutions for fine-grained problems)</p>\n</li>\n<li>\n<p>overly complex or inappropriate internal processes</p>\n</li>\n<li>\n<p>inappropriate selection of <em>technology</em> (<em>frameworks, libraries or languages</em>)</p>\n</li>\n<li>\n<p>(you surely can find a few more&#8230;&#8203;)</p>\n</li>\n</ol>\n</div>\n<div class="sect3">\n<h4 id="_long_term_goal">1.3.1. Long-term Goal</h4>\n<div class="paragraph">\n<p>In the beginning, though, everything was fine: nice coupling and cohesion, appropriate technologies, well written code, understandable structures and concepts (see figure <a href="#figure-target-situation">Figure 3, &#8220;Goal: Maintainable Software&#8221;</a>)</p>\n</div>\n<div class="paragraph">\n<p>But as more and more changes, modifications, tweaks and supposed <em>optimizations</em> were performed under growing time and budget pressure, things got nasty. The maintainers piled up so called <em>technical debt</em> (we software folks call it quick-hacks, quick-and-dirty-fixes, detours or abbreviations). We&#8217;re quite sure you know what we&#8217;re talking about - we experienced it over and over again, it seems to be the normal situation, not the (bad) exception.</p>\n</div>\n<div class="paragraph">\n<p>Investment in methodical and systematic software architecture improvement will have the following effect.</p>\n</div>\n<div id="figure-target-situation" class="imageblock">\n<div class="content">\n<img src="./images/target-situation.jpg" alt="target situation" width="50%">\n</div>\n<div class="title">Figure 3. Goal: Maintainable Software</div>\n</div>\n</div>'
}
