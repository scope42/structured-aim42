// This file is generated. Please don't modify it directly.

import { Section } from '../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const howItWorks: Section = {
  type: 'section',
  slug: 'how-it-works',
  id: '_how_it_works',
  sectionType: 'section',
  index: 1,
  title: 'How it works',
  titlePlain: 'How it works',
  numeral: '2',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Look systematically for such issues at various places and with support of various people.</p>\n</div>'
    },
    {
      type: 'admonition',
      content:
        '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\nTo effectively find issues, you need an appropriate amount of <em>understanding</em> of the system under design (<a href="#System">[System]</a>), its technical concepts, code structure, inner workings, major external interfaces and its development process.\n</td>\n</tr>\n</table>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>One serious risk in this phase is a premature restriction to certain artifacts or aspects of the system: If you search with a microscope, you&#8217;re likely to miss several aspects.</p>\n</div>'
    },
    {
      type: 'pass',
      content:
        '<img border=0 src="images/analyze-patterns-overview.png" usemap="#AnalysisOverview" alt="analyze-patterns overview">\n<map name="AnalysisOverview">\n\t<area shape=rect coords="262,281,366,340" href="#Development-Process-Analysis">\n\t<area shape=rect coords="457,118,576,178" href="#Collect-Opportunities-For-Improvement">\n\t<area shape=rect coords="194,401,291,450" href="#Collect-Issues">\n\t<area shape=rect coords="3,301,126,350" href="#Quantitative-Analysis">\n\t<area shape=rect coords="263,141,382,190" href="#Stakeholder-Interview">\n\t<area shape=rect coords="3,164,122,212" href="#Stakeholder-Analysis">\n\t<area shape=rect coords="58,2,151,51" href="#Context-Analysis">\n\t<area shape=rect coords="463,272,576,321" href="#Qualitative-Analysis">\n</map>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Figure: Overview of Most Important Analysis Practices</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Always begin with <a href="#Stakeholder-Analysis">Section 2.3.23, &#8220;<span class="pattern">Stakeholder Analysis</span>&#8221;</a>, then conduct <a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a> with important stakeholders.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Improve your <a href="#Architectural-Understanding">Section 5.5, &#8220;<span class="pattern">Architectural-Understanding</span>&#8221;</a> of the <a href="#System">[System]</a> by</p>\n</div>'
    },
    {
      type: 'ulist',
      content:
        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Context-Analysis">Section 2.3.3, &#8220;<span class="pattern">Context-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Documentation-Analysis">Section 2.3.7, &#8220;<span class="pattern">Documentation-Analysis</span>&#8221;</a>, read especially the architecture documentation, focus on <a href="#View-Based-Understanding">Section 2.3.28, &#8220;<span class="pattern">View Based Understanding</span>&#8221;</a>.</p>\n</li>\n<li>\n<p><a href="#Development-Process-Analysis">Section 2.3.6, &#8220;<span class="pattern">Development-Process-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p>Perform <a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a> to learn about code structure <em>in-the-large</em>. This also helps to identify risky code.</p>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#Capture-Quality-Requirements">Section 2.3.2, &#8220;<span class="pattern">Capture Quality Requirements</span>&#8221;</a> from the <em>authoritative</em> stakeholders of the systems.</p>\n</li>\n<li>\n<p>Conduct a <a href="#Qualitative-Analysis">Section 2.3.14, &#8220;<span class="pattern">Qualitative Analysis</span>&#8221;</a> of the system, its architecture and associated organization,\nbased upon the specific quality requirements</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>Inspect and analyze all involved organizational processes -\n(development, project management, operations, requirements analysis)</p>\n<div class="ulist">\n<ul>\n<li>\n<p>Perform <a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a> or <a href="#Quantitative-Analysis">Section 2.3.15, &#8220;<span class="pattern">Quantitative-Analysis</span>&#8221;</a>, e.g. performance and load monitoring, process and thread analysis</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>Inspect the data created, modified and queried by the system for structure, size, volume or specialities</p>\n</li>\n</ul>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Finally, conduct a <a href="#Root-Cause-Analysis">Section 2.3.20, &#8220;<span class="pattern">Root Cause Analysis</span>&#8221;</a> for the discovered major issues in close collaboration with the appropriate stakeholders.</p>\n</div>'
    },
    {
      type: 'admonition',
      content:
        '<div class="admonitionblock warning">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Warning</div>\n</td>\n<td class="content">\nNever start solving problems until you have a thorough understanding of the current stakeholder requirements. Otherwise you&#8217;ll risk wasting effort in areas which no influential stakeholder cares about.\n</td>\n</tr>\n</table>\n</div>'
    }
  ]
}
