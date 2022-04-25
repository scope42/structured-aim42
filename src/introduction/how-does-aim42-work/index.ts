// This file is generated. Please don't modify it directly.

import { Section } from '../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const howDoesAim42Work: Section = {
  type: 'section',
  slug: 'how-does-aim42-work',
  id: '_how_does_aim42_work',
  sectionType: 'section',
  index: 3,
  title: 'How does aim42 work?',
  titlePlain: 'How does aim42 work?',
  numeral: '4',
  children: [
    {
      type: 'section',
      slug: 'three-simple-phases',
      id: '_three_simple_phases',
      sectionType: 'section',
      index: 0,
      title: 'Three Simple Phases',
      titlePlain: 'Three Simple Phases',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>aim42 works in a phased iterative manner:</p>\n</div>'
        },
        {
          type: 'image',
          content:
            '<div id="figure-aim-phases" class="imageblock">\n<div class="content">\n<img src="./images/aim42-phases.png" alt="aim42 phases">\n</div>\n<div class="title">Figure 4. Three Phases of aim42</div>\n</div>'
        },
        {
          type: 'olist',
          content:
            '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p><a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a>: collect <em>issues</em>: problems, risks, deficiencies and technical debt within your system and your development process. Focus on problems in this phase, not on potential solution approaches. In addition, develop (and document) an understanding of internal structures, concepts and architectural approaches.</p>\n</li>\n<li>\n<p><a href="#Evaluate">Section 3, &#8220;Evaluate&#8221;</a>: determine the "value" of issues and their solutions (<em>improvements</em>)</p>\n</li>\n<li>\n<p><a href="#Improve">Section 4, &#8220;Improve&#8221;</a>: systematically improve code and structures, reduce technical debt, remove waste and optimize.</p>\n</li>\n</ol>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>These three phases are performed iteratively - as explained <a href="#Iterative-Approach">below</a>.\nSeveral <a href="#Crosscutting">cross-cutting practices and patterns</a> should be applied in all phases, for example documenting results, <a href="#Collect-Opportunities-For-Improvement">Section 5.6, &#8220;<span class="pattern">Collect Opportunities for Improvement</span>&#8221;</a>\nor long- and short-term planning activities.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'common-terminology',
      id: '_common_terminology',
      sectionType: 'section',
      index: 1,
      title: 'Common Terminology',
      titlePlain: 'Common Terminology',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>aim42 relies on a common terminology, a small set of fundamental concepts.</p>\n</div>'
        },
        {
          type: 'image',
          content:
            '<div id="figure-fundamental-concepts" class="imageblock">\n<div class="content">\n<img src="./images/aim42-concept-map.png" alt="aim42 concept map">\n</div>\n<div class="title">Figure 5. aim42 domain terminology</div>\n</div>'
        },
        {
          type: 'table',
          content:
            '<table class="tableblock frame-all grid-all" style="width: 80%;">\n<colgroup>\n<col style="width: 33.3333%;">\n<col style="width: 66.6667%;">\n</colgroup>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Issue</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Any problem, error, fault, risk, suboptimal situation or their causes within the\n<a href="#System">[System]</a> or processes related to it (e.g. management, operational, development, administrative or organizational activities).</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Cause</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Fundamental reason for one or several issues.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Improvement</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Solution, remedy or cure for one or several issues.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Cost (of issue)</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The cost (in any unit appropriate for business, e.g. money, effort or such) of the issue, related to a frequency or period of time. For example – cost of every occurrence of the issue or recurring cost per week.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Cost (of improvement)</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The cost (in monetary units) of the improvement, remedy, tactic or strategy.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><strong>Risk</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>Potential</em> problem. Improvements can change associated risks for the better or the worse, even create new risks.</p></td>\n</tr>\n</tbody>\n</table>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p><span class="small">See also the more detailed <a href="#Domain-Model">Appendix A, <em>Domain Model</em></a> (not required for the casual reader)</span></p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'iterative-approach',
      id: 'Iterative-Approach',
      sectionType: 'section',
      index: 2,
      title: 'Iterative Approach',
      titlePlain: 'Iterative Approach',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>In compliance with modern agile development methodologies, aim42 fundamentally depends on iteration and feedback between the phases.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Within each phase, you collect both issues and opportunities for improvement, as depicted in the illustration below:</p>\n</div>'
        },
        {
          type: 'image',
          content:
            '<div id="figure-iterate-and-collect" class="imageblock">\n<div class="content">\n<img src="./images/collect-issues-improvements.png" alt="collect issues improvements">\n</div>\n<div class="title">Figure 6. Iterate and Collect</div>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Issues and improvements need to be</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>related to each other: No idea of improvement without an existing issue - as we do not want to optimize "because we can".</p>\n</li>\n<li>\n<p>evaluated in some business-compatible unit (e. g. Euro, $) as described above. See <a href="#Evaluate">Section 3, &#8220;Evaluate&#8221;</a>.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
