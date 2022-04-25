// This file is generated. Please don't modify it directly.

import { Section } from '../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const analyze: Section = {
  type: 'section',
  slug: 'analyze',
  id: 'Analyze',
  sectionType: 'section',
  index: 2,
  title: 'Analyze',
  titlePlain: 'Analyze',
  numeral: '2',
  children: [
    {
      type: 'image',
      content:
        '<div class="imageblock">\n<div class="content">\n<img src="./images/01-intro-and-overview/analyze-phase.png" alt="analyze-phase">\n</div>\n<div class="title">Figure 7. Analyze-Phase</div>\n</div>'
    },
    {
      type: 'section',
      slug: 'goals',
      id: '_goals',
      sectionType: 'section',
      index: 0,
      title: 'Goals',
      titlePlain: 'Goals',
      numeral: '1',
      children: [
        {
          type: 'olist',
          content:
            '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Obtain overview of intent, purpose and quality requirements of the system (<a href="#System">[System]</a>).</p>\n</li>\n<li>\n<p>Develop and document an understanding of internal structures, concepts and architectural approaches.</p>\n</li>\n<li>\n<p>Find all problems, issues, symptoms, risks or technical debt within the system (<a href="#System">[System]</a>), its operation, maintenance or otherwise related processes.</p>\n</li>\n<li>\n<p>Understand root causes of the problems found, potential interdependencies between issues.</p>\n</li>\n</ol>\n</div>'
        }
      ]
    },
    {
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
    },
    {
      type: 'section',
      slug: 'patterns-and-practices-for-analysis',
      id: '_patterns_and_practices_for_analysis',
      sectionType: 'section',
      index: 2,
      title: 'Patterns and Practices for Analysis',
      titlePlain: 'Patterns and Practices for Analysis',
      numeral: '3',
      children: [
        {
          type: 'pass',
          content:
            '<img border=0 src="images/analyze-patterns-complete.png" usemap="#AnalysisPatterns" alt="Analyze Patterns">\n<map name="AnalysisPatterns">\n\t<area shape=rect coords="358,4,440,52" href="#User-Analysis">\n\t<area shape=rect coords="93,690,175,729" href="#Instrument-System">\n\t<area shape=rect coords="196,590,299,629" href="#Infrastructure-Analysis">\n\t<area shape=rect coords="294,319,398,379" href="#Development-Process-Analysis">\n\t<area shape=rect coords="610,97,729,156" href="#Collect-Opportunities-For-Improvement">\n\t<area shape=rect coords="305,508,402,557" href="#Collect-Issues">\n\t<area shape=rect coords="28,803,125,852" href="#Static-Code-Analysis">\n\t<area shape=rect coords="358,690,449,739" href="#Software-Archeology">\n\t<area shape=rect coords="511,25,615,64" href="#Questionnaire">\n\t<area shape=rect coords="15,294,150,343" href="#Quantitative-Analysis">\n\t<area shape=rect coords="649,332,756,381" href="#Requirements-Analysis">\n\t<area shape=rect coords="330,141,449,190" href="#Stakeholder-Interview">\n\t<area shape=rect coords="40,167,159,215" href="#Stakeholder-Analysis">\n\t<area shape=rect coords="66,494,150,539" href="#Runtime-Analysis">\n\t<area shape=rect coords="543,253,664,301" href="#Documentation-Analysis">\n\t<area shape=rect coords="152,423,218,462" href="#Data-Analysis">\n\t<area shape=rect coords="455,562,567,611" href="#Issue-Tracker-Analysis">\n\t<area shape=rect coords="124,2,218,51" href="#Context-Analysis">\n\t<area shape=rect coords="654,526,729,565" href="#ATAM">\n\t<area shape=rect coords="484,386,597,435" href="#Qualitative-Analysis">\n</map>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Figure: Detailed overview of Analysis Practices and Patterns</p>\n</div>'
        },
        {
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
                  content:
                    '<div class="paragraph">\n<p>The phases are:</p>\n</div>'
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
                  content:
                    '<div class="paragraph">\n<p>The ATAM method:</p>\n</div>'
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
                    '<div class="paragraph">\n<p>ATAM has been successfully applied by many organizations to a variety of systems. It is widely regarded as the most important systematic approach to qualitative system/architecture analysis <sup class="footnote">[<a id="_footnoteref_5" class="footnote" href="#_footnotedef_5" title="View footnote.">5</a>]</sup>.</p>\n</div>'
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
        },
        {
          type: 'section',
          slug: 'capture-quality-requirements',
          id: 'Capture-Quality-Requirements',
          sectionType: 'section',
          index: 1,
          title: '<span class="pattern">Capture Quality Requirements</span>',
          titlePlain: 'Capture Quality Requirements',
          numeral: '2',
          children: [
            {
              type: 'section',
              slug: 'intent-2',
              id: '_intent_2',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Make the specific quality requirements of a system explicit.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-2',
              id: '_description_2',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Invite authoritative stakeholders to a joint workshop (e.g. half- or full-day).\nLet them write <em>quality scenarios</em> to describe their specific quality requirements for the system. Moderate this workshop.</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Use <em>scenarios</em> to formulate specific quality requirements.</p>\n</li>\n<li>\n<p>Order those scenarios within a mostly hierarchical quality tree, similar to <a href="#ISO-9126">[ISO-9126]</a>.</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'section',
                  slug: 'scenario-based-quality-description',
                  id: '_scenario_based_quality_description',
                  sectionType: 'section',
                  index: 0,
                  title: 'Scenario-based Quality Description',
                  titlePlain: 'Scenario-based Quality Description',
                  numeral: '1',
                  children: [
                    {
                      type: 'dlist',
                      content:
                        '<div class="dlist">\n<dl>\n<dt class="hdlist1">Scenario</dt>\n<dd>\n<p>describes the reaction of a system to a certain event (or type of event).</p>\n</dd>\n</dl>\n</div>'
                    },
                    {
                      type: 'image',
                      content:
                        '<div id="quality-scenario-diagram" class="imageblock">\n<div class="content">\n<img src="./images/quality-scenario.png" alt="quality scenario">\n</div>\n<div class="title">Figure 9. Structure of Quality Scenarios</div>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Although this definition is concise, it needs some explanation to become understandable. See figure <a href="#quality-scenario-diagram">Figure 9, &#8220;Structure of Quality Scenarios&#8221;</a>:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>An <em>event</em> can be</p>\n<div class="ulist">\n<ul>\n<li>\n<p>a user clicking a button</p>\n</li>\n<li>\n<p>an administrator starting or stopping the system</p>\n</li>\n<li>\n<p>a hacker trying to get unauthorized access.</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>An <em>event</em> can also be</p>\n<div class="ulist">\n<ul>\n<li>\n<p>a manager needing another feature</p>\n</li>\n<li>\n<p>another manager wanting to reduce operation costs</p>\n</li>\n<li>\n<p>some government agency requiring financial data to be tamper-proof</p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>'
                    },
                    {
                      type: 'example',
                      content:
                        '<div class="exampleblock">\n<div class="title">Example 1. Example scenario "Mandatory changes to Business Processes"*</div>\n<div class="content">\n<table class="tableblock frame-all grid-all fit-content">\n<colgroup>\n<col>\n<col>\n</colgroup>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Context</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The individual processing step AB within use case XY is declared invalid by the regulatory authority and removed from the system. The data processed by the system is not affected.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Business Goal(s)</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The needed changes to the use case XY can be carried out at low cost and without negative effects.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Trigger</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The legislator, represented by the regulatory authority, prohibits the use of the AB processing step.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Reaction</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">A developer or architect removes the AB processing step in the system (by deleting the corresponding calls or reconfiguring the process flows).</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Target value</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The change requires a maximum of 24 hours with a maximum of 48 person-hours of effort. After this time, the system is fully working again.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Constraints</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">This change has no effect on the existing data of the users/customers in the system regarding the XY application case. An (automatic) migration of some data is permitted, but must not exceed the 24-hour limit.</p></td>\n</tr>\n</tbody>\n</table>\n</div>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Such a scenario makes it clear to everyone that not only business functionality is needed to achieve the project&#8217;s goals.\nIt makes technical requirements (in the example above: modifiability) visible to non-technical stakeholders by providing traceability from the business goal to the technical details.</p>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-2',
              id: '_experiences_2',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><strong>Needs moderation</strong>: Brainstorming quality requirements usually works well in moderated workshops. If given (even trivial) examples, every stakeholder will most likely write down several scenarios. We often received 80-120 different scenarios in one-day workshops.</p>\n</li>\n<li>\n<p><strong>Uncovers problems and risks</strong>: Scenarios collected within brainstorming sessions often contain <em>hidden</em> problem descriptions, risks or problems with the current systems.</p>\n</li>\n<li>\n<p><strong>Covers organization and process</strong>: Scenarios sometimes cover process or organizational aspects (like release cycles should be faster than they are now). Move those to your <a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a>.</p>\n</li>\n<li>\n<p><strong>Improves human communication</strong>: Different stakeholders often start communicating about the system or their requirements during such workshops. This kind of interaction <em>should</em> have happened long before&#8230;&#8203;</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-2',
              id: '_applicability_2',
              sectionType: 'section',
              index: 3,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '4',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Use this practice when (authoritative) stakeholders are available for discussion or a workshop.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>If you have well-documented, specific and current (!) quality requirements available, you might consider skipping this practice for now (although we&#8217;re quite sure it&#8217;s a good opportunity to learn a lot about the system, its stakeholders, their requirements and opinions).</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'consequences',
              id: '_consequences',
              sectionType: 'section',
              index: 4,
              title: 'Consequences',
              titlePlain: 'Consequences',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>The required constraints (aka quality attributes) of a system are made explicit.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'also-known-as',
              id: '_also_known_as',
              sectionType: 'section',
              index: 5,
              title: 'Also Known As',
              titlePlain: 'Also Known As',
              numeral: '6',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Non-functional requirements (although this term is misleading, as <em>functional</em> requirements strongly influence the <em>quality</em> of any system!)</p>\n</li>\n<li>\n<p>Documentation of quality requirements.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-2',
              id: '_related_patterns_2',
              sectionType: 'section',
              index: 6,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '7',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#ATAM">Section 2.3.1, &#8220;<span class="pattern">Atam</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Qualitative-Analysis">Section 2.3.14, &#8220;<span class="pattern">Qualitative Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Requirements-Analysis">Section 2.3.19, &#8220;<span class="pattern">Requirements-Analysis</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'references',
              id: '_references',
              sectionType: 'section',
              index: 7,
              title: 'References',
              titlePlain: 'References',
              numeral: '8',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>The workshop-based collection of quality requirements has been described by\n<a href="#Clements-ATAM">[Clements-ATAM]</a>.</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Real-world examples of software quality requirements (currently available only in German): <a href="https://github.com/arc42/quality-requirements" class="bare">https://github.com/arc42/quality-requirements</a></p>\n</li>\n<li>\n<p><a href="#Clements-ATAM">[Clements-ATAM]</a> contains a brief description of scenario-based quality description and details on how to set up such workshops.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'context-analysis',
          id: 'Context-Analysis',
          sectionType: 'section',
          index: 2,
          title: '<span class="pattern">Context-Analysis</span>',
          titlePlain: 'Context-Analysis',
          numeral: '3',
          children: [
            {
              type: 'section',
              slug: 'intent-3',
              id: '_intent_3',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Analyse external interfaces for risk, technology, business value and other factors.</p>\n</li>\n<li>\n<p>Use the context to gain <em>overview</em> of the System within its business or\ntechnical environment.</p>\n</li>\n<li>\n<p>Identify risks or problems in the immediate vicinity of the System.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'terminology',
              id: '_terminology',
              sectionType: 'section',
              index: 1,
              title: 'Terminology',
              titlePlain: 'Terminology',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>We distinguish the following terms in context analysis:</p>\n</div>'
                },
                {
                  type: 'dlist',
                  content:
                    '<div class="dlist">\n<dl>\n<dt class="hdlist1">Business Context</dt>\n<dd>\n<p>Adjacent organizations, applications, users or interfaces either requiring or providing services or data from or to the System. The business context can be used to describe the overall business process(es) the System is involved in.</p>\n</dd>\n<dt class="hdlist1">Technical Context</dt>\n<dd>\n<p>Adjacent hardware or technical infrastructure, either required by the System or providing data or events to it. When the System can be used or operated in different hardware infrastructures, there might exist several different technical contexts.</p>\n</dd>\n</dl>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-3',
              id: '_description_3',
              sectionType: 'section',
              index: 2,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Context analysis shall help identify issues associated with <em>external interfaces</em>, e.g. interfaces that:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>influence critical quality requirements of the system (e.g. reliability, security, throughput, runtime performance, operation cost)</p>\n</li>\n<li>\n<p>are overly complex</p>\n</li>\n<li>\n<p>are brittle or fragile</p>\n</li>\n<li>\n<p>are implemented with unsuitable technology</p>\n</li>\n<li>\n<p>are underdocumented or poorly understood</p>\n</li>\n<li>\n<p>transport critical data (important, sensitive, insecure)</p>\n</li>\n<li>\n<p>transport especially huge amounts of data</p>\n</li>\n<li>\n<p>have high operational effort</p>\n</li>\n<li>\n<p>have high usage cost (e.g. cost-per-request or similar)</p>\n</li>\n<li>\n<p>have high cost-of-change or high maintenance costs</p>\n</li>\n<li>\n<p>are difficult or impossible to modify/enhance/change</p>\n</li>\n<li>\n<p>suffer from operational failures or production issues</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Note that <em>user</em> interfaces often belong to the context, especially with\nrespect to the kind of data or events exchanged with users or user groups. Due to the\nimportance of this topic, aim42 devotes an <a href="#User-Analysis">own section</a> to it.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'example',
              id: '_example',
              sectionType: 'section',
              index: 3,
              title: 'Example',
              titlePlain: 'Example',
              numeral: '4',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In the context diagram example of fig. <a href="#context-view-example">Figure 10, &#8220;Example of Context View&#8221;</a> you see some user roles and some external systems. The context diagram is accompanied by a tabular description of the elements and/or relationships.\n<span class="small">Example taken from the <a href="https://github.com/aim42/htmlSanityCheck">HtmlSanityCheck (HtmlSC)</a> open source project.</span></p>\n</div>'
                },
                {
                  type: 'image',
                  content:
                    '<div id="context-view-example" class="imageblock">\n<div class="content">\n<img src="./images/context-view-example.png" alt="Example of Context View">\n</div>\n<div class="title">Figure 10. Example of Context View</div>\n</div>'
                },
                {
                  type: 'table',
                  content:
                    '<table class="tableblock frame-all grid-all stretch">\n<caption class="title">Table 1. Business Context</caption>\n<colgroup>\n<col style="width: 20%;">\n<col style="width: 80%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top">Neighbor</th>\n<th class="tableblock halign-left valign-top">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">user</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">documents software with toolchain that generates HTML. Wants to ensure that\nlinks within this HTML are valid.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">build system</p></td>\n<td class="tableblock halign-left valign-top"></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">local HTML files</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">HtmlSC reads and parses local HTML files and\nperforms sanity checks within those.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">local image files</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">HtmlSC checks if linked images exist as (local) files.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">external web resources</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">HtmlSC can be configured to optionally check for the existence\nof external web resources. Due to the nature of web systems, this check might need a significant\namount of time and might yield invalid results due to network and latency issues.</p></td>\n</tr>\n</tbody>\n</table>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In this example, the complete check has to be completed within 5 seconds (a quality requirement). As access to external websites or resources might be hindered by network latency or even failures, the external interface\nresponsible for this requirement will likely contain risks.</p>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'data-analysis',
          id: 'Data-Analysis',
          sectionType: 'section',
          index: 3,
          title: '<span class="pattern">Data-Analysis</span>',
          titlePlain: 'Data-Analysis',
          numeral: '4',
          children: [
            {
              type: 'section',
              slug: 'intent-4',
              id: '_intent_4',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Analyze and inspect the data created and manipulated by the system for its content, structure, quantity and size.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-4',
              id: '_description_4',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In data analysis you could examine the following topics:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#_analyze_data_structures">Data Structure</a></p>\n</li>\n<li>\n<p><a href="#_analyze_data_access">Data Access</a></p>\n</li>\n<li>\n<p><a href="#_analyze_data_size">Data Size</a></p>\n</li>\n<li>\n<p><a href="#_analyze_data_validation">Data Validation</a></p>\n</li>\n<li>\n<p><a href="#_analyze_data_actuality_and_correctness">Data Actuality and Correctness</a> (which covers integrity issues as well)</p>\n</li>\n<li>\n<p><a href="#_analyze_data_access_protection">Data Access Protection</a></p>\n</li>\n<li>\n<p>Analyze Data Distribution, Replication and Syncing</p>\n</li>\n<li>\n<p><a href="#_analyze_backup">Backup</a></p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'section',
                  slug: 'analyze-data-structures',
                  id: '_analyze_data_structures',
                  sectionType: 'section',
                  index: 0,
                  title: 'Analyze Data Structures',
                  titlePlain: 'Analyze Data Structures',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Are data structures suited to represent the problem domain?</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>At first, make the <em>structure</em> of the existing data explicit,\ne.g. by creating a rough sketch of a data model as either\ninformal diagrams, entity-relationship or class diagrams.\nFocus should be on overview: Where and how are which kinds of\ndata stored in which format. What are the relationships between\nthe data elements?</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Second, create an explicit model of the <em>required domain data structures</em>.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Some typical questions might help in finding problems:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>structural differences between those two models?</p>\n</li>\n<li>\n<p>differences in data types?</p>\n</li>\n<li>\n<p>differences in plausibility or validity checking?</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'analyze-data-access',
                  id: '_analyze_data_access',
                  sectionType: 'section',
                  index: 1,
                  title: 'Analyze Data Access',
                  titlePlain: 'Analyze Data Access',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Get an overview of data access paths: How is data read or written?\nDo the queries match their requirements, or are complex mappings\nor unsuitable indirections involved?</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>What queries or executed how often?</p>\n</li>\n<li>\n<p>How large are the results in number or volume?</p>\n</li>\n<li>\n<p>Do relationships between query results have to be computed or do appropriate indices exist?</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'analyze-data-size',
                  id: '_analyze_data_size',
                  sectionType: 'section',
                  index: 2,
                  title: 'Analyze Data Size',
                  titlePlain: 'Analyze Data Size',
                  numeral: '3',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Are some parts of the data especially large?</p>\n</li>\n<li>\n<p>Is the relation between record-size (<em>how large is a single record</em>?)\nand record-volume (<em>how many records exists</em>?) plausible?</p>\n</li>\n<li>\n<p>Do critical queries involve especially large parts of data?</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'analyze-data-validation',
                  id: '_analyze_data_validation',
                  sectionType: 'section',
                  index: 3,
                  title: 'Analyze Data Validation',
                  titlePlain: 'Analyze Data Validation',
                  numeral: '4',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>How is data validated? (upon write, upon read, on client, on server, redundantly, uniformly)</p>\n</li>\n<li>\n<p>Is validation consistent with current business rules?</p>\n</li>\n<li>\n<p>Is validation overly complex?</p>\n</li>\n<li>\n<p>Is validation implemented with appropriate technical means?</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'analyze-data-actuality-and-correctness',
                  id: '_analyze_data_actuality_and_correctness',
                  sectionType: 'section',
                  index: 4,
                  title: 'Analyze Data Actuality and Correctness',
                  titlePlain: 'Analyze Data Actuality and Correctness',
                  numeral: '5',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Especially in data concerning dynamic entities like people, organizations,\nmarkets, commodities etc., facts are very likely to change over time.\nSuch data (<em>stored facts</em>) might become invalid sooner or later.\nOther types of information (like tax records, invoices or bookings on bank accounts) are created once and remain valid forever).</p>\n</div>'
                    },
                    {
                      type: 'admonition',
                      content:
                        '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="ulist">\n<ul>\n<li>\n<p>Peoples\' address typically changes something between 2-10 times during\ntheir lives.</p>\n</li>\n<li>\n<p>Empirical studies show that between 5 and 10% of business or job email addresses\nbecome invalid every year.</p>\n</li>\n</ul>\n</div>\n</td>\n</tr>\n</table>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Which parts of the data are subject to (what kind of) changes?</p>\n</li>\n<li>\n<p>Are parts of the data known to be invalid or contain invalid portions?</p>\n</li>\n<li>\n<p>Does the System handle potentially wrong or invalid data appropriately?</p>\n</li>\n<li>\n<p>Are there (organizational or technical) processes in place that deal with\ndata inconsistencies or faults?</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'analyze-data-access-protection',
                  id: '_analyze_data_access_protection',
                  sectionType: 'section',
                  index: 5,
                  title: 'Analyze Data Access Protection',
                  titlePlain: 'Analyze Data Access Protection',
                  numeral: '6',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Is there an overview what kinds of data need which level of (access) protection?</p>\n</li>\n<li>\n<p>Is there a security concept in place covering protection against unauthorized access?</p>\n<div class="ulist">\n<ul>\n<li>\n<p>How are users/roles/organizations <em>allowed</em> to access data managed?</p>\n</li>\n<li>\n<p>Is there a process in place to revoke access for outdated users/roles/organizations?</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>Is there a plan what shall happen in case of security breaches or data theft?</p>\n</li>\n<li>\n<p>How is data theft recognized?</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'analyze-backup',
                  id: '_analyze_backup',
                  sectionType: 'section',
                  index: 6,
                  title: 'Analyze Backup',
                  titlePlain: 'Analyze Backup',
                  numeral: '7',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Is there a universal backup strategy in place, covering all areas of data storage?</p>\n</li>\n<li>\n<p>Does the backup strategy match the business criticality of the data?</p>\n</li>\n<li>\n<p>To what extend has the backup been verified?</p>\n</li>\n<li>\n<p>Does a fallback scenario exist in case of (partial or complete) data loss?</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'debugging',
          id: 'Debugging',
          sectionType: 'section',
          index: 4,
          title: '<span class="pattern">Debugging</span>',
          titlePlain: 'Debugging',
          numeral: '5',
          children: [
            {
              type: 'section',
              slug: 'intent-5',
              id: '_intent_5',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Identify the source of an error (<em>bug</em>) or misbehavior by observing the flow of execution of a program in detail.</p>\n</div>'
                },
                {
                  type: 'admonition',
                  content:
                    '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\nMany software developers we met violated the basic rules of debugging. They worked in haste, took wrong assumptions, imagined-instead-of-read or simply hunted bugs at the wrong parts of the system.\n</td>\n</tr>\n</table>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-5',
              id: '_description_5',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Debuggers are well-known and important tools for most software developers. Yet finding bugs is often more difficult than expected - despite powerful tool support.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Approach the search for bugs, errors in the following order:</p>\n</div>'
                },
                {
                  type: 'olist',
                  content:
                    '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Get a clear and precise <strong>description</strong> of the error, the detailed wording of all error messages, log messages, stacktraces or similar information.</p>\n</li>\n<li>\n<p>Know the <strong>context</strong> of the error: the exact version of the system, the operating system, involved middleware, hardware settings and so on. Have knowledge of the input data which leads to the error.</p>\n</li>\n<li>\n<p><strong>Minimize external disturbance</strong> while searching for errors, you need to concentrate and observe details. Shut off chat and twitter clients, notifications and your phone. Send away your boss to an important management mission and lean back to reflect the error. Perhaps a colleague can support you.</p>\n</li>\n<li>\n<p><strong>Reproduce the error</strong> in the live system. Don&#8217;t rely on the assumption you can reproduce it - make sure you can reliably <em>really</em> reproduce it.</p>\n</li>\n<li>\n<p><strong>Obtain the exact version</strong> of all required source code and all involved data.</p>\n</li>\n<li>\n<p><strong>Reproduce the error in development environment</strong>: This ensures your development environment is consistent to the live system.</p>\n</li>\n<li>\n<p><strong>Rephrase your error assumption into a question</strong>: Distinguish symptoms from the cause of the error by asking "why?" a few times.</p>\n</li>\n<li>\n<p><strong>Identify the building blocks</strong> which are involved in the error path.</p>\n</li>\n<li>\n<p><strong>Understand the error scenario</strong>: You need to know the business or technical scenario (aka the process or activity flow) of the error: Which steps within the system or its external interfaces precede the error? This step is an example of <a href="#View-Based-Understanding">Section 2.3.28, &#8220;<span class="pattern">View Based Understanding</span>&#8221;</a>.</p>\n<div class="olist loweralpha">\n<ol class="loweralpha" type="a">\n<li>\n<p>Make this scenario <strong>explicit</strong> - draw or scribble a diagram. See the diagram "Divide and conquer" below as an example. Here the error arises in building block 1. You suppose the processing within the system is spanned by the blue marked data path in which the building blocks 2 to 6 are involved. Cut the path in half and check your assumption at the transition of one half to the other (here between building block 4 and 3). If no error is observable here then the error occurs after the considered transition. Otherwise you have to look for the error before the transition.</p>\n<div class="imageblock">\n<div class="content">\n<img src="./images/debugging-divide-and-conquer.jpg" alt="Divide and conquer">\n</div>\n<div class="title">Figure 11. Divide and conquer debugging tactics</div>\n</div>\n</li>\n<li>\n<p><strong>Plan your debugging strategy</strong>: Think of the expected outcome of every part of\nyour scenario.</p>\n</li>\n<li>\n<p>If you know you&#8217;re traveling to Pisa (Italy), you won&#8217;t confuse the Leaning Tower with an error.</p>\n</li>\n</ol>\n</div>\n</li>\n<li>\n<p><strong>Look, don&#8217;t imagine</strong>: Sherlock Holmes, the successful detective has formulated the golden rule of debugging: "<em>It&#8217;s a capital mistake to theorize before one has data</em>". Instrument the system or use step debugging. Look <em>exactly</em> what the messages are, read carefully.</p>\n</li>\n<li>\n<p><strong>Change only one thing at a time</strong> and test if the error disappears: Aim for errors with a sniper rifle, not with a shotgun.</p>\n</li>\n<li>\n<p>Apply the <strong>4-Eye-Principle</strong>: Describe the problem and your state of debugging to somebody else. Especially clarify all your assumptions.</p>\n</li>\n</ol>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-3',
              id: '_experiences_3',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>If locating errors takes very long, you&#8217;re probably facing one of the following issues:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>You suffer from any assumption that&#8217;s currently not valid.</p>\n</li>\n<li>\n<p>You <em>think</em> something instead of <em>observing</em> it - you let your mind deceive your eyes or ears.</p>\n</li>\n<li>\n<p>You ignore the context: you test a wrong version, with wrong data or a wrong operating system.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-3',
              id: '_applicability_3',
              sectionType: 'section',
              index: 3,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '4',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Whenever a bug or misbehavior of a program is reported, debugging can help to identify its root cause.</p>\n</li>\n<li>\n<p>Debugging can help to understand a system by making its inner working explicit.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-3',
              id: '_related_patterns_3',
              sectionType: 'section',
              index: 4,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Root-Cause-Analysis">Section 2.3.20, &#8220;<span class="pattern">Root Cause Analysis</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'development-process-analysis',
          id: 'Development-Process-Analysis',
          sectionType: 'section',
          index: 5,
          title: '<span class="pattern">Development-Process-Analysis</span>',
          titlePlain: 'Development-Process-Analysis',
          numeral: '6',
          children: [
            {
              type: 'section',
              slug: 'intent-6',
              id: '_intent_6',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Analyse and inspect the development process (as documented or described by stakeholders) for appropriateness, problems or problem-areas.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-6',
              id: '_description_6',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Under discussion!</p>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'documentation-analysis',
          id: 'Documentation-Analysis',
          sectionType: 'section',
          index: 6,
          title: '<span class="pattern">Documentation-Analysis</span>',
          titlePlain: 'Documentation-Analysis',
          numeral: '7',
          children: [
            {
              type: 'section',
              slug: 'intent-7',
              id: '_intent_7',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Analyse existing documentation for availability, correctness, actuality, problems or problem-areas.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-7',
              id: '_description_7',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Under discussion!</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content: '<div class="paragraph">\n<p>Look for:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>missing documentation,</p>\n</li>\n<li>\n<p>over-documentation</p>\n</li>\n<li>\n<p>outdated documentation</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'infrastructure-analysis',
          id: 'Infrastructure-Analysis',
          sectionType: 'section',
          index: 7,
          title: '<span class="pattern">Infrastructure-Analysis</span>',
          titlePlain: 'Infrastructure-Analysis',
          numeral: '8',
          children: [
            {
              type: 'section',
              slug: 'intent-8',
              id: '_intent_8',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Analyze the technical infrastructure of the <a href="#System">[System]</a>, e.g. with respect to time and resource consumption or creation. Part of <a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a>.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-8',
              id: '_description_8',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Infrastructure analysis is associated to the more general <a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a>, with focus on\ntechnical infrastructure for operation, test and development of the <a href="#System">[System]</a>.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Inspect and analyse the technical infrastructure, for example the following aspects:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>production hardware: does characteristics, type and size of the hardware suit the system\nand the business problem? Hardware might consist of several subsystems, like processing, various levels of storage (processor cache, RAM, flash, disk, tape or others), graphical and network interfaces and arbitrary specialized hardware</p>\n</li>\n<li>\n<p>development and test hardware</p>\n</li>\n<li>\n<p>software infrastructure, like operating system, required database, middleware, frameworks and libraries</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>It helps to measure runtime behavior agains expected or required values, for example processing time and memory consumption. <a href="#Instrument-System">Section 2.3.10, &#8220;<span class="pattern">Instrument System</span>&#8221;</a> can support this type of analysis.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Specialized stakeholders (like datacenter administrators, operating-system or database experts, hardware designers) can often pinpoint critical aspects of existing infrastructures from their experience.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Apply <a href="#View-Based-Understanding">Section 2.3.28, &#8220;<span class="pattern">View Based Understanding</span>&#8221;</a>, especially an infrastructure overview (e.g. deployment diagram) to get an overview of existing hardware plus the associated software. Start with an hardware context and refine. Ensure you have at least all hardware-types (node-types) plus their relations (networks, buses) visible. Double-check this overview with the appropriate stakeholders.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experience',
              id: '_experience',
              sectionType: 'section',
              index: 2,
              title: 'Experience',
              titlePlain: 'Experience',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>The combination of hardware and software can be arbitrary complex. Even small configuration\nsettings of operating systems (like block or packet sizes) can conflict with hardware capabilities, effectively ruining overall system performance.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-practices',
              id: '_related_practices',
              sectionType: 'section',
              index: 3,
              title: 'Related Practices',
              titlePlain: 'Related Practices',
              numeral: '4',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Improve-Logging">Section 4.10.4, &#8220;<span class="pattern">Improve Logging</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Infrastructure-Analysis">Section 2.3.8, &#8220;<span class="pattern">Infrastructure-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Instrument-System">Section 2.3.10, &#8220;<span class="pattern">Instrument System</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Quantitative-Analysis">Section 2.3.15, &#8220;<span class="pattern">Quantitative-Analysis</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'hierarchical-quality-model',
          id: 'Hierarchical-Quality-Model',
          sectionType: 'section',
          index: 8,
          title: '<span class="pattern">Hierarchical-Quality-Model</span>',
          titlePlain: 'Hierarchical-Quality-Model',
          numeral: '9',
          children: [
            {
              type: 'section',
              slug: 'intent-9',
              id: '_intent_9',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Decompose the overall goal of "high quality" into more detailed and precise requirements, finally resulting in a tree-like structure. See <a href="#ATAM">Section 2.3.1, &#8220;<span class="pattern">Atam</span>&#8221;</a> and <a href="#Quality-Requirements">[Quality-Requirements]</a>.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-9',
              id: '_description_9',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Under discussion!</p>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'instrument-system',
          id: 'Instrument-System',
          sectionType: 'section',
          index: 9,
          title: '<span class="pattern">Instrument System</span>',
          titlePlain: 'Instrument System',
          numeral: '10',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Use retroactive modification of the executables which target\ncross-cutting concerns to make the existing software-base tell about it&#8217;s\ninternals. Ways to achieve this can include <a href="https://en.wikipedia.org/wiki/Aspect-oriented_programming">aspect-oriented programming (AOP)</a>, <a href="https://en.wikipedia.org/wiki/Monkey_patch">Monkey-Patching</a> and other <a href="https://en.wikipedia.org/wiki/Metaprogramming">metaprogramming</a> techniques.</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'intent-10',
              id: '_intent_10',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Find out how the system is really used and what the runtime relationships are,\nas well as other facts that can not be easily determined by\n<a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a> even in situation where the system under design is\nlargely undocumented and the architecture work thus mostly relies on\nassumptions, interviews and lore.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-10',
              id: '_description_10',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In many languages today it is possible to define operation that alter the\nbehavior of certain structures in the system without modifying the original\nsource code. In Java this is often done by byte code instrumentation, in Ruby,\nPHP and some other languages there are built in mechanisms to (re-) define the\nbehavior of system classes or libraries.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In theory instrumenting the system therefore is a straightforward process:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Identify and describe the concern that shall be explored (e.g.\nobject creation, function entries and exits, code execution or something\nelse that can be described in the terms of the mechanism used).</p>\n</li>\n<li>\n<p>Write the code that collects the data about the system behavior (e.g. sends it\nto a syslog, writes it to a file, sends it to a dedicated server, creates an\nSNMP Trap etc.)</p>\n</li>\n<li>\n<p>Use the (language specific) mechanism to create the instrumented version of\nthe system</p>\n</li>\n<li>\n<p>Replace (part of) the currently operational system with the instrumented version</p>\n</li>\n<li>\n<p>Collect the data</p>\n</li>\n<li>\n<p>Replace the instrumented version with the previously operational version</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In real life, since the mechanisms of instrumentation varies widely, specific ways\nmust be found for each scenario.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>While tools like AspectJ provide easy ways to instrument Java code and Ruby’s\nmetaprogramming model allows for easy introduction of cross-cutting functionality\nthe same gets harder to do with other languages. In some languages it may be\nnecessary to modify a dynamically linked library with central operations to\nintroduce instrumentation without modifying the original system.</p>\n</div>'
                },
                {
                  type: 'admonition',
                  content:
                    '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="paragraph">\n<p>A special form of this pattern, especially useful for interpreted languages, is\n<em>instrumenting the source code manually</em>. Basically all you do here is manually type in\nthe code to collect the information you&#8217;re interested in. In this case it is\nespecially important to have a tried and tested way to replace the instrumented\nsystem back with the original system!</p>\n</div>\n</td>\n</tr>\n</table>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-4',
              id: '_experiences_4',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'admonition',
                  content:
                    '<div class="admonitionblock warning">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Warning</div>\n</td>\n<td class="content">\neven if used cautiously, the instrumentation of the system under design can\nentail heavy performance penalties (on execution time, space used, bandwith\netc.) so always make sure that there is a quick way to switch back to the\noriginal non-instrumented version.\n</td>\n</tr>\n</table>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-4',
              id: '_applicability_4',
              sectionType: 'section',
              index: 3,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '4',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>The pattern is almost universally applicable as long as there is a way to\nintroduce instrumentation to the executable and the operations team can be\nconvinced that it is possible to switch back from the instrumented version\nreal fast.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-4',
              id: '_related_patterns_4',
              sectionType: 'section',
              index: 4,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Software-Archeology">Section 2.3.22, &#8220;<span class="pattern">Software Archeology</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Use-Invariants-To-Kill-Zombies">Section 4.10.9, &#8220;<span class="pattern">Use Invariants To Kill Zombies</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'issue-tracker-analysis',
          id: 'Issue-Tracker-Analysis',
          sectionType: 'section',
          index: 10,
          title: '<span class="pattern">Issue-Tracker-Analysis</span>',
          titlePlain: 'Issue-Tracker-Analysis',
          numeral: '11',
          children: [
            {
              type: 'section',
              slug: 'intent-11',
              id: '_intent_11',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Analyse entries from issue tracker to identify critical areas, components or stakeholders.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Under discussion!</p>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'organizational-analysis',
          id: 'Organizational-Analysis',
          sectionType: 'section',
          index: 11,
          title: '<span class="pattern">Organizational-Analysis</span>',
          titlePlain: 'Organizational-Analysis',
          numeral: '12',
          children: [
            {
              type: 'section',
              slug: 'intent-12',
              id: '_intent_12',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Analyse and inspect organization(s) responsible for the system.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-11',
              id: '_description_11',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Work-in-progress: collecting ideas and currently doing research, therefore still chaotic document</p>\n</div>'
                },
                {
                  type: 'section',
                  slug: 'software-organizations-and-their-effect-on-systems',
                  id: '_software_organizations_and_their_effect_on_systems',
                  sectionType: 'section',
                  index: 0,
                  title: 'Software Organizations and their Effect on Systems',
                  titlePlain:
                    'Software Organizations and their Effect on Systems',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>As Nagappan et al write: <em>From the historical perspective, Fred Brooks in his classic book "The Mythical Man Month"\nprovides an analogy in the chapter on "Why did the (mythical) Tower of Babel Fail?" The observation being that, the\npeople had (1) a clear mission; (2) manpower; (3) (raw) materials; (4) time and (5) technology. The project failed because\nof communication, and its consequent organization. Brooks further states that in software systems schedule\ndisasters, functional misfits and system bugs arise from a lack of communication between different teams. Quoting Brooks <strong>“The\npurpose of organization is to reduce the amount of communication and coordination necessary;</strong> hence organization is a radical\nattack on the communication problems…”.</em> What many organization like Amazon, SoundCloud, Otto or Google do these days is to\ncreate self-contained, cross-functional teams with a high cohesion inside the team and loose coupling between the teams.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Cohesion in programming refers to the degree to which the elements of a component belong together, all the related code\nshould be close to each other. For teams the same is true: all people with the necessary skills to create a feature should\nbe close together.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Coupling in programming refers to the degree to which the different components depend on each other. Preferably, components\nshould be independent from each other as much as possible. For teams the same should be true, different teams should communicate\nas little as possible. Adrian Cockcroft said regarding the independence between service teams that "<em>You don’t go and\nhave a deep discussion with the Google Maps team just to use their Maps API: it&#8217;s a reasonably stable\nAPI, you are isolated, it&#8217;s sort of versioned, occasionally it changes and you may want to do things. So basically you\nbuild your own service, you build a bounded context around the thing that your team, your 2 or 3 engineers, are building\nand you build a service or a group of services that interface with all the other things that your company is doing, as\nif they were separate companies. It’s a different bounded context. <strong>So you talk to them but you are not tightly coupled</em></strong>".</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>How can an organization be loosely or tightly coupled? What are those properties? MacCormack et al. answered this question\nin a Harvard Business School <a href="http://www.hbs.edu/faculty/Publication%20Files/08-039_1861e507-1dc1-4602-85b8-90d71559d85b.pdf">publication</a>:</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Table: Characterizing Different Organizational Forms</p>\n</div>'
                    },
                    {
                      type: 'table',
                      content:
                        '<table class="tableblock frame-ends grid-all stretch">\n<colgroup>\n<col style="width: 33.3333%;">\n<col style="width: 33.3333%;">\n<col style="width: 33.3334%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top"></th>\n<th class="tableblock halign-left valign-top">Tightly-Coupled</th>\n<th class="tableblock halign-left valign-top">Loosely-Coupled</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Goals</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Shared, Explicit</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Diverse, Implicit</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Membership</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Closed, Contracted</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Open, Voluntary</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Authority</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Formal, Hierarchy</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Informal, Meritocracy</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Location</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Centralized, Collocated</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Decentralized, Distributed</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Behavior</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Planned, Coordinated</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Emergent, Independent</p></td>\n</tr>\n</tbody>\n</table>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Of course this is not black and white, there&#8217;s always some place in between.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'conways-law-and-what-to-do-about-it',
                  id: '_conways_law_and_what_to_do_about_it',
                  sectionType: 'section',
                  index: 1,
                  title: 'Conway&#8217;s Law and what to do about it',
                  titlePlain: 'Conway’s Law and what to do about it',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>In 1968 Conway observed that <em>"organizations produce designs which are copies of the communication\nstructures of these organizations (If you have four groups working on a compiler, you&#8217;ll get a 4-pass compiler)"</em>. Around\n2006 many companies had a frontend, backend and middleware department reflecting the three-tier architecture they were\nbuilding. Modern companies have individual deployable services built by cross-functional teams.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>James Coplien wrote in his book that <em>"If the parts of an organization (e.g. teams,\ndepartments, or subdivisions) do not closely reflect the essential parts of the product, or if the relationship between\norganizations do not reflect the relationships between product parts, then the project will be in trouble&#8230;&#8203; Therefore:\nMake sure the organization is compatible with the product architecture"</em>.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>David Parnas (1972, 1978) argued that it is easier to split development work across a\ngroup if people can work independently and in parallel. To support parallelism, Parnas encouraged\ndevelopers to avoid sharing assumptions and data. Specifically, he contended that every developer’s task\nassignment should lie within a product module that is “characterized by its knowledge of a design\ndecision that it hides from all others” (1972: p. 1056)</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>That means that the flexibility of an organization is important to effective design\nand operations. It also means that you first create your architecture and then form the organizational communication\naround it. This is not as crazy as it sounds, because existing departments can still exist, but the people inside those\ndepartments need to be insourced into the newly formed product teams representing end-to-end the individual services or\ncomponents of the system.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p><strong>If you want to improve your architecture you need to improve your organization as well</strong></p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>TODO: collect more examples of org transformation</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Since systems usually live longer than corporate structures, it is important that managers keep their organisation\nflexible. An example for organizational flexibility is Soundcloud.\nThey experimented with different organizational models to find the one that fit product development best. That\nexperimentation is possible is important to note - many organizations don&#8217;t do that. They moved over a couple of years\nfrom the classical approach of separate development and operation teams to a structure where teams can act autonomously\nand build and run their systems without handovers to other teams. Since there is still a need for centralized work they\ncreated a production engineering team which takes care of common infrastructure ("run the system that runs systems") and\ndo internal consulting in case a team needs help.\nFor some companies experimentation is really hard, e.g., a large insurance company has 800 people in an operations department and\nclaims because of that "You build it, you run it" is not possible, the company could still keep the departments, but in fact it\npractices insourcing operations people (or UX specialists or business analysts, etc.) into the product teams. That way the\ndepartments, which are hard to change, still exist, but there&#8217;s still a good chance to create a cohesive team structure.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>An example of a popular change of software producing organizations is the move from operations/development/business/testing\nsilos to functional silos (e.g. a cross functional team responsible for product search), because the optimized\nprocess-based organization is horizontally focused on outcomes, not vertically oriented around skills like testing,\ndevelopment and operations.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>TODO: provide more case studies, e.g. UK Government Digital Services, Google, Amazon, ING, Otto</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'organizational-structure-and-its-effect-on-quality',
                  id: '_organizational_structure_and_its_effect_on_quality',
                  sectionType: 'section',
                  index: 2,
                  title: 'Organizational Structure and its Effect on Quality',
                  titlePlain:
                    'Organizational Structure and its Effect on Quality',
                  numeral: '3',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Microsoft did a large <a href="https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr-2008-11.pdf">study</a> on how\norganizational structure affects software quality. The effect of organizational structure on quality is higher than code\nchurn, code complexity, code coverage or bugs found before releasing the software.\nMicrosoft looked at a few organisational metrics:</p>\n</div>'
                    },
                    {
                      type: 'olist',
                      content:
                        '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Number of Engineers (NOE): The more people who touch the code the lower the quality. This is of course something you need to balance. Of course if\nthere is only one person who works on a component, the likelihood of conceptual integrity and few bugs is high (if the\npersons work quality is also good). If 300 people change the component it is much harder to keep conceptual integrity.\nHowever, a company doesn&#8217;t want knowledge islands, depending on the knowledge of one single person, therefore the company\nshould find the right balance here. Netflix recommends 2-3 people per component, Amazon has the "Two pizza team" rule\n(only so many people should work on a component or service who can be fed by two pizzas)</p>\n</li>\n<li>\n<p>Number of Ex-Engineers (NOEE): A large loss of team members affects the knowledge retention and thus quality. A similar\n<a href="http://www.se-radio.net/2014/10/episode-212-randy-shoup-on-company-culture/">study</a> at eBay found out that\na resource pool (a pool of developers where projects can take people out) led to very bad quality</p>\n</li>\n<li>\n<p>Edit Frequency (EF): The more source code edits to components the higher the instability and lower the quality (sure, if I never touch code\nwhich works I won&#8217;t introduce new bugs. But we know that we need to test (heavily) changed source code with a greater\nintensity than less changed parts of the code)</p>\n</li>\n<li>\n<p>Depth of Master Ownership (DMO): The lower the level of ownership the better the quality. What they mean with that is\nthat a component should have only one clear owner and that owner (can be a team) needs to report to only one leader and not many.</p>\n</li>\n<li>\n<p>Percentage of Org contributing to development (PO): The more cohesive the contributors organizationally the higher the\nquality. Means that it is important to create a team where its members share a common culture, focus and social cohesion.</p>\n</li>\n<li>\n<p>Level of Organizational Code Ownership (OCO): The more cohesive the contributors (edits) the higher is the quality.\nMeans that it is important to create a team where its members share a common culture on how to write and design a system.</p>\n</li>\n<li>\n<p>Overall Organization Ownership (OOW): People who change often the same source code should sit together closely or at\nleast know each other well and have an unproblematic way to communicate. E.g. working on a particular piece of source\ncode with a person in another timezone lowers quality, pair programming leads to higher quality.</p>\n</li>\n<li>\n<p>Organization Intersection Factor (OIF): The more diffused the different organizations contributing code, the lower the\nquality. If totally unrelated teams contribute to the source code of a component and those changes are small (&lt; 10% of\nall changed lines) your quality declines. Try to not have too many contributors who only contribute little.</p>\n</li>\n</ol>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Statistical existence and empirical evidence stemming from organizations research and social-network analysis reveals that low organisational quality connected to software can be found in the relationships across the following\ncombinations (combined org metrics appear in brackets): TODO: still a bit unclear</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Low quality: Code is often changed AND the number of developers changing that code is high (EF ↔ NOE)</p>\n</li>\n<li>\n<p>Low quality: Code is often changed AND the number of developers who changed that code left the team/organization is high (EF↔ NOEE)</p>\n</li>\n<li>\n<p>High quality: The team is cohesive and shares a common culture/focus/social cohesion AND they own their code completely\nand make their own decisions (OCO ↔ DMO)</p>\n</li>\n<li>\n<p>High quality: The team shares a common culture/focus/social cohesion AND shares a common coding culture (OCO ↔ PO)</p>\n</li>\n<li>\n<p>High quality: The team sits together (or low distance or can easily interact) AND shares a common coding culture (OOW ↔ PO)</p>\n</li>\n<li>\n<p>High quality: The team sits together (or low distance or can easily interact) AND they share a common culture/focus/social cohesion (OOW ↔ OCO)</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'value-stream-mapping',
                  id: '_value_stream_mapping',
                  sectionType: 'section',
                  index: 3,
                  title: 'Value Stream Mapping',
                  titlePlain: 'Value Stream Mapping',
                  numeral: '4',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Value stream mapping is a lean-management method for analyzing the current state of events that take a product or service\nfrom its beginning through to the customer. Examples in the software world would be all the steps needed from having an\nidea to implementing and deploying it (which usually requires a business case, putting it on a roadmap, write requirements,\ncreate UX prototypes, implementation, test in between).</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Two key metrics associated with value stream mapping are value adding times and non value adding times (=waste). If\nsomething does not directly add value as perceived by the customer, it is waste. If there is a way to do without it,\nit is waste. Mary Poppendieck <a href="https://books.google.de/books?id=UalKAgAAQBAJ&amp;pg=PA4&amp;lpg=PA4&amp;dq=If+something+does+not+directly+add+value+as+perceived+by+the+customer,+it+is+waste.+If+there+is+a+way+to+do+without+it,+it+is+waste.&amp;source=bl&amp;ots=eiQCoEpPVe&amp;sig=Hf75DmlIudz50XJlkSef0Vkw3KM&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwiv44Dj_b7QAhUoCsAKHYWnCA8Q6AEIHTAA#v=onepage&amp;q=If%20something%20does%20not%20directly%20add%20value%20as%20perceived%20by%20the%20customer%2C%20it%20is%20waste.%20If%20there%20is%20a%20way%20to%20do%20without%20it%2C%20it%20is%20waste.&amp;f=false">describes</a>\nseven types of waste in software development: waiting, partially done work, extra process, extra features, task switching,\ndefects and motion.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Often, the value stream is broken in a few places where small changes can bring large improvements. Those are the places\nyou need to find and where you can improve the architecture. A great example how value stream mapping led to a large architectural\nimprovement is Soundcloud&#8217;s move from monolith to Microservices and from low cohesion and strong coupling of Departments\nto high cohesion and loose coupling of Departments (<a href="http://philcalcado.com/2015/09/08/how_we_ended_up_with_microservices.html" class="bare">http://philcalcado.com/2015/09/08/how_we_ended_up_with_microservices.html</a>).</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>How to do a / examples of value stream mapping: TODO</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Old stuff -\nLook for:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>violations of Conways\' law</p>\n</li>\n<li>\n<p>over or under-regulated processes</p>\n</li>\n<li>\n<p>organization with overly strict constraints</p>\n</li>\n<li>\n<p>organizations lacking constraints (anarchy)</p>\n</li>\n<li>\n<p>orga-problems leading to IT problems</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'examples',
              id: '_examples',
              sectionType: 'section',
              index: 2,
              title: 'Examples',
              titlePlain: 'Examples',
              numeral: '3',
              children: []
            },
            {
              type: 'section',
              slug: 'also-known-as-2',
              id: '_also_known_as_2',
              sectionType: 'section',
              index: 3,
              title: 'Also Known As',
              titlePlain: 'Also Known As',
              numeral: '4',
              children: []
            },
            {
              type: 'section',
              slug: 'related-patterns-5',
              id: '_related_patterns_5',
              sectionType: 'section',
              index: 4,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '5',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p><a href="#Bus-Factor">Section 2.3.29, &#8220;<span class="pattern">Bus factor</span>&#8221;</a></p>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'social-debt',
          id: 'Social-Debt',
          sectionType: 'section',
          index: 12,
          title: '<span class="pattern">Social Debt</span>',
          titlePlain: 'Social Debt',
          numeral: '13',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Social debt amounts to additional project cost connected to sub-optimal organisational and socio-technical decisions</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'intent-13',
              id: '_intent_13',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Evaluate and track the welfare and health of a software development and operation organization or community such that additional project cost can be avoided or somehow managed.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-12',
              id: '_description_12',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Organization, coordination and cooperation are critical forces behind software development and operation. Through well-thought protocols and cooperation guidelines, software architects, developers as much as entire organizations try to orchestrate proper coordination and cooperation but many times such attempts are burdened by sub-optimal organisational decisions, e.g., the adoption of a process model that is not compatible with developers and operators’ background and mindset or even collaborating with an organization that does not and cannot share the same values of the organization in question. These circumstances often result in additional project cost in the form of recurrent delays, condescending behaviour or worse.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Evaluating these circumstances together, trying to minimise their impact on software development and the quality of resulting software products is currently object of intensive study.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>The goal for social debt in the next few years of research is that of reaching a crisp definition that contains the essential traits of social debt which can be refined into practical operationalizations for use by software engineering professionals in need of knowing more about their organizational structure and the properties/cost trade-off that structure currently reflects.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-5',
              id: '_experiences_5',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>As previously mentioned, we found three recurrent series of circumstances in which architecture decisions and the process of architecting reportedly generated social debt.</p>\n</div>'
                },
                {
                  type: 'olist',
                  content:
                    '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p><strong>Lonesome Architecting:</strong> we observed this pattern manifesting when non-architects are forced to make decisions while actual architects are "too few and far apart".\nOne of the software architects reporting this condition in industry also complained that he and his colleagues had [&#8230;&#8203;] not enough time to dedicate to decision-making (and related changes) as well as properly disseminating architecture decisions.\nSome of the most common consequences we found resulting from this\npattern are: (a) decision unawareness; (b) misalignment between\nproduct version and architecture; (c) lack of awareness on the\nproduct&#8217;s needs; (d) overly fast decision-making to "patch-up". The\ndebt in this case is associated to delays needed to find out about\ndecisions and apply the necessary modifications, possibly rewriting\ncode with considerable waste. Also, from a social point of view, this\ncircumstance results in loss of project vision (i.e., frequent quotes\nwere "what are we doing? what does the product need for its\nimprovement?") with resulting frustration and mistrust.</p>\n</li>\n<li>\n<p><strong>Obfuscated Architecting:</strong> Obfuscated architecting takes place when multiple sub-groups emerge in a development network without a harmonised organisational and socio-technical vision necessary to operate in the network. We observed this pattern manifesting when new or changed architecture decisions imply implementation changes that necessitate new people to be included in the development network (e.g., different skills are needed). we observed this pattern in presence of multiple products (both legacy and new) being operated together but in the process of being integrated. New people to be included in the development network lacked the frame of mind and vision needed to understand and cope with the legacy product. This obfuscates the communication of architecture decisions. Some of the most common consequences we found resulting from this pattern are: (a) single communication points for architecture decisions - many developers eventually felt left out of the development network when it came to software architecture, since they could not reach architects properly, this led to time waste and resulting  developers\' frustration; (b) circumstances indicating socio-technical code-churn.</p>\n</li>\n<li>\n<p><strong>Architecting by Osmosis:</strong> In layman&#8217;s terms, osmosis refers to the process of permeating a solvent through a semi-permeable (series of) membrane(s). By comparison, architecting by osmosis means making architecture decisions using knowledge that is filtered through many semi-permeable communication links. we observed architecting by osmosis manifesting when the following sequence of events occurs: (1) the effects of certain decisions reach clients and product operators but result in inoperable software; (2) operators, pushed by clients, share malcontent with developers and suggest technical changes; (3) developers evaluate (and sometimes partially implement) possible technical changes and suggest change to architecture decisions; (4) architects make necessary changes in decisions with knowledge that was partially filtered by all communication layers in the development network.</p>\n</li>\n</ol>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-5',
              id: '_applicability_5',
              sectionType: 'section',
              index: 3,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '4',
              children: []
            },
            {
              type: 'section',
              slug: 'related-patterns-6',
              id: '_related_patterns_6',
              sectionType: 'section',
              index: 4,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '5',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>All Cross-cutting patterns relate to the circumstances defined above.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'references-2',
              id: '_references_2',
              sectionType: 'section',
              index: 5,
              title: 'References',
              titlePlain: 'References',
              numeral: '6',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Damian Tamburri, Philippe Kruchten, Patricia Lago, Hans van Vliet: What is social debt in software engineering? In: Cooperative and Human Aspects of Software Engineering (CHASE), p. 93–96, 2013, Washington, DC. <a href="https://jisajournal.springeropen.com/articles/10.1186/s13174-015-0024-6" class="bare">https://jisajournal.springeropen.com/articles/10.1186/s13174-015-0024-6</a></p>\n</li>\n<li>\n<p>Tamburri, D. A. &amp; Nitto, E. D. (2015), When Software Architecture Leads to Social Debt., in Len Bass; Patricia Lago &amp; Philippe Kruchten, ed., \'WICSA\' , IEEE Computer Society, , pp. 61-64 .</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'qualitative-analysis',
          id: 'Qualitative-Analysis',
          sectionType: 'section',
          index: 13,
          title: '<span class="pattern">Qualitative Analysis</span>',
          titlePlain: 'Qualitative Analysis',
          numeral: '14',
          children: [
            {
              type: 'section',
              slug: 'intent-14',
              id: '_intent_14',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Find out (analyze):</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>whether quality requirements can be met by the system,</p>\n</li>\n<li>\n<p>which specific quality requirements are risks with respect to the current architecture,</p>\n</li>\n<li>\n<p>which specific quality requirements are currently non-risks</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-13',
              id: '_description_13',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'olist',
                  content:
                    '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p><a href="#Capture-Quality-Requirements">Capture quality requirements</a> to ensure you have explicit, specific, valid and current <em>quality requirements</em> available - preferably in form of <em>scenarios</em>.</p>\n</li>\n<li>\n<p>Prioritize these scenarios with respect to business value or importance for the authoritative stakeholders.</p>\n</li>\n<li>\n<p>For every important scenario:</p>\n<div class="olist loweralpha">\n<ol class="loweralpha" type="a">\n<li>\n<p>analyze the architectural approach the system takes,</p>\n</li>\n<li>\n<p>decide whether this approach seems appropriate or risky</p>\n</li>\n</ol>\n</div>\n</li>\n</ol>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-6',
              id: '_experiences_6',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Conducting workshops with a variety of stakeholders often leads to intense and productive communication.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-6',
              id: '_applicability_6',
              sectionType: 'section',
              index: 3,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '4',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Use qualitative analysis to support in the following situations:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>You need to analyze which specific quality requirements are at risk and which will most likely be met by the system.</p>\n</li>\n<li>\n<p>You have a variety of different stakeholders or groups which can all impose quality requiements - but have not yet agreed on a common set of such requirements.</p>\n</li>\n<li>\n<p>A current and understandable collection of specific quality requirements for the system is missing.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'also-known-as-3',
              id: '_also_known_as_3',
              sectionType: 'section',
              index: 4,
              title: 'Also Known As',
              titlePlain: 'Also Known As',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#ATAM">Section 2.3.1, &#8220;<span class="pattern">Atam</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'references-3',
              id: '_references_3',
              sectionType: 'section',
              index: 5,
              title: 'References',
              titlePlain: 'References',
              numeral: '6',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#ATAM">Section 2.3.1, &#8220;<span class="pattern">Atam</span>&#8221;</a>. Published by the Software Engineering Institute in numerous whitepapers and books, especially <a href="#Clements-ATAM">[Clements-ATAM]</a>.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'quantitative-analysis',
          id: 'Quantitative-Analysis',
          sectionType: 'section',
          index: 14,
          title: '<span class="pattern">Quantitative-Analysis</span>',
          titlePlain: 'Quantitative-Analysis',
          numeral: '15',
          children: [
            {
              type: 'section',
              slug: 'intent-15',
              id: '_intent_15',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Measure artifacts or processes within the system, e.g. source code.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-14',
              id: '_description_14',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Under discussion!</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-practices-2',
              id: '_related_practices_2',
              sectionType: 'section',
              index: 2,
              title: 'Related Practices',
              titlePlain: 'Related Practices',
              numeral: '3',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'pre-interview-questionnaire',
          id: 'Pre-Interview-Questionnaire',
          sectionType: 'section',
          index: 15,
          title: '<span class="pattern">Pre Interview Questionnaire</span>',
          titlePlain: 'Pre Interview Questionnaire',
          numeral: '16',
          children: [
            {
              type: 'section',
              slug: 'intent-16',
              id: '_intent_16',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Prior to interviewing stakeholders, present them with a written questionnaire, so they can reflect in advance.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-15',
              id: '_description_15',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>A specialisation of <a href="#Questionnaire">questionnaire</a> - targeted to be used by stakeholders (aka your interview partners). As with the more general <a href="#Questionnaire">questionnaire</a> you need to collect appropriate topics, questions and suggestions. Remember to apply <a href="#Stakeholder-Specific-Communication">stakeholder-specific communication</a>: It might be useful to create different questionnaires per stakeholder or a group of stakeholders. This can lead to more work for you as interviewer, but will also lead to better interview results.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Mix open and closed questions:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>open questions require stakeholders to formulate answers on their own. For example "How did you&#8230;&#8203;?" or "Please explain&#8230;&#8203;?"</p>\n</li>\n<li>\n<p>closed questions ask stakeholders to select from several predefined choices.</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Include a "Comments/Remarks" section at the end of the questionnaire, so stakeholders can comment on topics you did not consider in advance. The <a href="#Pre-Interview-Questionnaire">Section 2.3.16, &#8220;<span class="pattern">Pre Interview Questionnaire</span>&#8221;</a> shall be handed over to the appropriate stakeholders in advance, a few days before the interview. As these documents will be read and processed by external and potentially critical stakeholders, you need to care for several details:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Stakeholder specific terminology: Ensure your questions will be understandable by the target audience. See <a href="#Stakeholder-Specific-Communication">[Stakeholder-Specific-Communication]</a>.</p>\n</li>\n<li>\n<p>Ensure nice layout and (visual) readability. Your questionnaire shall be fun to work with.</p>\n</li>\n<li>\n<p>Ensure timely delivery to your stakeholders, so they have enough time to think about their answers. Do never force your stakeholders to answer questions under time pressure.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'examples-2',
              id: '_examples_2',
              sectionType: 'section',
              index: 2,
              title: 'Examples',
              titlePlain: 'Examples',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Download a sample pre-interview questionnaire - currently only in German:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="./docs/DE-Vorab-Fragebogen.pdf" target="_blank" rel="noopener">pdf version</a></p>\n</li>\n<li>\n<p><a href="./docs/DE-Vorab-Fragebogen.docx" target="_blank" rel="noopener">docx version</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'also-known-as-4',
              id: '_also_known_as_4',
              sectionType: 'section',
              index: 3,
              title: 'Also Known As',
              titlePlain: 'Also Known As',
              numeral: '4',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Interview checklist</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-7',
              id: '_related_patterns_7',
              sectionType: 'section',
              index: 4,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Questionnaire">Section 2.3.18, &#8220;<span class="pattern">Questionnaire</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'pre-mortem',
          id: 'Pre-Mortem',
          sectionType: 'section',
          index: 16,
          title: '<span class="pattern">Pre-Mortem</span>',
          titlePlain: 'Pre-Mortem',
          numeral: '17',
          children: [
            {
              type: 'section',
              slug: 'intent-17',
              id: '_intent_17',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Identify issues that could let become the current project a huge disaster.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-16',
              id: '_description_16',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In software projects, post-mortems are often used to learn from a failed projects with the goal to avoid the identified problems in the future. But why wait for so long?</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In a pre-mortem workshop, stakeholders are imaging that they are living some months or years in the future to analyse their current project that had been failed miserably.\nThey are explicitly encouraged to speak about the main points that did go wrong from the future’s perspective.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>The organization of the workshop for a running software project can be done as follows:</p>\n</div>'
                },
                {
                  type: 'olist',
                  content:
                    '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Preparation: Participants are gathering in a room with a big empty wall. For each participant, a pen, around ten post-its and three adhesive dot markers are handed out.</p>\n</li>\n<li>\n<p>Scenario: The workshop facilitator tells all participant that they are now in the future and their project has failed. It failed so miserably that it was a total disaster. The project members don’t speak to each other anymore and the whole company gained a bad reputation.</p>\n</li>\n<li>\n<p>Task: To come over this heavy shock, all former project members are summoned together to spot the reasons for this fiasco. Each of the participants should write down the concrete reasons that led the complete failure (within a 5 minutes timebox, one reason on one post-it).</p>\n</li>\n<li>\n<p>Communication: Each participant puts their post-it notes on the wall and explains each identified reason in 1-2 short sentences.</p>\n</li>\n<li>\n<p>Grouping: The facilitator groups the post-its together to main topics and names these main topics with additional post-its that placed onto the emerged groups.</p>\n</li>\n<li>\n<p>Prioritization: All participants can now use the dot stickers to mark the three most important topics (no accumulation allowed) from their point of view.</p>\n</li>\n<li>\n<p>Discussion (optional): Possible solutions that address the three most important reasons are discussed and the next steps to implement the solutions are defined.</p>\n</li>\n</ol>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-7',
              id: '_experiences_7',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>A pre-mortem session combines the potential of negative thinking and creative thinking in a relaxed environment.\nStakeholders are rewarded for the identification of issues instead of being played down or marked as naysayers.\nThis leads to a huge amount of input from all kind of participants that would otherwise be quite regarding potential problems.\nThe viewpoint from the future frees participants from thinking just in short terms and provides.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-7',
              id: '_applicability_7',
              sectionType: 'section',
              index: 3,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '4',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Pre-mortem is a complementary method to <a href="#Stakeholder-Interview">interviews with stakeholders</a>,\nthat is very efficient due to the focused scenario and multi-perspective format.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'consequences-2',
              id: '_consequences_2',
              sectionType: 'section',
              index: 4,
              title: 'Consequences',
              titlePlain: 'Consequences',
              numeral: '5',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In the evaluate phase, the identified reasons can be a great starting point for further analysis.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Additionally, identified reasons from a pre-mortem session can be seen as potential risks and thus be included and tracked in the project&#8217;s risk management.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-8',
              id: '_related_patterns_8',
              sectionType: 'section',
              index: 5,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '6',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'references-4',
              id: '_references_4',
              sectionType: 'section',
              index: 6,
              title: 'References',
              titlePlain: 'References',
              numeral: '7',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Gary Klein - Performing a Project Premortem (<a href="https://hbr.org/2007/09/performing-a-project-premortem">Online article</a>)</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'questionnaire',
          id: 'Questionnaire',
          sectionType: 'section',
          index: 17,
          title: '<span class="pattern">Questionnaire</span>',
          titlePlain: 'Questionnaire',
          numeral: '18',
          children: [
            {
              type: 'section',
              slug: 'intent-18',
              id: '_intent_18',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Support interviews with guidance and hints for appropriate questions.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-17',
              id: '_description_17',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Prior to taking <a href="#Stakeholder-Interview">interviews with stakeholders</a>,\nformulate questions covering the topics or areas of information that:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>might be important for you</p>\n</li>\n<li>\n<p>your interview partners (== the stakeholders) have knowledge or experience in.</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>The questionnaire can be specific for a single interview or be a template for multiple interviews.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-8',
              id: '_experiences_8',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>I (Gernot Starke) used such questionnaires within several technical reviews and audits. They helped me to stay on track, cover a multitude of topics, even when I conducted several interviews consecutively.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>I usually printed out one copy of the questionnaire for every interview I had planned, so I could sketch notes - and always had the context of my notes already printed, saving a lot of note-taking effort.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-8',
              id: '_applicability_8',
              sectionType: 'section',
              index: 3,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '4',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Whenever you interview stakeholders, a thorough preparation will lead to better results, interviewers will be less likely to forget important topics.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'consequences-3',
              id: '_consequences_3',
              sectionType: 'section',
              index: 4,
              title: 'Consequences',
              titlePlain: 'Consequences',
              numeral: '5',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Questionnaires can</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>serve as checklists for interviewers</p>\n</li>\n<li>\n<p>aid in group-interviews to <em>stay on track</em></p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Especially when multiple interviewers conduct interviews, preparing a questionnaire can lead to more homogeneous questioning.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'also-known-as-5',
              id: '_also_known_as_5',
              sectionType: 'section',
              index: 5,
              title: 'Also Known As',
              titlePlain: 'Also Known As',
              numeral: '6',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Interview checklist</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-9',
              id: '_related_patterns_9',
              sectionType: 'section',
              index: 6,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '7',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Pre-Interview-Questionnaire">Section 2.3.16, &#8220;<span class="pattern">Pre Interview Questionnaire</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'requirements-analysis',
          id: 'Requirements-Analysis',
          sectionType: 'section',
          index: 18,
          title: '<span class="pattern">Requirements-Analysis</span>',
          titlePlain: 'Requirements-Analysis',
          numeral: '19',
          children: [
            {
              type: 'section',
              slug: 'intent-19',
              id: '_intent_19',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Analyze and document (current) requirements: required features and required constraints</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-18',
              id: '_description_18',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Under discussion!</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Look for and document:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>required features and functions</p>\n</li>\n<li>\n<p>required quality attributes (e.g. maintainability, security etc)</p>\n</li>\n<li>\n<p>constraints that need to be met</p>\n</li>\n<li>\n<p>organizational requirements or constraints</p>\n</li>\n<li>\n<p>hardware requirements or constraints</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
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
        },
        {
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
        },
        {
          type: 'section',
          slug: 'software-archeology',
          id: 'Software-Archeology',
          sectionType: 'section',
          index: 21,
          title: '<span class="pattern">Software Archeology</span>',
          titlePlain: 'Software Archeology',
          numeral: '22',
          children: [
            {
              type: 'section',
              slug: 'intent-22',
              id: '_intent_22',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Understand software by examining existing source code.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-21',
              id: '_description_21',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'olist',
                  content:
                    '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Make sure you have the complete code, scripts, frameworks and tools required to build the system.</p>\n</li>\n<li>\n<p>Ensure you have access rights to all required systems, at least to version control, database, participating servers etc.</p>\n</li>\n<li>\n<p>Ensure you can build the system from scratch (compile, load all dependencies, link or whatever steps are necessary).</p>\n</li>\n<li>\n<p>Practice <a href="#View-Based-Understanding">View-Based Understanding</a> by sketching notes or diagrams. Get an <em>aerial view</em>, a glimpse of the topmost, biggest structures in the code.</p>\n</li>\n<li>\n<p>Try to understand the <em>terminology</em> of the original authors by scanning code and searching for multiple occurrences. Start creating a <em>glossary</em>.</p>\n</li>\n<li>\n<p>Introduce <em>tracing</em> or <em>logging</em> statements. Aspect-oriented tools (like AspectJ) might be helpful.</p>\n</li>\n</ol>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experience-2',
              id: '_experience_2',
              sectionType: 'section',
              index: 2,
              title: 'Experience',
              titlePlain: 'Experience',
              numeral: '3',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>By examining the build scripts of the software project or the job definitions on a continuous integration server, you can build the software and the needed testing environment on your own.</p>\n</li>\n<li>\n<p>With simple tools like the <code>git shortlog -ns</code> command you can easily check parts of a software system for potential loss of knowledge based on the commits per developer.</p>\n</li>\n<li>\n<p>By using word clouds, you can quickly extract the most occurring terms in your source code and start creating a glossary for the most prominent words.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-10',
              id: '_applicability_10',
              sectionType: 'section',
              index: 3,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '4',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>You have to understand a system with:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>little or no current documentation.</p>\n</li>\n<li>\n<p>no knowledgeable technical stakeholders or development team available</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-11',
              id: '_related_patterns_11',
              sectionType: 'section',
              index: 4,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Code Reading</p>\n</li>\n<li>\n<p><a href="#Runtime-Artifact-Analysis">[Runtime-Artifact-Analysis]</a></p>\n</li>\n<li>\n<p><a href="#Structural-Analysis">[Structural-Analysis]</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'references-6',
              id: '_references_6',
              sectionType: 'section',
              index: 5,
              title: 'References',
              titlePlain: 'References',
              numeral: '6',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Hunt-Archeology">[Hunt-Archeology]</a>, pleasant introduction without adherence to any strict pattern template. Recommended reading.</p>\n</li>\n<li>\n<p><a href="#Moyer-Archeology">[Moyer-Archeology]</a>, short report.</p>\n</li>\n<li>\n<p><a href="#OORP">[OORP]</a>, page 53ff. , "Read all the Code in One Hour" suggest to read all source code in a short period of time to get a rough feeling about the software system.</p>\n</li>\n<li>\n<p><a href="#OORP">[OORP]</a>, page 97ff. , "Speculate about Design" suggest to create diagrams based on hypothesis and progressive refinement.</p>\n</li>\n<li>\n<p><a href="#Tornhill-XRay">[Tornhill-XRay]</a> shows many ways of using version control systems to recreate knowledge about software systems.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'stakeholder-analysis',
          id: 'Stakeholder-Analysis',
          sectionType: 'section',
          index: 22,
          title: '<span class="pattern">Stakeholder Analysis</span>',
          titlePlain: 'Stakeholder Analysis',
          numeral: '23',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Find out which people, roles, organizational units or organizations have interests in the <a href="#System">[System]</a>.</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'intent-23',
              id: '_intent_23',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Ensure that all concerned parties are adressed.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-22',
              id: '_description_22',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Get an initial list of stakeholders from project management.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Distinguish between <em>roles</em> and <em>individuals</em>. Some stakeholders need to be adressed individually, for <em>roles</em> it might be sufficient\nto identify any of several possible representatives.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Take the following list as examples of <em>roles</em>:</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p><span class="small">top-management, business-management, project-management, product-management, process-management, client, subject-matter-expert,\nbusiness-experts, business-development, enterprise-architect, IT-strategy, lead-architect, developer, tester, qa-representative,\nconfiguration-manager, release-manager, maintenance-team, external service provider, hardware-designer, rollout-manager, infrastructure-planner, infrastructure-provider, IT-administrator, DB-administrator, system-administrator, security- or safety-representative, end-user, hotline, service-technician, scrum-master, product-owner, business-controller, marketing, related-projects, public or government agency, authorities, standard-bodies, external service- or interface providers, industry- or business associations, trade-groups, competitors</span></p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Include those stakeholders in a simple table:</p>\n</div>'
                },
                {
                  type: 'table',
                  content:
                    '<table class="tableblock frame-all grid-all stretch">\n<caption class="title">Table 2. Stakeholder Table</caption>\n<colgroup>\n<col style="width: 15.7894%;">\n<col style="width: 21.0526%;">\n<col style="width: 21.0526%;">\n<col style="width: 21.0526%;">\n<col style="width: 21.0528%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top">Role/Name</th>\n<th class="tableblock halign-left valign-top">Description</th>\n<th class="tableblock halign-left valign-top">Intention</th>\n<th class="tableblock halign-left valign-top">Contribution</th>\n<th class="tableblock halign-left valign-top">Contact</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">name of person or role</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">responsibility for System</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">intention for/with/against System</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">what can/will/need they contribute to improvement of System, optionally or required</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">how to contact. For roles, name a primary contact person.</p></td>\n</tr>\n</tbody>\n</table>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experience-3',
              id: '_experience_3',
              sectionType: 'section',
              index: 2,
              title: 'Experience',
              titlePlain: 'Experience',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>There are often more stakeholder roles involved than it is obvious. Especially those people not directly involved in project- or development work sometimes are forgotten, e.g. standard bodies, external organizations, competitors, press or media, legal department,\nemployee organization.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-12',
              id: '_related_patterns_12',
              sectionType: 'section',
              index: 3,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '4',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Stakeholder-Specific-Communication">[Stakeholder-Specific-Communication]</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'references-7',
              id: '_references_7',
              sectionType: 'section',
              index: 4,
              title: 'References',
              titlePlain: 'References',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Section Stakeholders of <a href="https://github.com/arc42/arc42-template/blob/master/EN/asciidoc/src/01_introduction_and_goals.adoc">arc42-template, Introduction and Goals</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'stakeholder-interview',
          id: 'Stakeholder-Interview',
          sectionType: 'section',
          index: 23,
          title: '<span class="pattern">Stakeholder Interview</span>',
          titlePlain: 'Stakeholder Interview',
          numeral: '24',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Conduct personal interviews with key persons of the <a href="#System">[System]</a> or associated processes to identify, clarify or discuss potential issues and remedies.</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'intent-24',
              id: '_intent_24',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Learn from the people who know or care about the <a href="#System">[System]</a> and everything around it.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-23',
              id: '_description_23',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Conduct a <a href="#Stakeholder-Analysis">Section 2.3.23, &#8220;<span class="pattern">Stakeholder Analysis</span>&#8221;</a> first to find out whom to interview.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Apply a breadth-first strategy, speak with people from\ndifferent departments, roles, management-levels. Include at least business-people, IT- and business manager, end-user, developer, tester, customer-service, subject-matter-expert.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Plan the interview dates at least 5-10 days in advance, choose a quiet location, make sure nobody can overhear your interviews.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>If possible, send out a stakeholder- or role-specific <a href="#Pre-Interview-Questionnaire">Section 2.3.16, &#8220;<span class="pattern">Pre Interview Questionnaire</span>&#8221;</a> some days in advance.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Ensure a no-stress and no-fear situation. Never have top-managers or supervisors be present during interviews of their subordinates. Explain your positive intent and your role in the improvement project. Have water and cookies at hand. Make your interview partners feel comfortable and relaxed. Be honest and humble. <em>Never</em> ever promise something you cannot guarantee!</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Ask open questions.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Tape or protocoll questions and answers.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Some typical questions, e.g.:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>What is your role in this project?</p>\n</li>\n<li>\n<p>What is great about the <a href="#System">[System]</a>, the business and the processes?</p>\n</li>\n<li>\n<p>What worries you about the <a href="#System">[System]</a>? What are currently the 3 worst problems?</p>\n</li>\n<li>\n<p>What problems or risks do you see in (business/development/operation/usage&#8230;&#8203;)?</p>\n<div class="ulist">\n<ul>\n<li>\n<p>Can you show/demonstrate this problem?</p>\n</li>\n<li>\n<p>How can I reproduce this problem myself?</p>\n</li>\n<li>\n<p>When/where does it occur?</p>\n</li>\n<li>\n<p>What are the consequences of this problem? Who cares about this problem?</p>\n</li>\n<li>\n<p>How can we/you/somebody overcome this problem?</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>How are the processes working? What are the differences between <em>theory</em> and <em>practice</em>?</p>\n</li>\n<li>\n<p>If you had time, money and qualified people, what top-3 measures do you propose?</p>\n</li>\n<li>\n<p>Is there anyone you think we need to speak with who isn’t on our list?</p>\n</li>\n<li>\n<p>How would you like to be involved in the rest of this project, and what’s the best way to reach you?</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In case people told you about severe problems, try to experience/see those problems yourself.\nAt the end of the interview, give a short feedback and summarize important results to ensure you understood your interview partner correctly.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experience-4',
              id: '_experience_4',
              sectionType: 'section',
              index: 2,
              title: 'Experience',
              titlePlain: 'Experience',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Expect the usual difficulties in human communication: people will love or dislike your work, the interview or the intent of your endeavour.</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Some people will hold back information, either accidently or deliberately.</p>\n</li>\n<li>\n<p>You have to create the <em>big picture</em> yourself. Most people tend to focus on their specific issues.</p>\n</li>\n<li>\n<p>Double-check critical statements, as some people might exaggerate.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-13',
              id: '_related_patterns_13',
              sectionType: 'section',
              index: 3,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '4',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Stakeholder-Analysis">Section 2.3.23, &#8220;<span class="pattern">Stakeholder Analysis</span>&#8221;</a>, to identify important and authorative stakeholders.</p>\n</li>\n<li>\n<p><a href="#Stakeholder-Specific-Communication">[Stakeholder-Specific-Communication]</a></p>\n</li>\n<li>\n<p><a href="#Questionnaire">Section 2.3.18, &#8220;<span class="pattern">Questionnaire</span>&#8221;</a>, especially <a href="#Pre-Interview-Questionnaire">Section 2.3.16, &#8220;<span class="pattern">Pre Interview Questionnaire</span>&#8221;</a>.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'references-8',
              id: '_references_8',
              sectionType: 'section',
              index: 4,
              title: 'References',
              titlePlain: 'References',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="http://boxesandarrows.com/a-stakeholder-interview-checklist" class="bare">http://boxesandarrows.com/a-stakeholder-interview-checklist</a>, nice checklists for several kinds of stakeholder interviews</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'static-code-analysis',
          id: 'Static-Code-Analysis',
          sectionType: 'section',
          index: 24,
          title: '<span class="pattern">Static Code Analysis</span>',
          titlePlain: 'Static Code Analysis',
          numeral: '25',
          children: [
            {
              type: 'section',
              slug: 'intent-25',
              id: '_intent_25',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Static Analysis can serve two purposes:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Analyse source code to identify building blocks and their dependencies, determine complexity, coupling, cohesion and other structural properties.</p>\n</li>\n<li>\n<p>Detect certain types of bugs, dangerous coding patterns and bad coding style.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-24',
              id: '_description_24',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Use source code analysis tools to analyse static properties of the system&#8217;s source code,\ne.g. the following:</p>\n</div>'
                },
                {
                  type: 'dlist',
                  content:
                    '<div class="dlist">\n<dl>\n<dt class="hdlist1">Coupling and dependencies</dt>\n<dd>\n<p>Where do the building-blocks (e.g. classes, packages, modules, subsystems) of your system depend upon? What are the intra-system call- and communication relationships?</p>\n</dd>\n</dl>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-10',
              id: '_experiences_10',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Many projects (commercial and open-source) apply automated static code analysis as part of their build processes.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-11',
              id: '_applicability_11',
              sectionType: 'section',
              index: 3,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '4',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Apply static code analysis when the code base is medium sized or large and the appropriate tools are available.</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Many metrics and tools are tailored to object-oriented programming languages.</p>\n</li>\n<li>\n<p>Dynamically typed languages often have limited tool support.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'also-known-as-7',
              id: '_also_known_as_7',
              sectionType: 'section',
              index: 4,
              title: 'Also Known As',
              titlePlain: 'Also Known As',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Code quality analysis</p>\n</li>\n<li>\n<p>Software measurement and metrics</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-14',
              id: '_related_patterns_14',
              sectionType: 'section',
              index: 5,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '6',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Software-Archeology">Section 2.3.22, &#8220;<span class="pattern">Software Archeology</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Structural-Analysis">[Structural-Analysis]</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'references-9',
              id: '_references_9',
              sectionType: 'section',
              index: 6,
              title: 'References',
              titlePlain: 'References',
              numeral: '7',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="http://sonarqube.org">SonarQube</a>, LGPL-licenced open-source platform to analyze code.</p>\n</li>\n<li>\n<p><a href="http://clarkware.com/software/JDepend.html">JDepend</a>, open-source Java dependency checker.</p>\n</li>\n<li>\n<p><a href="http://www.hello2morrow.com/products/sonargraph">Sonargraph</a>, static code analyzer focused on software structure and architecture.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'take-what-they-mean',
          id: 'Take-What-They-Mean',
          sectionType: 'section',
          index: 25,
          title:
            '<span class="pattern">Take What They Mean, Not What They Say</span>',
          titlePlain: 'Take What They Mean, Not What They Say',
          numeral: '26',
          children: [
            {
              type: 'section',
              slug: 'intent-26',
              id: '_intent_26',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Find out the real meaning/intention of stakeholders</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-25',
              id: '_description_25',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Natural language has the risk that semantics on the sender&#8217;s side differs from semantics of the receiver: People simply misunderstand each other because the <em>meaning</em> of words differs between people.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Therefore: what people mean/want/need is sometimes not what they say. This is due either to</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>semantic differences on sender and receive sides,</p>\n</li>\n<li>\n<p>stressful or inconvenient communication situations (e.g. "the boss is present", communication under pressure),</p>\n</li>\n<li>\n<p>people are distracted or tired,</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>or other reasons.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>NLP (neurolingustic programming) practitioners recommend to <em>mirror</em> things you hear to your communication partners in your own words. This might facilitate understanding.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>When you have the slightest impression or indicator that your communication partner does not or can not communicate their real intention, you should\nclarify by giving explicit <a href="#Fast-Feedback">Section 5.11, &#8220;<span class="pattern">Fast Feedback</span>&#8221;</a>.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-12',
              id: '_applicability_12',
              sectionType: 'section',
              index: 2,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Apply this pattern whenever you communicate verbally to other people (aka stakeholders) e.g. in meetings, conferences, phone calls etc.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Especially when verbal communication differs from paralanguage or gestures, you should clarify what your communication partner really meant.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'consequences-5',
              id: '_consequences_5',
              sectionType: 'section',
              index: 3,
              title: 'Consequences',
              titlePlain: 'Consequences',
              numeral: '4',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Improved understanding between stakeholders.</p>\n</li>\n<li>\n<p><a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a>, instead of implicit ones.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-15',
              id: '_related_patterns_15',
              sectionType: 'section',
              index: 4,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Fast-Feedback">Section 5.11, &#8220;<span class="pattern">Fast Feedback</span>&#8221;</a>, as you give immediate feedback within ongoing communication.</p>\n</li>\n<li>\n<p>In every <a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a> you should apply this pattern.</p>\n</li>\n<li>\n<p><a href="#Stakeholder-Analysis">Section 2.3.23, &#8220;<span class="pattern">Stakeholder Analysis</span>&#8221;</a> to find out, who are the important stakeholders you should apply this pattern to.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'references-10',
              id: '_references_10',
              sectionType: 'section',
              index: 5,
              title: 'References',
              titlePlain: 'References',
              numeral: '6',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Special thanks to Phillip Ghadir (who is too humble to claim this discovery) for giving this pattern its name.</p>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'user-analysis',
          id: 'User-Analysis',
          sectionType: 'section',
          index: 26,
          title: '<span class="pattern">User-Analysis</span>',
          titlePlain: 'User-Analysis',
          numeral: '27',
          children: [
            {
              type: 'section',
              slug: 'intent-27',
              id: '_intent_27',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Get an overview of user categories or groups, their goals, requirements\nand expectations. Find out about issues users have with the system. Related to <a href="#Stakeholder-Analysis">Section 2.3.23, &#8220;<span class="pattern">Stakeholder Analysis</span>&#8221;</a>, <a href="#Context-Analysis">Section 2.3.3, &#8220;<span class="pattern">Context-Analysis</span>&#8221;</a> and <a href="#Requirements-Analysis">Section 2.3.19, &#8220;<span class="pattern">Requirements-Analysis</span>&#8221;</a>.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In contrast to the other analysis practices, user analysis can also include\nuseability, layout or design considerations.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-26',
              id: '_description_26',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: []
            }
          ]
        },
        {
          type: 'section',
          slug: 'view-based-understanding',
          id: 'View-Based-Understanding',
          sectionType: 'section',
          index: 27,
          title: '<span class="pattern">View Based Understanding</span>',
          titlePlain: 'View Based Understanding',
          numeral: '28',
          children: [
            {
              type: 'section',
              slug: 'intent-28',
              id: '_intent_28',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Understand the inner workings and internal (code) structure of of the systems. Document (and communicate) this via\narchitectural views, especially the building-block view.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-27',
              id: '_description_27',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Apply <a href="#arc42">[arc42]</a> views</p>\n</li>\n<li>\n<p>Apply <a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p>Interview technical stakeholders</p>\n</li>\n<li>\n<p>Start either from the</p>\n<div class="ulist">\n<ul>\n<li>\n<p>business context, mainly the external business interfaces</p>\n</li>\n<li>\n<p>technical context, the involved hardware and network structure</p>\n</li>\n<li>\n<p>known technology areas, i.e. products, programming languages or frameworks used</p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'image',
                  content:
                    '<div id="figure-view-based-understanding" class="imageblock">\n<div class="content">\n<img src="./images/view-based-understanding.jpg" alt="View based understanding">\n</div>\n<div class="title">Figure 12. Three main views (building block, runtime and deployment view)</div>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-13',
              id: '_applicability_13',
              sectionType: 'section',
              index: 2,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Use view-based-understanding when:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>System has a medium to large codebase</p>\n</li>\n<li>\n<p>Structural understanding of the code is limited: only few stakeholders can explain\nand reason about the code structure</p>\n</li>\n<li>\n<p>Documentation of the code structure is not existing, outdated or wrong</p>\n</li>\n<li>\n<p>Long-term maintenance and evolution of the system is required</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'consequences-6',
              id: '_consequences_6',
              sectionType: 'section',
              index: 3,
              title: 'Consequences',
              titlePlain: 'Consequences',
              numeral: '4',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Explicit overview of the system context with the external interfaces.</p>\n</li>\n<li>\n<p>Overview of the larger units of source-code (subsystems, high-level components) and their relationships.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'also-known-as-8',
              id: '_also_known_as_8',
              sectionType: 'section',
              index: 4,
              title: 'Also Known As',
              titlePlain: 'Also Known As',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>building block view (formerly known as logical view)</p>\n</li>\n<li>\n<p>high-level overview</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-16',
              id: '_related_patterns_16',
              sectionType: 'section',
              index: 5,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '6',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Docs-As-Code">Section 4.12.2, &#8220;<span class="pattern">Docs-As-Code</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Context-Analysis">Section 2.3.3, &#8220;<span class="pattern">Context-Analysis</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'references-11',
              id: '_references_11',
              sectionType: 'section',
              index: 6,
              title: 'References',
              titlePlain: 'References',
              numeral: '7',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#arc42">[arc42]</a></p>\n</li>\n<li>\n<p><a href="https://en.wikipedia.org/wiki/4%2B1_architectural_view_model">4+1 architectural view model</a> by Philippe Kruchten</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'bus-factor',
          id: 'Bus-Factor',
          sectionType: 'section',
          index: 28,
          title: '<span class="pattern">Bus factor</span>',
          titlePlain: 'Bus factor',
          numeral: '29',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>The bus factor is a measurement of the risk resulting from information and capabilities not being shared among team members, from the phrase "in case they get hit by a bus" (Wikipedia).</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'intent-29',
              id: '_intent_29',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Improve the structure of a system or its documentation so that the organisation is not at risk if certain key people leave.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-28',
              id: '_description_28',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In an ideal world, the whole team owns the all code and anybody can safely change anything. Often this is not the case, because</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>the (monolithic) system has already grown so large and complex that knowing all the details and concepts are too overwhelming for\na single person</p>\n</li>\n<li>\n<p>requirements of certain parts of the domain are always given to the same developer (by the management), because this\ndeveloper knows everything about the domain and can therefore implement these requirements very fast. Any newbie would need\na lot of time to achieve small things and the organisation takes on this organisational debt (they gain an advantage\nshort term, but it could be very problematic long term), because they don&#8217;t want to invest in distributing knowledge</p>\n</li>\n<li>\n<p>developers want to increase their employability. If only they know about a critical part of the system, they cannot be fired\nor put under pressure easily. Therefore they want to protect those parts and try hard to not let others work on the code.\nSometimes this even leads to deliberate complexity - complexity that has been introduced to obfuscate better understanding\nby other developers.</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Usually, a team has already a good grasp on which parts of the system certain developers own the knowledge almost completely.\nIt is vital to get some numbers through mining repository data, e.g. if you think that dev A is the only one knowing about\nsome security code, then you can analyze the commit history of the security package. Adam Tornhill gives a lot of ideas\nand also code snippets on how to do that in his book "Your Code As a Crime Scene". What he does is looking at the changed\nlines of a package over all the commits of a certain time frame. If a large amount (e.g. &gt;80%) of those commits is coming from a single\ndevelopers, you should act.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-11',
              id: '_experiences_11',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>It is often easy to spot and verify problematic knowledge islands, but getting rid of them (e.g. pair programming,\ndocumentation, automation) is really hard, because the developers living on that knowledge island usually want to\nprotect it.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-14',
              id: '_applicability_14',
              sectionType: 'section',
              index: 3,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '4',
              children: []
            },
            {
              type: 'section',
              slug: 'related-patterns-17',
              id: '_related_patterns_17',
              sectionType: 'section',
              index: 4,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '5',
              children: []
            }
          ]
        }
      ]
    }
  ]
}
