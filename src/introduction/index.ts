// This file is generated. Please don't modify it directly.

import { Section } from '../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const introduction: Section = {
  type: 'section',
  slug: 'introduction',
  id: '_introduction',
  sectionType: 'section',
  index: 1,
  title: 'Introduction',
  titlePlain: 'Introduction',
  numeral: '1',
  children: [
    {
      type: 'section',
      slug: 'overview',
      id: '_overview',
      sectionType: 'section',
      index: 0,
      title: 'Overview',
      titlePlain: 'Overview',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>aim42 organizes software improvement in three major\nphases (<a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a>, <a href="#Evaluate">Section 3, &#8220;Evaluate&#8221;</a> and <a href="#Improve">Section 4, &#8220;Improve&#8221;</a>),\nbuild around some <a href="#Crosscutting">crosscutting</a> activities.</p>\n</div>'
        },
        {
          type: 'image',
          content:
            '<div class="imageblock">\n<div class="content">\n<img src="./images/aim42-phases.png" alt="aim42 phases" width="50%">\n</div>\n<div class="title">Figure 1. Three Phases of aim42</div>\n</div>'
        },
        {
          type: 'table',
          content:
            '<table class="tableblock frame-all grid-all stretch">\n<colgroup>\n<col style="width: 33.3333%;">\n<col style="width: 33.3333%;">\n<col style="width: 33.3334%;">\n</colgroup>\n<tbody>\n<tr>\n<td class="tableblock halign-center valign-top" style="background-color: #fd0023;"><p class="tableblock"> <strong>Analyze</strong> <br>\nIdentify problems and improvement options</p></td>\n<td class="tableblock halign-center valign-top" style="background-color: #4ca9fc;"><p class="tableblock"><strong>Evaluate</strong><br>\nEstimate cost or value of issues and improvements</p></td>\n<td class="tableblock halign-center valign-top" style="background-color: #45db86;"><p class="tableblock"> <strong>Improve</strong><br>\nApply or perform selected improvements</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" style="background-color: #fd7387;"><p class="tableblock">Understand the system</p></td>\n<td class="tableblock halign-left valign-top" style="background-color: #8dc8fd;"><p class="tableblock">Estimate issue cost:\nHow grave is this problem?</p></td>\n<td class="tableblock halign-left valign-top" style="background-color: #A2DBCC;"><p class="tableblock">Improve architecture and code</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" style="background-color: #fd7387;"><p class="tableblock">Find issues and risks</p></td>\n<td class="tableblock halign-left valign-top" style="background-color: #8dc8fd;"><p class="tableblock">Estimate improvement cost:\nHow expensive is this change?</p></td>\n<td class="tableblock halign-left valign-top" style="background-color: #A2DBCC;"><p class="tableblock">Improve processes</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" style="background-color: #fd7387;"><p class="tableblock">Collect improvement options</p></td>\n<td class="tableblock halign-left valign-top" style="background-color: #8dc8fd;"><p class="tableblock">Usually "evaluation" means <em>estimation</em></p></td>\n<td class="tableblock halign-left valign-top" style="background-color: #A2DBCC;"><p class="tableblock">Improve technology</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" style="background-color: #fd7387;"><p class="tableblock">Interview stakeholders</p></td>\n<td class="tableblock halign-left valign-top" style="background-color: #8dc8fd;"><p class="tableblock">Estimate in intervalls</p></td>\n<td class="tableblock halign-left valign-top" style="background-color: #A2DBCC;"><p class="tableblock">Improve (technical) concepts</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" style="background-color: #fd7387;"><p class="tableblock">Analyze context</p></td>\n<td class="tableblock halign-left valign-top" style="background-color: #8dc8fd;"><p class="tableblock">Evaluate tradeoffs</p></td>\n<td class="tableblock halign-left valign-top" style="background-color: #A2DBCC;"></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" style="background-color: #fd7387;"><p class="tableblock">Analyze architecture and code</p></td>\n<td class="tableblock halign-left valign-top" style="background-color: #8dc8fd;"></td>\n<td class="tableblock halign-left valign-top" style="background-color: #A2DBCC;"></td>\n</tr>\n<tr>\n<td class="tableblock halign-center valign-top" colspan="3" style="background-color: #b5b6b4;"><p class="tableblock"><strong>Crosscutting</strong><br>\nManage issues, improvement and their relationships</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="3" style="background-color: #ececec;"><p class="tableblock">Manage issues (risks, problems, symptoms, root-causes)</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="3" style="background-color: #ececec;"><p class="tableblock">Manage improvements</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="3" style="background-color: #ececec;"><p class="tableblock">Manage the (m:n) relationships between issues and improvements</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="3" style="background-color: #ececec;"><p class="tableblock">Plan improvements, interleaved with to day-to-day activities</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="3" style="background-color: #ececec;"><p class="tableblock">Verify improvements (check if improvements resolved appropriate issues)</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="3"></td>\n</tr>\n</tbody>\n</table>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'why-is-software-being-changed',
      id: '_why_is_software_being_changed',
      sectionType: 'section',
      index: 1,
      title: 'Why is software being changed?',
      titlePlain: 'Why is software being changed?',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Software systems, at least most of those that are practically used, are changed all the\ntime. Features are added, modified or removed, user interaction is streamlined,\nperformance is tuned, changes to external interfaces or systems are reflected.\nThe reasons for changing a system can be grouped into four categories (see <a href="#ISO-14764">[ISO-14764]</a>):</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Corrective changes</p>\n<div class="ulist">\n<ul>\n<li>\n<p>fixing failures within the software system</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>Adaptive changes</p>\n<div class="ulist">\n<ul>\n<li>\n<p>data structures we rely on have been changed</p>\n</li>\n<li>\n<p>external interfaces have been changed - our system has to cope with these changes</p>\n</li>\n<li>\n<p>some technology, framework or product used within the system is not available any longer and needs to be replaced</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>Perfective changes</p>\n<div class="ulist">\n<ul>\n<li>\n<p>operational costs have to be reduced</p>\n</li>\n<li>\n<p>maintenance costs have to be reduced</p>\n</li>\n<li>\n<p>existing documentation does not reflect the truth (any more)</p>\n</li>\n<li>\n<p>resource consumption needs to be optimized</p>\n</li>\n<li>\n<p>system needs to work faster</p>\n</li>\n<li>\n<p>system needs to become more reliable or fault-tolerant</p>\n</li>\n<li>\n<p>people need new features</p>\n</li>\n<li>\n<p>system needs to be integrated with <em>new neighbour</em></p>\n</li>\n<li>\n<p>system needs to comply to new regulations or laws</p>\n</li>\n<li>\n<p>system needs new or improved user interface</p>\n</li>\n<li>\n<p>existing features have to be modified or removed</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>Preventive changes</p>\n<div class="ulist">\n<ul>\n<li>\n<p>technical debt has to be reduced</p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>You see - lots of good reasons :-)</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'why-does-software-need-improvement',
      id: '_why_does_software_need_improvement',
      sectionType: 'section',
      index: 2,
      title: 'Why does software need improvement?',
      titlePlain: 'Why does software need improvement?',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The most important reason is depicted in the following diagram: The cost-of-change\nof most software increases heavily over time&#8230;&#8203; making those people really unhappy that\nhave to pay for these changes (called maintenance, evolution, new-features or else).</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>An additional effect of long-term maintenance of software is the strong\n<em>decrease in understandability</em>: When a system matures it becomes more and more difficult to understand its inner workings, changes become increasingly risky and consequences of changes become difficult to foresee which can lead to quite blurry effort estimations.</p>\n</div>'
        },
        {
          type: 'image',
          content:
            '<div id="figure-real-situation" class="imageblock">\n<div class="content">\n<img src="./images/cost-of-change.jpg" alt="target situation" width="50%">\n</div>\n<div class="title">Figure 2. Reality: Maintaining software is too expensive</div>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>These negative effects share a few common root causes:</p>\n</div>'
        },
        {
          type: 'olist',
          content:
            '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>lack of <em>conceptual integrity</em></p>\n</li>\n<li>\n<p><em>internal disorder</em></p>\n</li>\n<li>\n<p>overly <em>complex internal structure</em>, either of source code or data</p>\n</li>\n<li>\n<p>overly <em>complex concepts</em> (cross-cutting solutions for fine-grained problems)</p>\n</li>\n<li>\n<p>overly complex or inappropriate internal processes</p>\n</li>\n<li>\n<p>inappropriate selection of <em>technology</em> (<em>frameworks, libraries or languages</em>)</p>\n</li>\n<li>\n<p>(you surely can find a few more&#8230;&#8203;)</p>\n</li>\n</ol>\n</div>'
        },
        {
          type: 'section',
          slug: 'long-term-goal',
          id: '_long_term_goal',
          sectionType: 'section',
          index: 0,
          title: 'Long-term Goal',
          titlePlain: 'Long-term Goal',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>In the beginning, though, everything was fine: nice coupling and cohesion, appropriate technologies, well written code, understandable structures and concepts (see figure <a href="#figure-target-situation">Figure 3, &#8220;Goal: Maintainable Software&#8221;</a>)</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>But as more and more changes, modifications, tweaks and supposed <em>optimizations</em> were performed under growing time and budget pressure, things got nasty. The maintainers piled up so called <em>technical debt</em> (we software folks call it quick-hacks, quick-and-dirty-fixes, detours or abbreviations). We&#8217;re quite sure you know what we&#8217;re talking about - we experienced it over and over again, it seems to be the normal situation, not the (bad) exception.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Investment in methodical and systematic software architecture improvement will have the following effect.</p>\n</div>'
            },
            {
              type: 'image',
              content:
                '<div id="figure-target-situation" class="imageblock">\n<div class="content">\n<img src="./images/target-situation.jpg" alt="target situation" width="50%">\n</div>\n<div class="title">Figure 3. Goal: Maintainable Software</div>\n</div>'
            }
          ]
        }
      ]
    },
    {
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
    },
    {
      type: 'section',
      slug: 'patterns-and-practices-provide-no-guarantee',
      id: '_patterns_and_practices_provide_no_guarantee',
      sectionType: 'section',
      index: 4,
      title: 'Patterns and Practices Provide No Guarantee',
      titlePlain: 'Patterns and Practices Provide No Guarantee',
      numeral: '5',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>We are <strong>very</strong> sure that aim42 can work for your system or your organization.\nBut (yes, there&#8217;s always a but) we cannot guarantee: Maybe your software is so\n<strong>extraordinary</strong>, so very special, that it needs other treatments.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Maybe your organization does not fit our prerequisites or is way more advanced\nthan we anticipated in our approach&#8230;&#8203;</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>You have to use all practices, patterns and approaches of aim42 at your own risk\nand responsibility. We (the aim42 contributor team) can by no means be held\nresponsible for any results of applying aim42.</p>\n</div>'
        }
      ]
    }
  ]
}
