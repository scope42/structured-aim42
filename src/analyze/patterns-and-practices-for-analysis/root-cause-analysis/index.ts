// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const rootCauseAnalysis: Section = {
  type: 'section',
  slug: 'root-cause-analysis',
  id: 'Root-Cause-Analysis',
  sectionType: 'section',
  index: 19,
  title: '<span class="pattern">Root Cause Analysis</span>',
  titlePlain: 'Root Cause Analysis',
  numeral: '20',
  children: [
    {
      type: 'quote',
      content:
        '<div class="quoteblock">\n<blockquote>\nTo find mistakes is not enough. It is necessary to find the cause behind the mistake\nand build a system that minimizes future mistakes.\n</blockquote>\n<div class="attribution">\n&#8212; W. Edwards Deming\n</div>\n</div>'
    },
    {
      type: 'section',
      slug: 'intent-20',
      id: '_intent_20',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Explicitly differentiate between symptom and cause:</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Identify root causes of symptoms, problems or issues</p>\n</li>\n<li>\n<p>Trace a problem to its origins</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-19',
      id: '_description_19',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Some people fight problems, not their real cause: When faced with a problem our brains tend to start immediately to search for proper solutions for exactly this problem. For instance, if our application regularly crashes with Out-Of-Memory-Errors it might be a reflex to increase the memory settings. Instead we should ask if this is really the problem or only a symptom of the real problem, e.g. a programming failure in memory releasing. With an iterative process of asking "Why?" the causal chain must be traced down to the root cause.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'experiences-9',
      id: '_experiences_9',
      sectionType: 'section',
      index: 2,
      title: 'Experiences',
      titlePlain: 'Experiences',
      numeral: '3',
      children: [
        {
          type: 'admonition',
          content:
            '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="paragraph">\n<p>Users of a system complained about <em>low performance</em>.</p>\n</div>\n<div class="paragraph">\n<p>Developers started tuning the database,\ntweaking the application server, optimizing inner loops and so on (you pretty well know what I mean).</p>\n</div>\n<div class="paragraph">\n<p>That did not solve the issue.</p>\n</div>\n<div class="paragraph">\n<p>After applying <a href="#Take-What-They-Mean">Section 2.3.26, &#8220;<span class="pattern">Take What They Mean, Not What They Say</span>&#8221;</a> we found out that users complained about low performance in data entry,\nas they had to switch back-and-forth between different regions on their input-screens.</p>\n</div>\n<div class="paragraph">\n<p>The actual <em>cause</em> of their complaint was the improper field order in their input forms. After adapting this\norder by simply dragging fields/labels around the screen, users were perfectly happy with the systems.</p>\n</div>\n</td>\n</tr>\n</table>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-9',
      id: '_applicability_9',
      sectionType: 'section',
      index: 3,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>This pattern should always be considered when faced with a problem.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'consequences-4',
      id: '_consequences_4',
      sectionType: 'section',
      index: 4,
      title: 'Consequences',
      titlePlain: 'Consequences',
      numeral: '5',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>You can eliminate the cause.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'also-known-as-6',
      id: '_also_known_as_6',
      sectionType: 'section',
      index: 5,
      title: 'Also Known As',
      titlePlain: 'Also Known As',
      numeral: '6',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Inspect-Cause</p>\n</li>\n<li>\n<p><a href="#Separate-Cause-From-Effect">Section 5.18, &#8220;<span class="pattern">Separate-Cause-From-Effect</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'related-patterns-10',
      id: '_related_patterns_10',
      sectionType: 'section',
      index: 6,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '7',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Take-What-They-Mean">Section 2.3.26, &#8220;<span class="pattern">Take What They Mean, Not What They Say</span>&#8221;</a>, maybe what they told you was not the real problem.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references-5',
      id: '_references_5',
      sectionType: 'section',
      index: 7,
      title: 'References',
      titlePlain: 'References',
      numeral: '8',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="http://en.wikipedia.org/wiki/Root_cause_analysis" class="bare">http://en.wikipedia.org/wiki/Root_cause_analysis</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
