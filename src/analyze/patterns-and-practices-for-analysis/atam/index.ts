// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const atam: Section = {
  type: 'section',
  slug: 'atam',
  id: 'ATAM',
  sectionType: 'section',
  index: 0,
  title: '<span class="pattern">Atam</span>',
  titlePlain: 'Atam',
  numeral: '1',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Architecture Tradeoff Analysis Method. Systematic approach to find architectural\nrisks, tradeoffs and sensitivity points.</p>\n</div>'
    },
    {
      type: 'section',
      slug: 'intent',
      id: '_intent',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Apply the ATAM method to evaluate the software architecture regarding the\ncompliance with quality goals.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description',
      id: '_description',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The ATAM method consists of four phases as shown in diagram "Approach of ATAM".</p>\n</div>'
        },
        {
          type: 'image',
          content:
            '<div id="figure-atam-approach" class="imageblock">\n<div class="content">\n<img src="./images/approach-of-atam.png" alt="Approach of ATAM">\n</div>\n<div class="title">Figure 8. Approach of ATAM</div>\n</div>'
        },
        {
          type: 'paragraph',
          content: '<div class="paragraph">\n<p>The phases are:</p>\n</div>'
        },
        {
          type: 'olist',
          content:
            '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p><strong>Preparation</strong>:</p>\n<div class="olist loweralpha">\n<ol class="loweralpha" type="a">\n<li>\n<p><em>Identify the relevant stakeholders</em>:\nThe specific goals of the relevant stakeholders define the primary\ngoals of the architecture. Who belongs to these <em>relevant</em> stakeholders\nhas to be determined by a <a href="#Stakeholder-Analysis">Section 2.3.23, &#8220;<span class="pattern">Stakeholder Analysis</span>&#8221;</a>.</p>\n</li>\n</ol>\n</div>\n</li>\n<li>\n<p><strong>Kickoff</strong>:</p>\n<div class="olist loweralpha">\n<ol class="loweralpha" type="a">\n<li>\n<p><em>Present the ATAM method</em>:\nConvince the relevant stakeholders of the significance of\ncomprehensible and specific architecture and quality goals.\nATAM helps identify risks, non-risks, tradeoffs and sensitivity points.\nCalculation of quantitative attributes is not subject of this method.</p>\n</li>\n<li>\n<p><em>Present the business objectives and architecture goals</em>:\nPresent the business context to the relevant stakeholders, especially the\n<em>business motivation and reasons</em> for the development of the system.\nClarify specific requirements that the architecture should meet,\nfor instance flexibility, modifiability and performance.</p>\n</li>\n<li>\n<p><em>Present the architecture of the system</em>:\nThe architect presents the <em>architecture</em> of the system. This includes:</p>\n<div class="ulist">\n<ul>\n<li>\n<p>All other systems with interactions to the <a href="#System">[System]</a>,</p>\n</li>\n<li>\n<p>building blocks of the top abstraction level,</p>\n</li>\n<li>\n<p>runtime views of some important use cases,</p>\n</li>\n<li>\n<p>change or modification scenarios.</p>\n</li>\n</ul>\n</div>\n</li>\n</ol>\n</div>\n</li>\n<li>\n<p><strong>Evaluation</strong>:</p>\n<div class="olist loweralpha">\n<ol class="loweralpha" type="a">\n<li>\n<p><em>Explain in detail the architecture approaches</em>:\nThe following questions are answered by the architect or developers:</p>\n<div class="ulist">\n<ul>\n<li>\n<p>How are the relevant quality requirements achieved within the\narchitecture or the implementation?</p>\n</li>\n<li>\n<p>What are the structures and concepts solving the relevant problems or\nchallenges?</p>\n</li>\n<li>\n<p>What are the important design decisions of the architecture?</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p><em>Create a quality tree and scenarios</em>:\nIn the context of a creative brainstorming the stakeholders develop the\nrelevant required quality goals. These are arranged in a quality tree.\nAfterward the quality requirements and architecture goals of the\nsystem are refined by scenarios which are added to the quality tree. The\nfound scenarios are prioritized regarding to their business value.</p>\n</li>\n<li>\n<p><em>Analyze the architecture approaches with respect to the scenarios</em>:\nBased on the priorities of the scenarios the evaluation team examines\ntogether with the architect or developers how the architecture approaches\nsupport the considered scenario. The findings of the analysis are:</p>\n<div class="ulist">\n<ul>\n<li>\n<p>Existing risks concerning the attainment of the architecture goals.</p>\n</li>\n<li>\n<p>Non-risks which means that the quality requirements are achieved.</p>\n</li>\n<li>\n<p>Tradeoff points which are decisions that affect the quality attributes\npositive and other negative.</p>\n</li>\n<li>\n<p>Sensitivity points which are elements of the architecture that have\nformative influence to the quality attributes.</p>\n</li>\n</ul>\n</div>\n</li>\n</ol>\n</div>\n</li>\n<li>\n<p><strong>Follow-up</strong>:</p>\n<div class="olist loweralpha">\n<ol class="loweralpha" type="a">\n<li>\n<p><em>Present the results</em>:\nCreation of a report with:</p>\n<div class="ulist">\n<ul>\n<li>\n<p>Architectural approaches</p>\n</li>\n<li>\n<p>Quality tree with prioritized scenarios</p>\n</li>\n<li>\n<p>Risks</p>\n</li>\n<li>\n<p>Non-risks</p>\n</li>\n<li>\n<p>Tradeoffs</p>\n</li>\n<li>\n<p>Sensitivity points</p>\n</li>\n</ul>\n</div>\n</li>\n</ol>\n</div>\n</li>\n</ol>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'experiences',
      id: '_experiences',
      sectionType: 'section',
      index: 2,
      title: 'Experiences',
      titlePlain: 'Experiences',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content: '<div class="paragraph">\n<p>The ATAM method:</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>provides operational, specific quality requirements,</p>\n</li>\n<li>\n<p>discloses important architectural decisions of the <a href="#System">[System]</a>,</p>\n</li>\n<li>\n<p>promotes the communication between relevant stakeholders.</p>\n</li>\n</ul>\n</div>'
        },
        {
          type: 'admonition',
          content:
            '<div class="admonitionblock important">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Important</div>\n</td>\n<td class="content">\nThe ATAM method does not develop concrete measures, strategies or\ntactics against the found risks.\n</td>\n</tr>\n</table>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>ATAM has been successfully applied by many organizations to a variety of systems. It is widely regarded as the most important systematic approach to qualitative system/architecture analysis <sup class="footnote">[<a id="_footnoteref_9" class="footnote" href="#_footnotedef_9" title="View footnote.">9</a>]</sup>.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability',
      id: '_applicability',
      sectionType: 'section',
      index: 3,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Evaluate an architecture:</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>as soon as possible,</p>\n</li>\n<li>\n<p>already in the construction phase,</p>\n</li>\n<li>\n<p>better not after the completion of the system.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'related-patterns',
      id: '_related_patterns',
      sectionType: 'section',
      index: 4,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '5',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Qualitative-Analysis">Section 2.3.14, &#8220;<span class="pattern">Qualitative Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Capture-Quality-Requirements">Section 2.3.2, &#8220;<span class="pattern">Capture Quality Requirements</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
