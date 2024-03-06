// This file is generated. Please don't modify it directly.

import { Document } from './types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const aim42: Document = {
  type: 'document',
  title:
    '<span class="image"><img src="./images/aim42-logo.png" alt="aim 42"></span> Method Reference <a href="https://github.com/aim42/aim42"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>',
  titlePlain: 'Method Reference',
  children: [
    {
      type: 'section',
      slug: 'about-aim42',
      id: '_about_aim42',
      sectionType: 'section',
      index: 0,
      title: 'About aim42',
      titlePlain: 'About aim42',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph lead">\n<p>aim42 supports software evolution, maintenance, migration and improvement - in a systematic and pragmatic way.</p>\n</div>'
        },
        {
          type: 'admonition',
          content:
            '<div class="admonitionblock note">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Note</div>\n</td>\n<td class="content">\n<div class="paragraph">\n<p><a href="http://aim42.org">aim42</a> is a collection of practices and patterns to support software evolution, modernization, maintenance, migration and\nimprovement of software systems:</p>\n</div>\n<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>helps to optimize your software and reduce maintenance cost,</p>\n</li>\n<li>\n<p>identifies critical issues, technical debt and risks,</p>\n</li>\n<li>\n<p>supports both business and technical stakeholders,</p>\n</li>\n<li>\n<p>grounded in practice and experience, backed by serious research,</p>\n</li>\n<li>\n<p>free and open-source, <a href="#contributions">contributions</a> welcome.</p>\n</li>\n</ol>\n</div>\n<div class="paragraph">\n<p>aim42 seamlessly integrates with your day-to-day development work.</p>\n</div>\n</td>\n</tr>\n</table>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Authored by the aim42 community, lead by Dr. Gernot Starke &lt;<a href="mailto:gernot.starke@innoq.com">gernot.starke@innoq.com</a>&gt;</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p><span class="image"><img src="https://img.shields.io/badge/Version-{version}-green.svg" alt="{version}"></span>\n<span class="image"><img src="https://img.shields.io/badge/Date-{currentDate}-green.svg" alt="/{currentDate}"></span>\n<span class="image"><a class="image" href="https://travis-ci.org/aim42/aim42" target="_blank" rel="noopener"><img src="https://img.shields.io/travis/aim42/aim42/master.svg" alt="build-status:unknown"></a></span>\n<span class="image"><a class="image" href="https://github.com/aim42/aim42/issues" target="_blank" rel="noopener"><img src="https://img.shields.io/github/issues/aim42/aim42.svg" alt="nr-of-issues:unknown"></a></span>\n<span class="image"><a class="image" href="https://github.com/aim42/aim42" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/aim42/aim42.svg" alt="github-stars"></a></span>\n<span class="image"><a class="image" href="https://github.com/aim42/aim42" target="_blank" rel="noopener"><img src="https://img.shields.io/github/contributors/aim42/aim42.svg" alt="github-contributors"></a></span>\n<span class="image"><a class="image" href="https://twitter.com/gernotstarke" target="_blank" rel="noopener"><img src="https://img.shields.io/twitter/follow/gernotstarke.svg?style=social&amp;label=Followers" alt="Twitter follower button"></a></span></p>\n</div>'
        },
        {
          type: 'section',
          slug: 'about-this-documentation',
          id: '_about_this_documentation',
          sectionType: 'section',
          index: 0,
          title: 'About this documentation',
          titlePlain: 'About this documentation',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>This document serves as the <em>method reference</em> - it collects practices and patterns.\nPlease don&#8217;t expect a <em>user manual</em> or step-by-step guidebook here - we&#8217;re currently\nbusy working on the latter.</p>\n</div>'
            }
          ]
        }
      ]
    },
    {
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
    },
    {
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
                        '<div class="paragraph">\n<p>ATAM has been successfully applied by many organizations to a variety of systems. It is widely regarded as the most important systematic approach to qualitative system/architecture analysis <sup class="footnote">[<a id="_footnoteref_1" class="footnote" href="#_footnotedef_1" title="View footnote.">1</a>]</sup>.</p>\n</div>'
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
              title:
                '<span class="pattern">Capture Quality Requirements</span>',
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
              title:
                '<span class="pattern">Development-Process-Analysis</span>',
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
                      content:
                        '<div class="paragraph">\n<p>Look for:</p>\n</div>'
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
                      title:
                        'Software Organizations and their Effect on Systems',
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
                      title:
                        'Organizational Structure and its Effect on Quality',
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
    },
    {
      type: 'section',
      slug: 'evaluate',
      id: 'Evaluate',
      sectionType: 'section',
      index: 3,
      title: 'Evaluate',
      titlePlain: 'Evaluate',
      numeral: '3',
      children: [
        {
          type: 'image',
          content:
            '<div class="imageblock">\n<div class="content">\n<img src="./images/01-intro-and-overview/evaluate-phase.png" alt="evaluate-phase">\n</div>\n<div class="title">Figure 13. Evaluate-Phase</div>\n</div>'
        },
        {
          type: 'section',
          slug: 'goals-2',
          id: '_goals_2',
          sectionType: 'section',
          index: 0,
          title: 'Goals',
          titlePlain: 'Goals',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Make the issues, problems and risks found during the <a href="#Analyze">analysis</a>\ncomparable by estimating or measuring their <strong>value</strong>\n(that&#8217;s why we call this activity <strong>evaluate</strong>):</p>\n</div>'
            },
            {
              type: 'olist',
              content:
                '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>estimate <em>value</em> of problems, issues, risks and their remedies</p>\n</li>\n<li>\n<p>prioritize issues, their remedies and improvement measures</p>\n</li>\n</ol>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Usually, evaluation implies <em>estimation</em>, only in few cases can you measure\nor observe the evaluation subject and produce <em>hard facts</em>.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'estimation',
          id: '_estimation',
          sectionType: 'section',
          index: 1,
          title: 'Estimation',
          titlePlain: 'Estimation',
          numeral: '2',
          children: [
            {
              type: 'image',
              content:
                '<div id="figure-evaluation-concepts" class="imageblock">\n<div class="content">\n<img src="./images/evaluate-domain-conceptmap.png" alt="evaluate domain conceptmap">\n</div>\n<div class="title">Figure 14. Evaluation Concepts Domain Model</div>\n</div>'
            },
            {
              type: 'table',
              content:
                '<table class="tableblock frame-all grid-all" style="width: 80%;">\n<caption class="title">Table 3. Evaluation Domain Concepts</caption>\n<colgroup>\n<col style="width: 12.5%;">\n<col style="width: 50%;">\n<col style="width: 37.5%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top">Domain concept</th>\n<th class="tableblock halign-left valign-top">Explanation</th>\n<th class="tableblock halign-left valign-top">Example</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Estimation</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">an <em>approximation</em> of any subject\n  (here: issues, problems or remedies), which is needed because\n\tfacts or real observations are not available or possible.</p></td>\n<td class="tableblock halign-left valign-top"><div class="content"></div></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Subject</p></td>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph">\n<p>a recurring problem in the <a href="#System">[System]</a> or\nassociated processes</p>\n</div></div></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Parameter</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">an important element or foundation of the\nestimation.</p></td>\n<td class="tableblock halign-left valign-top"><div class="content"><div class="ulist">\n<ul>\n<li>\n<p>number of developers on the system</p>\n</li>\n<li>\n<p>Lines-of-Code (LOC)</p>\n</li>\n</ul>\n</div></div></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Assumption</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">a fixed setting for any parameter.\n  See <a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a></p></td>\n<td class="tableblock halign-left valign-top"><div class="content"></div></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Observation</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">measure, count, calculate gather real data\nfor parameters</p></td>\n<td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph">\n<p>if every developer is\nconcerned by the problem, we count their number.</p>\n</div></div></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Interval</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">see <a href="#Estimate-In-Interval">Section 3.3.2, &#8220;<span class="pattern">Estimate in Interval</span>&#8221;</a></p></td>\n<td class="tableblock halign-left valign-top"><div class="content"><div class="paragraph">\n<p>between 15% and 25%</p>\n</div></div></td>\n</tr>\n</tbody>\n</table>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'pattern-and-practices-for-evaluation',
          id: '_pattern_and_practices_for_evaluation',
          sectionType: 'section',
          index: 2,
          title: 'Pattern and Practices for Evaluation',
          titlePlain: 'Pattern and Practices for Evaluation',
          numeral: '3',
          children: [
            {
              type: 'pass',
              content:
                '<map name="EvaluationPractices">\n\t<area shape=rect coords="14,157,118,204" href="#Explicit-Assumption">\n\t<area shape=rect coords="3,8,75,57" href="#Estimate-Feature-Value">\n\t<area shape=rect coords="346,3,425,62" href="#Estimate-In-Interval">\n\t<area shape=rect coords="533,3,653,62" href="#Estimate-Improvement-Cost">\n\t<area shape=rect coords="147,3,251,62" href="#Estimate-Issue-Cost">\n\t<area shape=rect coords="482,150,618,199" href="#Collect-Opportunities-For-Improvement">\n\t<area shape=rect coords="200,145,297,193" href="#Collect-Issues">\n</map>\n<img border=0 src="images/evaluate-patterns-conceptmap.png" usemap="#EvaluationPractices", alt="concept map of the evaluate patterns">'
            },
            {
              type: 'section',
              slug: 'estimate-feature-value',
              id: 'Estimate-Feature-Value',
              sectionType: 'section',
              index: 0,
              title: '<span class="pattern">Estimate Feature Value</span>',
              titlePlain: 'Estimate Feature Value',
              numeral: '1',
              children: [
                {
                  type: 'section',
                  slug: 'intent-30',
                  id: '_intent_30',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Estimate the (monetary) value of a given feature, so you can compare features of the system with each other.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-29',
                  id: '_description_29',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Involve business or management stakeholders, as they often have a clear notion of business value.</p>\n</li>\n<li>\n<p>If you cannot determine real numbers available, use <a href="#Explicit-Assumption">explicit assumptions</a></p>\n</li>\n<li>\n<p>Instead of numbers, you might use categories or orders-of-magnitude (like small, medium, large). You should prefer numbers, though!</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'estimate-in-interval',
              id: 'Estimate-In-Interval',
              sectionType: 'section',
              index: 1,
              title: '<span class="pattern">Estimate in Interval</span>',
              titlePlain: 'Estimate in Interval',
              numeral: '2',
              children: [
                {
                  type: 'section',
                  slug: 'intent-31',
                  id: '_intent_31',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Estimation is a guess, not a <strong>measurement</strong>.\nEstimates are uncertain, otherwise, they would be observations (or measurements!).</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-30',
                  id: '_description_30',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Therefore, estimate in intervals, giving a lower and upper bound to your estimate. The difference between the two shows your confidence in the estimate. If this difference is relatively small, it shows high confidence.</p>\n</div>'
                    },
                    {
                      type: 'admonition',
                      content:
                        '<div class="admonitionblock caution">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Caution</div>\n</td>\n<td class="content">\nBe aware of the anchoring effect <a href="http://en.wikipedia.org/wiki/Anchoring_effect" class="bare">http://en.wikipedia.org/wiki/Anchoring_effect</a>\n</td>\n</tr>\n</table>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Good estimates ensure that the estimated value will be contained in the interval with a very high probability.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Estimates often rely on assumptions - which should be <a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a>.</p>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'estimate-issue-cost',
              id: 'Estimate-Issue-Cost',
              sectionType: 'section',
              index: 2,
              title: '<span class="pattern">Estimate Issue Cost</span>',
              titlePlain: 'Estimate Issue Cost',
              numeral: '3',
              children: [
                {
                  type: 'section',
                  slug: 'intent-32',
                  id: '_intent_32',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Find out how much a given issue costs in units of money or effort in a period or for every occurrence.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-31',
                  id: '_description_31',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p><em>Finding out</em> the cost of an issue usually requires estimation or guessing, so there are\nuncertainty and probability involved.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>For example, if a server needs to be rebooted once every 24hrs and an operator needs 30 minutes to perform this reboot (and corresponding activities), then you can approximate the cost of this problem for, let&#8217;s say, a month:</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>5 workdays × 4 weeks × 30 min = 10hrs of operator&#8217;s effort.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>If you multiply with (an approximated or averaged) wage, you get <em>problem cost</em>.</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>If possible, try to <em>measure</em> or observe instead of guessing or estimating.</p>\n</li>\n<li>\n<p>If you cannot determine real numbers, and you need to guess, estimate or approximate, use <a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a>.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'related-practices-4',
                  id: '_related_practices_4',
                  sectionType: 'section',
                  index: 2,
                  title: 'Related Practices',
                  titlePlain: 'Related Practices',
                  numeral: '3',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Estimate-In-Interval">Section 3.3.2, &#8220;<span class="pattern">Estimate in Interval</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'estimate-improvement-cost',
              id: 'Estimate-Improvement-Cost',
              sectionType: 'section',
              index: 3,
              title: '<span class="pattern">Estimate Improvement Cost</span>',
              titlePlain: 'Estimate Improvement Cost',
              numeral: '4',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>See: "Software Estimation. The Black Art Demystified (Steve McConnell)"</p>\n</div>'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      slug: 'improve',
      id: 'Improve',
      sectionType: 'section',
      index: 4,
      title: 'Improve',
      titlePlain: 'Improve',
      numeral: '4',
      children: [
        {
          type: 'image',
          content:
            '<div class="imageblock">\n<div class="content">\n<img src="./images/01-intro-and-overview/improve-phase.png" alt="improve-phase">\n</div>\n<div class="title">Figure 15. Improve-Phase</div>\n</div>'
        },
        {
          type: 'section',
          slug: 'goals-3',
          id: '_goals_3',
          sectionType: 'section',
          index: 0,
          title: 'Goals',
          titlePlain: 'Goals',
          numeral: '1',
          children: [
            {
              type: 'olist',
              content:
                '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Execute and coordinate the improvement activities to eliminate problems and issues found during <a href="#Analyze">analysis</a>. There is a whole <a href="#improve-practices">bunch of practices</a> devoted to this step, and we described the different  <a href="#improve-approaches-overview">approaches</a> you can take to run the improvements.</p>\n</li>\n<li>\n<p>Apply selected opportunities for improvement</p>\n<div class="ulist">\n<ul>\n<li>\n<p>Change code, structures, concepts or processes to achieve better software,</p>\n</li>\n<li>\n<p>Reduce costs and/or technical debt,</p>\n</li>\n<li>\n<p>Eliminate all kinds of issues,</p>\n</li>\n<li>\n<p>Optimize quality attributes (like performance, maintainability, security),</p>\n</li>\n<li>\n<p>Optimize operation and administration processes, thereby reducing effort and cost.</p>\n</li>\n</ul>\n</div>\n</li>\n</ol>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'structure-of-the-improvement-phase',
          id: '_structure_of_the_improvement_phase',
          sectionType: 'section',
          index: 1,
          title: 'Structure of the Improvement Phase',
          titlePlain: 'Structure of the Improvement Phase',
          numeral: '2',
          children: [
            {
              type: 'image',
              content:
                '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-fundamentals-approaches-practices.png" alt="improve-concepts">\n</div>\n<div class="title">Figure 16. Overview of Improvement Concepts</div>\n</div>'
            },
            {
              type: 'dlist',
              content:
                '<div class="hdlist">\n<table>\n<tr>\n<td class="hdlist1">\n<a href="#improve-fundamentals">Fundamentals</a>\n</td>\n<td class="hdlist2">\n<p>Some principles which you should consider\nwhatever steps you take on your road to improvement.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\n<a href="#improve-approaches-overview">Approaches</a>\n</td>\n<td class="hdlist2">\n<p>Overall (strategic, long-term) decisions how to\ntackle improvement, structured in several categories. Start with the <a href="#improve-approaches-overview">overview</a>\nor jump right to the <a href="#improve-approaches-details">details</a>.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\n<a href="#improve-practices">Practices</a>\n</td>\n<td class="hdlist2">\n<p>fine-grained practices or patterns, structured in\nseveral categories. Start with the <a href="#improve-practices-overview">overview</a> or jump\nright to the <a href="#improve-approaches-details">details</a>.</p>\n</td>\n</tr>\n</table>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>We&#8217;ll cover these topics in a top-down manner, starting with a brief overview of the respective\ncategories available for approaches and practices.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'improve-fundamentals',
          id: 'improve-fundamentals',
          sectionType: 'section',
          index: 2,
          title: 'Fundamentals',
          titlePlain: 'Fundamentals',
          numeral: '3',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>For improvement we take a number of fundamental principles for granted,\ndepicted in <a href="#improve-fundamentals">Section 4.3, &#8220;Fundamentals&#8221;</a>.</p>\n</div>'
            },
            {
              type: 'image',
              content:
                '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-fundamentals.png" alt="improve fundamentals">\n</div>\n<div class="title">Figure 17. Improvement Fundamentals - Overview</div>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>These fundamental principles surely belong to software engineering good practices -\nbut we consider them indispensable for improvement projects.</p>\n</div>'
            },
            {
              type: 'dlist',
              content:
                '<div class="hdlist">\n<table>\n<tr>\n<td class="hdlist1">\n<span class="pattern">Fast-Feedback</span>\n</td>\n<td class="hdlist2">\n<p>Get feedback to your actions and changes as early as possible, so you can adjust as quickly as adequate.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\n<span class="pattern">Improve Iteratively</span>\n</td>\n<td class="hdlist2">\n<p>Improve in (potentially small) iterations and/or increments, so\nthat change does not disturb or negatively affect the system, its associated\nprocesses and organization. Iterations are the prerequisite for our whole <em>phased improvement</em>.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\n<span class="pattern">Prototype-Improvement</span>\n</td>\n<td class="hdlist2">\n<p>Verify the viability and effectiveness of improvements,\nusually in smaller scales with reasonable risks.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\n<span class="pattern">Verify-After-Every-Change</span>\n</td>\n<td class="hdlist2">\n<p>Always make sure that changes,\neven minor ones, leave your system intact. (The awesome Jerry Weinberg has written\nup several <a href="http://secretsofconsulting.blogspot.de/2015/01/some-very-expensive-software-failures.html">examples of such failures</a>).</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\n<span class="pattern">Reduce Complexity</span>\n</td>\n<td class="hdlist2">\n<p>Simpler solutions are most often easier to comprehend,\nmaintain and operate. Therefore always strive for simplicity and the reduction\nof accidental, unnecessary complexity.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\n<span class="pattern">Explicit Assumption</span>\n</td>\n<td class="hdlist2">\n<p>Compensate missing facts (especially requirements, goals, estimates, opinions) by explicit (written) assumptions about those facts. See <a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a>.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\n<span class="pattern">Group Improvement Actions</span>\n</td>\n<td class="hdlist2">\n<p>Group related actions, so that they refer\nto similar entities and potential synergies are utilized.</p>\n</td>\n</tr>\n</table>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'improve-approaches-overview',
          id: 'improve-approaches-overview',
          sectionType: 'section',
          index: 3,
          title: 'Improvement Approaches (Overview)',
          titlePlain: 'Improvement Approaches (Overview)',
          numeral: '4',
          children: [
            {
              type: 'image',
              content:
                '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches-categories.png" alt="improve approaches categories">\n</div>\n<div class="title">Figure 18. Categories of Improvement Approaches</div>\n</div>'
            },
            {
              type: 'dlist',
              content:
                '<div class="hdlist">\n<table>\n<tr>\n<td class="hdlist1">\nData Migration\n</td>\n<td class="hdlist2">\n<p>Keep your (valuable) data, and toss (or rewrite or otherwise change) your code. Oftentimes\ncombined with approaches from the categories <em>rewrite</em> or <em>restructure</em>.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nRewrite\n</td>\n<td class="hdlist2">\n<p>Your system is <em>broken beyond repair</em> and you need to completely replace it by a new one.\nRewrite approaches give you some ideas how and if that might work (spoiler: we fear that <span class="pattern">Big-Bang</span> won&#8217;t work&#8230;&#8203;)</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nRestructure\n</td>\n<td class="hdlist2">\n<p>Improve your system by restructuring your code <em>in-the-large</em>. Might involve extraction of\ncertain functionalities, splitting your system, improving the modularization or strangulating\ncertain (bad) parts of the system (and, of course, replacing those by better solutions).</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nImprove Modularization\n</td>\n<td class="hdlist2">\n<p>Subcategory of <em>restructure</em>: improve responsibilities within the system, improving the boundaries between components, improving interfaces and similar operations.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nBrainsize\n</td>\n<td class="hdlist2">\n<p>Evidence from neuroscience suggests our working memory has a capacity of about four items <sup class="footnote">[<a id="_footnoteref_2" class="footnote" href="#_footnotedef_2" title="View footnote.">2</a>]</sup>. That&#8217;s why smaller solutions tend to be more maintainable, as the cognitive load on the developers working memory is reduced. These "brainsizing" strategies can be used to reduce the amount of <em>stuff</em>, e.g. by splitting your system up, extracting certain parts into abstractions, or other ways to reduce LOC or other complexity metrics. Terms like <em>microservices</em> fall into this category.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nImprove-Domain-Focus\n</td>\n<td class="hdlist2">\n<p>Subcategory of <em>restructure</em>:Clear separation of domain-related code from purely technical aspects has long been a useful design heuristic - but is still often violated.\nIn addition, aspects belonging to similar areas of the domain should be implemented within the same building-blocks (in Domain-Drive Design terminology called <em>Bounded Context</em>).</p>\n</td>\n</tr>\n</table>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>You find further information on the  <a href="#improve-approaches-details">detailed approaches here</a>.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'improve-practices-overview',
          id: 'improve-practices-overview',
          sectionType: 'section',
          index: 4,
          title: 'Improvement Practices (Overview)',
          titlePlain: 'Improvement Practices (Overview)',
          numeral: '5',
          children: [
            {
              type: 'image',
              content:
                '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-practice-categories.png" alt="improve practice categories">\n</div>\n<div class="title">Figure 19. Categories of Improvement Practices</div>\n</div>'
            },
            {
              type: 'dlist',
              content:
                '<div class="hdlist">\n<table>\n<tr>\n<td class="hdlist1">\nImprove Processes and Organization\n</td>\n<td class="hdlist2">\n<p>Sometimes your issues originate in process or organizational root causes,\nmeaning your development, rollout or operations processes are less efficient\nthan they should be. This category adresses such problems.\nFor details see <a href="#improve-processes">Section 4.9, &#8220;Practices to Improve Processes&#8221;</a>.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nImprove Architecture and Code Structure\n</td>\n<td class="hdlist2">\n<p>All aspects of sourcecode may be subject to improvement - style, structure,\ndependencies, conventions, naming and the like. Furthermore, structure\n<em>in the large</em> (modules, components, interfaces) or crosscutting and technical\nconcepts belong to this area of improvement.\nFor details see <a href="#improve-architecture">Section 4.10, &#8220;Improve Architecture and Code Structure&#8221;</a>.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nImprove Technical Infrastructure\n</td>\n<td class="hdlist2">\n<p>Technical infrastructure encompasses both underlying hardware and software.\nFor details see <a href="#improve-technical-infrastructure">Section 4.11, &#8220;Practices to Improve Technical Infrastructure&#8221;</a>.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nImprove Analyzability and Evaluatability\n</td>\n<td class="hdlist2">\n<p>Make the system easier to analyze and understand, e.g. by improving logging,\ntracing or by introducing clearer structures.\nEnable or facilitate evaluation (e.g. of certain issues) by creating, collecting\nand managing certain numbers (<em>metrics</em>),\neither in development-, deploy- or runtime.\nFor details see <a href="#improve-analyzability">Section 4.12, &#8220;Practices to Improve Analyzability and Evaluability&#8221;</a>.</p>\n</td>\n</tr>\n</table>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'approaches-practices-and-regular-development',
          id: '_approaches_practices_and_regular_development',
          sectionType: 'section',
          index: 5,
          title: 'Approaches, Practices and Regular Development',
          titlePlain: 'Approaches, Practices and Regular Development',
          numeral: '6',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>In regular development (sometimes known as <em>daily business</em>) you will most likely intertwine\nyour approach(es) with numerous practices - as depicted in\n<a href="#fig-relation-of-approaches-practices">Figure 20, &#8220;Integrating improvement approaches and practices with regular development&#8221;</a>.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>In both long- and short-term planning (yes - even in highly agile and iterative\n  development models you&#8217;ll have such planning) you need to balance the following\n  often conflicting goals:</p>\n</div>'
            },
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>short-term profitability by creating business value by delivering\nfeatures or fixes to production.</p>\n</li>\n<li>\n<p>long-term maintainability of the system by improving inner quality,\nimproving code structure, technology choices and the like.</p>\n</li>\n</ul>\n</div>'
            },
            {
              type: 'image',
              content:
                '<div id="fig-relation-of-approaches-practices" class="imageblock">\n<div class="content">\n<img src="./images/integrate-improve-with-daily-business.png" alt="integrate improve with daily business">\n</div>\n<div class="title">Figure 20. Integrating improvement approaches and practices with regular development</div>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'improve-approaches-details',
          id: 'improve-approaches-details',
          sectionType: 'section',
          index: 6,
          title: 'Improvement Approaches (Details)',
          titlePlain: 'Improvement Approaches (Details)',
          numeral: '7',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>One of the central decisions involves your long-term improvement-approach,\nthe overall, long-range or <strong>strategic</strong> decision how you want to improve your system.</p>\n</div>'
            },
            {
              type: 'image',
              content:
                '<div id="fig-improve-approaches" class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches-all.png" alt="improve approaches all">\n</div>\n<div class="title">Figure 21. Improvement Approaches</div>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>TODO: Describe Approaches</p>\n</div>'
            },
            {
              type: 'dlist',
              content:
                '<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Change-By-Split</span></dt>\n<dd>\n<p>Split up the original system into (not neccessarily distinct) parts.\nClean-up those parts individually, and then evolve the parts independently.</p>\n</dd>\n<dt class="hdlist1"><span class="pattern">Keep-Data-Toss-Code</span></dt>\n<dd>\n<p>As value sometimes resides in data, keep data intact and replace the functional/service/process part of a system.</p>\n</dd>\n<dt class="hdlist1"><span class="pattern">Frontend-Switch</span></dt>\n<dd>\n<p>Start creating new backend parts. Frontend routes some requests to those new backend parts, others still to the existing ones. Gradually enhancing the new backend parts, frontend routes more and more requests to new backend.</p>\n</dd>\n<dt class="hdlist1"><span class="pattern">Big-Bang</span></dt>\n<dd>\n<p>Keep the existing system for a limited time, apply only critical bugfixes. In parallel, build a replacement system. Replace old by new at predefined time.</p>\n</dd>\n<dt class="hdlist1"><span class="pattern">Chicken-Little</span></dt>\n<dd>\n<p>Incrementally (11 steps) build a replacement system. You can choose between Database-First, Database-Last and Composite-Database Approach.</p>\n</dd>\n<dt class="hdlist1"><span class="pattern">Database-First</span></dt>\n<dd>\n<p>Do a Big-Bang migration of the database, incrementally implement new applications and interfaces and connect the legacy system to the new database by forward gateways.</p>\n</dd>\n<dt class="hdlist1"><span class="pattern">Database-Last</span></dt>\n<dd>\n<p>Keep the existing database for a limited time, incrementally implement new applications and interfaces and connect them to the legacy database by reverse gateways.</p>\n</dd>\n<dt class="hdlist1"><span class="pattern">Composite-Database</span></dt>\n<dd>\n<p>Combination of Database-First and Database-Last. Beside a forward- and reverse-gateway, there is a need for a transaction-coordinator.</p>\n</dd>\n<dt class="hdlist1"><span class="pattern">Butterfly-Methodology</span></dt>\n<dd>\n<p>Data-Migration Method without the need for gateways. Enables zero-downtime migrations by working with temporary data stores.</p>\n</dd>\n<dt class="hdlist1"><span class="pattern">Evolution</span></dt>\n<dd>\n<p>This approach has been extensively practiced by a Swiss Bank and published\nas a  <a href="http://www.amazon.de/Managed-Evolution-Strategy-Information-Systems/dp/3642016324">book</a>.\nUnderlying idea is to refactor those parts of the system(s) which are actually to be changed, especially to move all interfaces to new service standard and replace all legacy technologies and other couplings (via DB etc). Over time services should emerge that can be moved to a new platform altogether (from Mainframe to Java).</p>\n</dd>\n</dl>\n</div>'
            },
            {
              type: 'section',
              slug: 'big-bang-approach',
              id: 'big-bang-approach',
              sectionType: 'section',
              index: 0,
              title: '<span class="pattern">Big Bang Approach</span>',
              titlePlain: 'Big Bang Approach',
              numeral: '1',
              children: [
                {
                  type: 'section',
                  slug: 'intent-33',
                  id: '_intent_33',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'description-32',
                  id: '_description_32',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>A big bang rewrite replaces an old system with a new system with one big bang deployment. The new system is developed from scratch.\nThe opposite approach would be an incremental replacement, where individual parts get replaced step by step.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-12',
                  id: '_experiences_12',
                  sectionType: 'section',
                  index: 2,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '3',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Positive:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Basecamp <a href="https://signalvnoise.com/posts/3856-the-big-rewrite-revisited">rewrote</a> their product successfully within a year.\n(Note: they kept the old and new system running in parallel and customers could decide to switch or not, therefore this\nis not a hard big bang)</p>\n</li>\n<li>\n<p>An insurance company replaced a small system within 4 month by big bang</p>\n</li>\n<li>\n<p>A multiple years running big bang replacement project of a governmental application has been successfully delivered in\ntime and budget (but they also had no market pressure for new features)</p>\n</li>\n</ul>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Negative:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Chad Fowler <a href="http://chadfowler.com/2006/12/27/the-big-rewrite.html">wrote</a> about all the failures he was involved (and the reasons)</p>\n</li>\n<li>\n<p>Netscape&#8217;s market share dropped to almost zero (and stayed there), because of their <a href="http://www.joelonsoftware.com/articles/fog0000000069.html">rewrite</a></p>\n</li>\n<li>\n<p>Borland and Microsoft wasted a lot of money with trying to rewrite Quattro Pro and Word (which eventually failed)</p>\n</li>\n<li>\n<p>Logistics company lost 4 years and rewrote the system twice until they could proceed with new features</p>\n</li>\n<li>\n<p>A data aggregation company estimated the rewrite to take 15 month, but it took 27 month and twice as much developers as\noriginally estimated.</p>\n</li>\n<li>\n<p>A telecommunication company failed twice to replace two of their old invoicing systems with a big bang approach due to incomplete\nrequirements and an unrealistic time schedule. This led to a bad designed and buggy new system, which had both had to be\nrolled back from production.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'risks',
                  id: '_risks',
                  sectionType: 'section',
                  index: 3,
                  title: 'Risks',
                  titlePlain: 'Risks',
                  numeral: '4',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Big bang replacement of medium and large systems have many risks, which shouldn&#8217;t be taken lightheaded. You need to make\nsure that you understand and communicate the risks and that risk, cost and benefit are worth it.</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Software as a spec: Way too often, a big bang rewrite project\nhas no proper requirements engineering. "Make it do what it already does." is an often heard answer on how a feature should\nbe implemented. As Chad Fowler points out in his <a href="http://chadfowler.com/2006/12/28/software-as-spec.html">blog</a>, this has two major drawbacks: 1) if you are not familiar with the\nold system you don&#8217;t know what questions to ask and 2) if you are familiar you certainly don&#8217;t remember every little\ncorner (especially when you need to estimate effort this will go horribly wrong).<br>\nTherefore you need to reverse engineer the code base to write proper requirements. Since the software is in such a bad\ncondition that it needs to be rewritten you can be sure that this is not an easy task.</p>\n</li>\n<li>\n<p>Your business will certainly not like the big bang rewrite, because it takes minimum one year, often two or three to\nfully rewrite a system. This means that your business won&#8217;t get any new features during that time and that could be a\nthreat to the business itself. Governmental agencies might be fine with this, but the rest certainly not.\n<a href="http://www.joelonsoftware.com/articles/fog0000000069.html">Ask Netscape</a>.</p>\n</li>\n<li>\n<p>In many cases, the business is asking for new features for the old system, while the new system is still under development.\nYou will then chase a moving target, which can be a long and painful journey. The old systems has certainly some dark\ncorners and a few stakeholders want to get rid of them. This is what Chad Fowler calls a <a href="http://chadfowler.com/2006/12/30/the-wish-list.html">wish list</a>.\nNow you&#8217;re at a point where you have to clearly write down the requirements, because the two systems go into two different\ndirections.</p>\n</li>\n<li>\n<p>The old system usually collected a lot of bad Technical Debt (that&#8217;s often the main reason we rewrite). In the beginning of the\nrewrite everything is good, the code is clean. But because you chase a moving target, need to implement new\nfeatures or things that are just harder as expected, you are running out of time, which introduces a lot of bad Technical Debt\nin the new system. You replaced a badly implemented system with old technology with a badly implemented system using new technology.</p>\n</li>\n<li>\n<p>The organisation creates often a culture of the "tiger team": the people who work on the new system get bragging rights.\nExpectations grow and are hard to manage.</p>\n</li>\n<li>\n<p>The "Big Bang Day". Eventually you have to deploy the new system and migrate the data. This happens often big bang and\nis therefore a major risk.</p>\n</li>\n<li>\n<p>As Joel Spolsky <a href="http://www.joelonsoftware.com/articles/fog0000000069.html">put it</a>: "It&#8217;s important to remember that when\nyou start from scratch there is absolutely no reason to believe that you are going to do a better job than you did the\nfirst time. First of all, you probably don&#8217;t even have the same programming team that worked on version one, so you don&#8217;t\nactually have "more experience". You&#8217;re just going to make most of the old mistakes again and introduce some new problems\nthat weren&#8217;t in the original version."</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-15',
                  id: '_applicability_15',
                  sectionType: 'section',
                  index: 4,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '5',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>You should consider a rewrite (not necessarily big bang) for the following reasons:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Your application is totally unmaintainable, but it needs new features, because the market demands them. And:</p>\n<div class="ulist">\n<ul>\n<li>\n<p>Your application is rather small and can be rewritten in less than 3-6 month if you are in a domain where your\ncustomers don&#8217;t accept a longer time without new features</p>\n</li>\n<li>\n<p>Your application can be rewritten in less than 6-12 month if you are in a domain where your customers\ntotally accept a longer time without new features (or have no choice, e.g. internal applications or government)</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>You lost the source code and you have no other choice</p>\n</li>\n<li>\n<p>Your platform is so old, that you need to buy hardware at eBay, because the current hardware is deprecated.</p>\n</li>\n<li>\n<p>Your codebase is still pretty good, but you want your application to do things in a radical new way and incremental\nchange doesn&#8217;t help you with that. You don&#8217;t want to replace the current system with a new one and keep the requirements\nas they are right now, but you want to build a better system for your users as well (= your main motivation).</p>\n</li>\n<li>\n<p>Quality developers with experience in the technology you need are too hard to find</p>\n</li>\n<li>\n<p>You have deprecated central software frameworks or hardware (It can&#8217;t be upgraded to support newer platforms/features)</p>\n</li>\n<li>\n<p>There is new technology out there making things possible, which weren&#8217;t possible before (and those things give you a competitive advantage)</p>\n</li>\n<li>\n<p>The cost of maintaining the current system is too high</p>\n</li>\n<li>\n<p>Important (new) quality attributes like performance, availability or security cannot be met anymore and the changes\nneeded to implement them are so substantial that a rewrite is necessary</p>\n</li>\n<li>\n<p>Even simple bug fixes take too long because of the complexity of existing code and might introduce new bugs</p>\n</li>\n<li>\n<p>New features take too long and cost too much because of the interdependence of the codebase (new features cannot be isolated and therefore affect existing features)</p>\n</li>\n<li>\n<p>Deployment is hard or impossible to automate, takes too long and is really risky. In fact, it fails often.</p>\n</li>\n<li>\n<p>Your data are inconsistent and causes surprised and/or angry users. Keeping the data consistent is extremely hard,\nbecause the data model and the code operating on the data model is a huge mess.</p>\n</li>\n</ul>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>A big bang approach is possible, if you cannot or want to incrementally replace the system for the following reasons:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>The new system should undergo a revolutionary improvement instead an incremental one for both, technology and functionality</p>\n</li>\n<li>\n<p>The system is small enough that it can be rewritten quickly within a few month</p>\n</li>\n<li>\n<p>You analyzed other approaches like <a href="#strangler-approach">Section 4.7.8, &#8220;<span class="pattern">Strangler Approach</span>&#8221;</a> or\n<a href="https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052/ref=sr_1_1?s=books&amp;ie=UTF8&amp;qid=1478609966&amp;sr=1-1&amp;keywords=Working+Effectively+with+Legacy+Code">Seams</a>\nand they could not help you approaching the problem incrementally</p>\n</li>\n<li>\n<p>You and your stakeholders are aware and understand the risks and consequences of a big bang rewrite and want to go for\nit anyways (you might have good reasons to do so).</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-7',
                  id: '_consequences_7',
                  sectionType: 'section',
                  index: 5,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '6',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>You and your stakeholders are OK with</p>\n<div class="ulist">\n<ul>\n<li>\n<p>Not getting new features, rather less, for the time of the rewrite despite having higher cost (writing the new system and running the old one)</p>\n</li>\n<li>\n<p>The new system will have less features than the old one (at least in the beginning)</p>\n</li>\n<li>\n<p>The new system will have more bugs (because the old one is already battle-proved for a long time and the new one is not).\nPlease be aware that it is naive to belief that you can deliver the new system almost bug free, because you already have\nthe experience of the old system</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>In case the application cannot be rewritten within 3 months, you and your stakeholders need besides enough budget and manpower\na lot of patience to rewrite the application completely. Getting impatient and rush into the release creates bad Technical Debt</p>\n</li>\n<li>\n<p>You will have higher cost and risk of failure, but no benefit for your users. If you want to give your users a benefit, too, you cannot\nsimply replace the old system with a new one, but you also need to rethink the way the application behaves in terms\nof usability, speed or flexibility. If you don&#8217;t want to incrementally improve your product, but rather introduce a\nrevolution, the big bang rewrite is what you need</p>\n</li>\n<li>\n<p>In case you rewrite the system using a new platform and language, there will be winners and losers regarding the change.\nDevelopers who are strong in the "old" technology will feel left behind unless they get a good chance in mastering the\nnew technology. In any case, they will loose their strong expert position for some time and that alone causes tension and conflict.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'also-known-as-9',
                  id: '_also_known_as_9',
                  sectionType: 'section',
                  index: 6,
                  title: 'Also Known As',
                  titlePlain: 'Also Known As',
                  numeral: '7',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Things you should never do.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'related-patterns-18',
                  id: '_related_patterns_18',
                  sectionType: 'section',
                  index: 7,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#strangler-approach">Section 4.7.8, &#8220;<span class="pattern">Strangler Approach</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-12',
                  id: '_references_12',
                  sectionType: 'section',
                  index: 8,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '9',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Chad Fowler wrote a blog post series on <a href="http://chadfowler.com/2006/12/27/the-big-rewrite.html">The Big Rewrite</a></p>\n</li>\n<li>\n<p>Joel Spolsky on Big Bang Rewrites: <a href="http://www.joelonsoftware.com/articles/fog0000000069.html">Things You Should Never Do, Part-I</a></p>\n</li>\n<li>\n<p>David Heinemeier Hansson on <a href="https://signalvnoise.com/posts/3856-the-big-rewrite-revisited">when to fully rewrite a system</a></p>\n</li>\n<li>\n<p>Dave Thomas about legacy innovation on <a href="https://www.computer.org/csdl/mags/so/2016/02/mso2016020105.pdf">IEEE Software</a></p>\n</li>\n<li>\n<p><a href="http://softwareengineering.stackexchange.com/questions/6268/when-is-a-big-rewrite-the-answer">Discussion</a> on Stackexchange</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'chicken-little-strategy',
              id: 'Chicken-Little-Strategy',
              sectionType: 'section',
              index: 1,
              title: '<span class="pattern">Chicken-Little Approach</span>',
              titlePlain: 'Chicken-Little Approach',
              numeral: '2',
              children: [
                {
                  type: 'section',
                  slug: 'intent-34',
                  id: '_intent_34',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Software-Migration with incremental steps to avoid or reduce the risks coming along with the Big Bang approach.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-33',
                  id: '_description_33',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Chicken Little was already described back in the 1990s of the last century by Michael L. Brodie and Michael Stonebreaker and is explained in their great book \'Migrating Legacy Systems\' [1].</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The name of this approach originates from a Walt Disney cartoon, where the protagonist Chicken Little is a very young hero who saves all with his cautious &amp; conservative character. These are also highly essential &amp; invaluable qualities in software migration.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The name \'Cold Turkey\' for a Big Bang migration was also introduced by Brodie and Stonebreaker, which is a synonym for cold detoxification and therefore clearly describes the dislike of the authors in this kind of migration.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The central idea of Chicken Little is to create a composite system consisting of the legacy system and the new target system.\nIncrementally, components of the legacy system are replaced with components of the target system.\nThe legacy system thereby shrinks and the target system grows.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The composition is implemented through gateways.\nThey transfer both reading and writing requests to the respectively other system.\nA gateway can be a forward or a reverse gateway.\nA forward gateway is integrated into the legacy system and routes requests to the target system.\nA reverse gateway is part of the target system routing to the legacy system.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Brodie and Stonebreaker define Chicken Little as 11 steps.\nEach step is applied for every increment of the migration.\nAn increment can be a use case or a bounded context.\nThe execution of these 11 steps can be in any order and parallel; steps can be omitted.</p>\n</div>'
                    },
                    {
                      type: 'olist',
                      content:
                        '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p><strong>Incrementally analyze the legacy system</strong></p>\n<div class="paragraph">\n<p>First, it is necessary to understand the legacy system.\nConsequently reverse engineering is needed to find out the requirements, which in principle are valid for the legacy system as well as for the target system.\nUtilize documentation (if at all exists), but be aware that it is mostly outdated and incomplete.\nReading legacy source code might be reasonable only in rare cases.\nApart from that, interview the people who support, manage or use the legacy system.\nIn doing so, consider the principle of need-to-know, otherwise, you can fall into analysis paralysis, which results in delayed development.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally decompose the legacy system structure</strong></p>\n<div class="paragraph">\n<p>In this step, the legacy system is modified to achieve a decomposable structure (3-layer-architecture) or well-defined interfaces.\nThis is required for optimally integrating a gateway (step 7).\nThe cost of this procedure depends on the current structure of the legacy system and might even be unachievable.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally design the target interface</strong></p>\n<div class="paragraph">\n<p>GUIs or APIs of the target system are designed and specified, including a general idea of the architecture of the target system.\nA decision is reached whether gateways should be built.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally design the target application</strong></p>\n<div class="paragraph">\n<p>Similar to the previous step, business logic and rules must be designed and specified.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally design the target database</strong></p>\n<div class="paragraph">\n<p>Finally, the database must be designed to meet data requirements. A prerequisite is understanding the legacy data store which might be complex, especially if it is not a relational database.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally install the target environment</strong></p>\n<div class="paragraph">\n<p>First of all, the requirements for the target environment must be identified. Later on, hardware and server machines will have to be installed and tested, a deployment strategy is developed, and a concept regarding user management finalized.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally create and install the necessary gateways</strong></p>\n<div class="paragraph">\n<p>Now one or more gateways have to be implemented.\nThe best way a gateway works is for fully decomposable systems (3-layer-architecture). For that case either use:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>forward database gateway, see <a href="#database-first-approach">Section 4.7.3, &#8220;<span class="pattern">Database First Approach</span>&#8221;</a></p>\n</li>\n<li>\n<p>reverse database gateway, see <a href="#database-last-approach">Section 4.7.4, &#8220;<span class="pattern">Database Last Approach</span>&#8221;</a></p>\n</li>\n<li>\n<p>forward and reverse database gateway, see <a href="#composite-database-approach">Section 4.7.5, &#8220;<span class="pattern">Composite Database Approach</span>&#8221;</a></p>\n</li>\n</ul>\n</div>\n<div class="paragraph">\n<p>In not fully decomposable systems the gateway must be placed on a higher level, for example between presentation and logic tier.\nIt might be possible to receive a 3-layer-architecture in the legacy system by refactoring (step 2).\nAs the target system grows and the legacy system shrinks, a gateway is reduced accordingly.\nIn the situation of having both a forward and a reverse gateway, this results probably in redundant data in the legacy and target database. Keeping consistency is challenging and distributed transaction (2-phase commit) might be necessary.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally migrate the legacy database</strong></p>\n<div class="paragraph">\n<p>The target DBMS is installed, and the DB-schema resulting from step 5 is implemented. The data has to be migrated, and a gateway is utilized for legacy application calls.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally migrate the legacy application</strong></p>\n<div class="paragraph">\n<p>Modules with business logic based on step 4 will have to be rewritten.\nThe selection of these migrated modules is based on technical and organizational criteria.\nTake that one which is the simplest, most needed, or that one facing the highest risk.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally migrate the legacy interface</strong></p>\n<div class="paragraph">\n<p>GUIs and APIs designed in step 3 are implemented.</p>\n</div>\n</li>\n<li>\n<p><strong>Incrementally cutover to the target system</strong></p>\n<div class="paragraph">\n<p>Cutover is the process of switching users and their operations from the legacy to the target system.\nThen legacy components can be discarded.\nThe smaller these steps are, the lower the risk.\nIf one step fails, only this step has to be repeated and not the whole project.</p>\n</div>\n</li>\n</ol>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'risks-2',
                  id: '_risks_2',
                  sectionType: 'section',
                  index: 2,
                  title: 'Risks',
                  titlePlain: 'Risks',
                  numeral: '3',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Gateways can be highly complex.\nImplementing a forward gateway may not be possible due to the structure of the legacy system.</p>\n</li>\n<li>\n<p>It may be difficult to keep consistency between the legacy and the target database.</p>\n</li>\n<li>\n<p>A composite system is highly complex and not easy to comprehend for new team members. The loss of experienced developers and their know-how are even more\nsevere.</p>\n</li>\n<li>\n<p>Estimating time and budget is difficult.\nWhen the migration begins, it is challenging to estimate how long it will take and how much it will cost.</p>\n</li>\n<li>\n<p>Also, reverse engineering is tricky.\nThere is the danger of missing features, so early feedback of users is invaluable.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-16',
                  id: '_applicability_16',
                  sectionType: 'section',
                  index: 3,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '4',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Use this approach (or the main ideas) when you need to migrate in a safe and incremental way. It is highly recommended for mission-critical systems.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-8',
                  id: '_consequences_8',
                  sectionType: 'section',
                  index: 4,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '5',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Software migration is not easy, and one will need patience and endurance.\nMigration projects can last several years. For that, a strong team is required.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'also-known-as-10',
                  id: '_also_known_as_10',
                  sectionType: 'section',
                  index: 5,
                  title: 'Also Known As',
                  titlePlain: 'Also Known As',
                  numeral: '6',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Incremental migration</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'related-patterns-19',
                  id: '_related_patterns_19',
                  sectionType: 'section',
                  index: 6,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '7',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#database-first-approach">Section 4.7.3, &#8220;<span class="pattern">Database First Approach</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#database-last-approach">Section 4.7.4, &#8220;<span class="pattern">Database Last Approach</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#composite-database-approach">Section 4.7.5, &#8220;<span class="pattern">Composite Database Approach</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-13',
                  id: '_references_13',
                  sectionType: 'section',
                  index: 7,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>[1] <a href="#Brodie-Stonebraker">[Brodie-Stonebraker]</a></p>\n</li>\n<li>\n<p>[2] Matthias Möser, Abschied nehmen vom Legacy-System, Java Magazin 3.18, <a href="https://entwickler.de/leseproben/legacy-systeme-agil-ersetzen-579827753.html" class="bare">https://entwickler.de/leseproben/legacy-systeme-agil-ersetzen-579827753.html</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'database-first-approach',
              id: 'database-first-approach',
              sectionType: 'section',
              index: 2,
              title: '<span class="pattern">Database First Approach</span>',
              titlePlain: 'Database First Approach',
              numeral: '3',
              children: [
                {
                  type: 'section',
                  slug: 'intent-35',
                  id: '_intent_35',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'description-34',
                  id: '_description_34',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The Database First approach (also called the Forward Migration Method) involves the initial\nmigration of legacy data to a modern, probably relational, Database Management System (DBMS) and\nthen incrementally migrating the legacy applications and interfaces.\nWhile legacy applications and interfaces are being redeveloped, the legacy system remains operable. This\nmethodology falls within a group of methodologies which allow for the interoperability between both the\nlegacy and target systems. This interoperability is provided by a module known as\nGateway: a software module introduced between components to mediate between them. Gateways\ncan play several roles in migration, insulating certain components from changes being made to others,\ntranslating requests and data between components or coordinating queries and updates between components.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The concrete gateway used by the Database First approach is called Forward Gateway. It enables the\nlegacy applications to access the database environment in the target side of the migration process, as shown in\nFig. 1.  This gateway translates and redirects these calls forward to the new database service.  Results returned\nby the new database service are similarly translated for used by legacy applications.</p>\n</div>'
                    },
                    {
                      type: 'image',
                      content:
                        '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/databaseFirst.png" alt="Database-First-Approach">\n</div>\n<div class="title">Figure 22. Database-First-Approach</div>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The main advantage of this approach is that once the legacy data has been migrated, the latest programming\nlanguages and reporting tools can be used to access the data providing immediate productivity benefits. The legacy system can remain operational while legacy applications and interfaces are rebuilt and migrated to the target system one-by-one. When the migration is complete, the gateway will no longer be required and can be decommissioned as the old legacy system is shut down.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>There are several disadvantages to this approach, in particular, it is only applicable to fully decomposable\nlegacy systems where a clean interface to the legacy database service exists. Also, before migration can start, the new database structure must be defined. The major risk with this activity is that the structure of the legacy database may adversely influence the structure of the new database.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The Forward Gateway employed can be very difficult, and sometimes even impossible, to construct due to the differences between the source and the target in technology, in database structure, constraints etc..</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Overall this is a rather simplistic approach to legacy system migration. The migration of the legacy data may\ntake a significant amount of time during which the legacy system will be inaccessible.  When dealing with\nmission critical information systems this may be unacceptable.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>(taken from BISBAL, J. et.al.)</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The database first approach (also known as forward migration method) provides for legacy databases to be moved unchanged into a relational database management system (RDBMS) to incrementally develop the user interface and the applications on the target system. But there is a need for a gateway to accept database calls from the legacy system and to redirect them to the new database system.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>As BATEMAN and MURPHY say, there are a few problems and challenges:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>to develop a forward gateway can be complex or even impossible, because there can be big differences in technologies according to structure, constraints, query languages and semantic heterogeneity.</p>\n</li>\n<li>\n<p>usually reverse gateways are available on the market. Vendor tools often enable remote database access for example by sql. The purpose is that the legacy system becomes a big database server.</p>\n</li>\n<li>\n<p>a pre condition to develop a forward gateway is, that the legacy system has clearly specified interfaces to the database layer. If this is not the case, there have to be expensive modifications to the applications, which can be time and cost intensive.</p>\n</li>\n<li>\n<p>maybe there are a lot of external systems like reports, relying on the interaction with the legacy system. These systems have to be localized and analysed, so that they won&#8217;t crash after the migration.</p>\n</li>\n<li>\n<p>the new database structure has to be designed and the data mapping has to be implemented before the migration can start. A problem can be data structures, that can not be adopted to the new data structure.</p>\n</li>\n</ul>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The main advantage of the database first approach is, that after the big-bang migration of the database, new programming languages and\nreporting tools can be used with the new database system. New applications can be developed in parallel to the legacy system, step by step,\nmodule by module, without an influence on the legacy system. As the migration is finished, the gateway can be deactivated and the\nlegacy system can be shut down.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'related-patterns-20',
                  id: '_related_patterns_20',
                  sectionType: 'section',
                  index: 2,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '3',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Chicken-Little-Strategy">Section 4.7.2, &#8220;<span class="pattern">Chicken-Little Approach</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-14',
                  id: '_references_14',
                  sectionType: 'section',
                  index: 3,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '4',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>BATEMAN, A. und J.P.MURPHY: Migration of Legacy Systems. Working Paper: CA-2984, School of Computer Applications, Dublin City University, Ireland 1994</p>\n</li>\n<li>\n<p>BISBAL, J. et.al.; A Survey of Research into Legacy System Migration. Technical Report TCD-CS-1997-01, Computer Science Department, Trinity College Dublin, 1997. <a href="http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.50.9051" class="bare">http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.50.9051</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'database-last-approach',
              id: 'database-last-approach',
              sectionType: 'section',
              index: 3,
              title: '<span class="pattern">Database Last Approach</span>',
              titlePlain: 'Database Last Approach',
              numeral: '4',
              children: [
                {
                  type: 'section',
                  slug: 'intent-36',
                  id: '_intent_36',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'description-35',
                  id: '_description_35',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The Database Last approach, also called the\nReverse Migration Method, is based on a similar\nconcept to the Database First approach and is also\nsuitable only for fully decomposable legacy systems.\nLegacy applications are gradually migrated to the target\nplatform while the legacy database remains on the\noriginal platform. The legacy database migration is the\nfinal step of the migration process.  As with the\nDatabase First approach, a gateway is used to allow for\nthe interoperability of both information systems. In this\ncase a Reverse Gateway enables target applications to\naccess the legacy data management environment. It is\nemployed to convert calls from the newly created\napplications and redirect them to the legacy database\nservice, as shown in Fig. 1.</p>\n</div>'
                    },
                    {
                      type: 'image',
                      content:
                        '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/databaseLast.png" alt="Database-Last-Approach">\n</div>\n<div class="title">Figure 23. Database-Last-Approach</div>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>If the legacy database service is to be migrated to a\nrelational database management service, then the target\napplications will be developed completely with SQL\ncalls to the data service.  It is these calls that are\ncaptured by the Reverse Gateway and converted to the\nequivalent legacy calls.  The Database Last approach\nhas a lot in common with the client/server paradigm.\nThe legacy database takes on the role of a database\nserver with the  target applications operating as clients.\nThere are commercial products available which\neffectively act as reverse gateways.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The Database Last approach is not without its\nproblems however. Performance issues can be raised\nwith regard to the gateway.  The Reverse Gateway will\nbe responsible for mapping the target database schema\nto the legacy database.  This mapping can be complex\nand slow which will affect the new applications. Also\nmany of the complex features found in relational\ndatabases (integrity, consistency constraints, triggers\netc.), may not be found in the archaic legacy database,\nand hence cannot be exploited by the new application.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>This approach is probably more commercially\nacceptable than the Database First approach as legacy\napplications can continue to operate normally while\nbeing redeveloped.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>However, the migration of the\nlegacy data will still require that the legacy system be\ninaccessible for a significant amount of time.  When\ndealing with mission critical information systems, this\nmay be unacceptable</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>(taken from BISBAL, J. et.al.)</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'related-patterns-21',
                  id: '_related_patterns_21',
                  sectionType: 'section',
                  index: 2,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '3',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Chicken-Little-Strategy">Section 4.7.2, &#8220;<span class="pattern">Chicken-Little Approach</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-15',
                  id: '_references_15',
                  sectionType: 'section',
                  index: 3,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '4',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>BISBAL, J. et.al.; A Survey of Research into Legacy System Migration. Technical Report TCD-CS-1997-01, Computer Science Department, Trinity College Dublin, 1997. <a href="http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.50.9051" class="bare">http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.50.9051</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'composite-database-approach',
              id: 'composite-database-approach',
              sectionType: 'section',
              index: 4,
              title: '<span class="pattern">Composite Database Approach</span>',
              titlePlain: 'Composite Database Approach',
              numeral: '5',
              children: [
                {
                  type: 'section',
                  slug: 'intent-37',
                  id: '_intent_37',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'description-36',
                  id: '_description_36',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>In Composite Database approach, the legacy\ninformation system and its target information system are\noperated in parallel throughout the migration project.\nThe target applications are gradually rebuilt on the\ntarget platform using modern tools and technology.\nInitially the target system will be quite small but will\ngrow as the migration progresses. Eventually the target\nsystem should perform all the functionality of the\nlegacy system and the old legacy system can be retired.</p>\n</div>'
                    },
                    {
                      type: 'image',
                      content:
                        '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/composite.png" alt="Composite-Database-Approach">\n</div>\n<div class="title">Figure 24. Composite-Database Approach</div>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>During the migration, the old legacy system and its\ntarget system form a composite information system, as\nshown in Fig. 1, employing a\ncombination of forward and reverse gateways.  The\napproach may involve data being duplicated across both\nthe legacy database and the target database.  To\nmaintain data integrity, a Transaction Coordinator is\nemployed which intercepts all update requests, from\nlegacy or target applications, and processes them to\nidentify whether they refer to data replicated in both\ndatabases. If they do, the update is propagated to both\ndatabases using a two-phase commit protocol as for\ndistributed database systems.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Analysing non-decomposable legacy components\ncan be very difficult.  In the worst case the component\nmust be treated as a black box. The best that can be\nachieved is to discover its functionality and try to elicit\nas much legacy data as possible. Sometimes using\nexisting legacy applications (e.g. database query,\nreport generation and access routines) are the only way\nto extract the legacy data. Once the functionality has\nbeen ascertained, the component can be redeveloped\nfrom scratch. It can often be very difficult to identify\nwhen legacy data or functions are independent. In many\ncases they may simply have to be replicated and target\ncopies coordinated until the entire legacy system can\nbe safely retired.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The Composite Database approach eliminates the\nneed for a single large migration of legacy data as\nrequired in the Database First and Database Last\napproaches. This is significant in a mission critical\nenvironment. However, this approach suffers from the\noverhead not only of the other two approaches but also\nthe added complexity introduced by the coordinator.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>(taken from BISBAL, J. et.al.)</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-17',
                  id: '_applicability_17',
                  sectionType: 'section',
                  index: 2,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '3',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The Composite Database approach is\napplicable to fully decomposable, semi-decomposable\nand non-decomposable legacy systems.  In reality, few\nlegacy systems fit easily into a single category.  Most\nlegacy systems have some decomposable components,\nsome which are semi-decomposable and others which\nare non-decomposable, i.e. what is known as a Hybrid\nInformation System architecture.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'related-patterns-22',
                  id: '_related_patterns_22',
                  sectionType: 'section',
                  index: 3,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '4',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Chicken-Little-Strategy">Section 4.7.2, &#8220;<span class="pattern">Chicken-Little Approach</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-16',
                  id: '_references_16',
                  sectionType: 'section',
                  index: 4,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '5',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>BISBAL, J. et.al.; A Survey of Research into Legacy System Migration. Technical Report TCD-CS-1997-01, Computer Science Department, Trinity College Dublin, 1997. <a href="http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.50.9051" class="bare">http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.50.9051</a></p>\n</li>\n<li>\n<p>Praful Todkar wrote the blog article "How to extract a data-rich service from a monolith" on <a href="https://martinfowler.com/articles/extract-data-rich-service.html">martinfowler.com</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'butterfly-methodology',
              id: '_butterfly_methodology',
              sectionType: 'section',
              index: 5,
              title: '<span class="pattern">Butterfly-Methodology</span>',
              titlePlain: 'Butterfly-Methodology',
              numeral: '6',
              children: [
                {
                  type: 'section',
                  slug: 'intent-38',
                  id: '_intent_38',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Data migration method without the need of gateways.\nEnables zero-downtime migrations by working with temporary data stores.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-37',
                  id: '_description_37',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The Butterfly methodology focuses on data. There is no need for a gateway like in the Chicken-Little Strategy.\nAt the beginning there is an initial data migration, which can be used to develop the new application\nwithout an influence on the legacy system. When the migration process starts, the data of the legacy system\ngets freezed and set to read-only.\nFrom now on data changes will be stored in a temporarily store.\nA Data Access Allocator (DAA) decides, if a request has to be send to temp store (for already changed data) or to the original database.\nWith the help of a Chrysalizer (a data transformator), where transformation rules are implemented, all the data from the read-only database will be moved to the new system.\nNo data will be lost, because changes are written to the first temp store.\nWhen the initial migration is finished, the data of the temp-store will be migrated, changes will be written to a second temp store and the first one\nis set to read-only. This process will continue until the time period of the migration is so short, that there will be no change in between the two stores anymore.\nAt this moment, the legacy system can be shut down, the last temp store gets migrated and the new system is turned on.\nThis approach helps to migrate a productive system without downtime.\nAnother pro is, that the process can be canceled at any time by rolling back the temp stores. It is also possible to execute tests of the parallel\ndevelopment with actual data.\nA problem can be the amount of hardware that is needed to keep all the temp stores if you have a massive amount of data.\nAlso it can be very expensive to implement the DAA.</p>\n</div>'
                    },
                    {
                      type: 'image',
                      content:
                        '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/butterfly.png" alt="Butterfly-Methodology">\n</div>\n<div class="title">Figure 25. Butterfly-Methodology</div>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-13',
                  id: '_experiences_13',
                  sectionType: 'section',
                  index: 2,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '3',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'risks-3',
                  id: '_risks_3',
                  sectionType: 'section',
                  index: 3,
                  title: 'Risks',
                  titlePlain: 'Risks',
                  numeral: '4',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>If the Butterfly Method will be successful depends on the factor v / u,\nwhere u is the speed of the Chrysalizer and v the speed of the DAA to setup new temp stores.\nIf v = 0 this approach is similar to the <a href="#big-bang-approach">Section 4.7.1, &#8220;<span class="pattern">Big Bang Approach</span>&#8221;</a>, if v &gt; u the migration will never end.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-18',
                  id: '_applicability_18',
                  sectionType: 'section',
                  index: 4,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '5',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Apply this pattern if you need to migrate a mass of data without downtime.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-9',
                  id: '_consequences_9',
                  sectionType: 'section',
                  index: 5,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '6',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Enables zero downtime migrations by working with temporary data stores.\nIf the amount of data is huge, there is a need for a lot of hardware.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Critical success factors are:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>a very good understanding of the old and new system</p>\n</li>\n<li>\n<p>an initial migration without errors / mistakes</p>\n</li>\n<li>\n<p>a fast Chrysalizer</p>\n</li>\n<li>\n<p>a efficient Data Access Allocator</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'also-known-as-11',
                  id: '_also_known_as_11',
                  sectionType: 'section',
                  index: 6,
                  title: 'Also Known As',
                  titlePlain: 'Also Known As',
                  numeral: '7',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'related-patterns-23',
                  id: '_related_patterns_23',
                  sectionType: 'section',
                  index: 7,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Chicken-Little-Strategy">Section 4.7.2, &#8220;<span class="pattern">Chicken-Little Approach</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-17',
                  id: '_references_17',
                  sectionType: 'section',
                  index: 8,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '9',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#BISBAL">[BISBAL]</a></p>\n</li>\n<li>\n<p><a href="#ERDLE">[ERDLE]</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'change-by-split-approach',
              id: 'change-by-split-approach',
              sectionType: 'section',
              index: 6,
              title: '<span class="pattern">Change-by-Split Approach</span>',
              titlePlain: 'Change-by-Split Approach',
              numeral: '7',
              children: [
                {
                  type: 'section',
                  slug: 'prerequisites',
                  id: '_prerequisites',
                  sectionType: 'section',
                  index: 0,
                  title: 'Prerequisites',
                  titlePlain: 'Prerequisites',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The system has several distinct (usually nearly disjunct) user groups.\nFor each of these groups, slightly different business rules, processes\nor other requirements hold.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'intent-39',
                  id: '_intent_39',
                  sectionType: 'section',
                  index: 1,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Maintain and evolve a few smaller systems, instead of one big monolith.\nReduce time-to-market, work in smaller teams that individually become\nmore focussed.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-38',
                  id: '_description_38',
                  sectionType: 'section',
                  index: 2,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '3',
                  children: [
                    {
                      type: 'olist',
                      content:
                        '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Identify different user groups, at best disjunct. An example: For an\nonline E-commerce system, such groups might be private and corporate customers.</p>\n<div id="figure-split-initial" class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/cbs-1-initial.png" alt="CBS, initial">\n</div>\n<div class="title">Figure 26. Change-by-split, initial situation</div>\n</div>\n</li>\n<li>\n<p>As a preparation, copy the whole system, with all sources and everything\nrequired to develop, build, test and run the system. This might include\ndatabases or other middleware. Every part should be completely independend\nof the others.</p>\n<div id="figure-split-copied" class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/cbs-2-copied.png" alt="CBS, copied">\n</div>\n<div class="title">Figure 27. Change-by-split, system copied for every user type/category</div>\n</div>\n</li>\n<li>\n<p>Identify commonalities among these different user groups, crosscutting concerns\nthat every user group needs in a common way. In our E-commerce example,\nthose might be pdf-generation, user/role management or the like. Factor out those\ncommons into a separate module/subsystem, which is used by (likely all) other split systems.</p>\n<div class="paragraph">\n<p>Make part of the whole development team responsible for the commons.</p>\n</div>\n<div id="figure-split-commons" class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/cbs-3-factored-commons.png" alt="CBS, commons">\n</div>\n<div class="title">Figure 28. Change-by-split, factored out commons</div>\n</div>\n</li>\n<li>\n<p>Now you can optimize and/or refactor the commons subsystem. As its code\nis now centralized, that task might become somewhat simpler than within\nthe original legacy system. At the same time, remove all commons-code from the split\nsystems - reducing them in size.</p>\n<div class="paragraph">\n<p>Split the rest of the whole development team according the split systems. Make\none developer group responsible for one split system.</p>\n</div>\n<div id="figure-split-reduced-commons" class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/cbs-4-reduced-commons.png" alt="CBS, reduced commons">\n</div>\n<div class="title">Figure 29. Change-by-split, reduced splits, optimized commons</div>\n</div>\n</li>\n<li>\n<p>Now for the core of this approach: Aggressively reduce every split system\nto its core: remove all code not required for the split-specific\nuser group, remove all code that can also be handled by the Commons subsystem.\nThis step might be performed parallel to optimizing the commons.</p>\n<div id="figure-split-final" class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/cbs-5-final.png" alt="CBS, final">\n</div>\n<div class="title">Figure 30. Change-by-split, all split systems reduced/optimized</div>\n</div>\n<div class="paragraph">\n<p>This final step might need extensive preparation, e.g. by creating user-category\nspecific unit-/integration-/acceptance tests. Reducing unneeded code\ncan be quite difficult, if the original code has (extremely) high cyclomatic complexity\nor is very difficult to understand for other reasons (configurability, strange\n  technologies, using strange/outdated/proprietary frameworks etc.).</p>\n</div>\n</li>\n</ol>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Steps 4 and 5 might be interchanged or done in parallel.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-14',
                  id: '_experiences_14',
                  sectionType: 'section',
                  index: 3,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '4',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>An niche-market software supplier could reduce their\n2+Million LoC <em>moloch</em> to five <em>split</em> systems, each having\napprox 300kLoC plus one commons-system.</p>\n<div class="paragraph">\n<p>Time-to-market for feature requests was reduced from 12 weeks\nbefore the splits to 1 week afterwards. Team size of 50+ was\nreduced to 8+ people. A retrospective approx 9 month after\nthe split showed significant higher customer satisfaction\nand (!) a significant increase in developer happiness\n(probably reducing know-how drain). The split-approach was\nregarded as a success by business, management and technical stakeholdes.</p>\n</div>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'risks-4',
                  id: '_risks_4',
                  sectionType: 'section',
                  index: 4,
                  title: 'Risks',
                  titlePlain: 'Risks',
                  numeral: '5',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Creating several copies of a large system plus infrastructure\ncan be expensive and resource-intensive.</p>\n</li>\n<li>\n<p>Identifying really disjunct user groups might be impossible for\nseveral business domains, rendering this approach useless.</p>\n</li>\n<li>\n<p>The required team-split might pose organizational challenges,\nas a currently productive (albeit large) team has to be disrupted.</p>\n</li>\n<li>\n<p>It might be difficult to define appropriate interfaces for the\nfactored-out <em>commons</em>. If these commons are overly scattered\nthroughout the legacy code, this extraction might be impossible,\nmaking the resulting split systems more complicated than they should be.</p>\n</li>\n<li>\n<p>If business code is overly tangled, having very high cyclomatic\ncomplexity, it can be arbitrarily difficult to remove those parts\nthat are not required for a single user type/category. Analyzing such\ncode segments should be performed my members of several split-teams.</p>\n</li>\n<li>\n<p>Associated processes (like requirements, test, documentation and operations) of\nthe split systems might become more difficult to manage in the first\nphases of a split. Due to the reduced sizes of split systems, it might\nbe likely such processes will become simpler over time.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-19',
                  id: '_applicability_19',
                  sectionType: 'section',
                  index: 5,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '6',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Whenever a legacy system servers more than one homogeneous user\ngroup, this split approach might be appropriate.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The business processes for the various user groups need to be\nsufficiently different from one another - otherwise splits would\nmerely create duplicate functionality.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-10',
                  id: '_consequences_10',
                  sectionType: 'section',
                  index: 6,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '7',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Instead of having to manage one single (but large) system,\nyou will have to manage (develop, change, operate) several (smaller) systems.\nThis might be especially relevant for operations effort.</p>\n</li>\n<li>\n<p>Instead of having to manage one single development team,\nyou will have to manage several.</p>\n</li>\n<li>\n<p>All "things" you are dealing with (code, data-structures, data,\nprocesses) will become smaller, reducing complexity of these "things".</p>\n</li>\n<li>\n<p>"Time-to-market" of your split systems will be lower (as development\nwill be faster) - maybe coordination and management effort might increase.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'proposed-practices',
                  id: '_proposed_practices',
                  sectionType: 'section',
                  index: 7,
                  title: 'Proposed practices',
                  titlePlain: 'Proposed practices',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Find a relatively small user-group and <em>pilot</em> (try-out)\nthis approach.</p>\n</li>\n<li>\n<p>Involve the affected user groups as early as possible to\nfacilitate possible required changes on their side.</p>\n</li>\n<li>\n<p>Try to to identify potential <em>neuralgic sections</em> within the code,\nthat do not belong into the factored-out commons and will likely affect\nseveral of the split systems. Try to minimize the effort required\nto analyze and untangle such sections by gathering people from various\nsplit-teams.</p>\n</li>\n<li>\n<p>Don&#8217;t try everything at once: Spread out step 5 (optimize splits) over\nseveral, possibly many, development iterations or releases. Let the split\nteams become comfortable with their reduced split systems.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'strangler-approach',
              id: 'strangler-approach',
              sectionType: 'section',
              index: 7,
              title: '<span class="pattern">Strangler Approach</span>',
              titlePlain: 'Strangler Approach',
              numeral: '8',
              children: [
                {
                  type: 'section',
                  slug: 'intent-40',
                  id: '_intent_40',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Divide a legacy system into different functional domains and replace those step by step.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-39',
                  id: '_description_39',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Rewriting an old system with the <a href="#big-bang-approach">Section 4.7.1, &#8220;<span class="pattern">Big Bang Approach</span>&#8221;</a> is a risky endeavor. It is harder than you might think at the beginning.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>An alternative way is to gradually create a new system around the edges of the old, letting it grow slowly over\nseveral years until the old system is strangled. The most important reason to consider a strangler application over a\ncut-over rewrite is reduced risk (it might cost more to do a strangler, but that&#8217;s the price of risk reduction) [1].</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Paul Hammont depicts the strangler approach as follows [2]:</p>\n</div>'
                    },
                    {
                      type: 'image',
                      content:
                        '<div id="figure-strangulation" class="imageblock">\n<div class="content">\n<img src="./images/strangulation.jpg" alt="strangulation">\n</div>\n<div class="title">Figure 31. Strangler Applications (Paul Hammant)</div>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>He discusses two ways of achieving the goal of moving from the (red) old system to the (blue) new system:</p>\n</div>'
                    },
                    {
                      type: 'olist',
                      content:
                        '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>With adding new features</p>\n</li>\n<li>\n<p>Without adding new features</p>\n</li>\n</ol>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Deciding to go for the first strategy means that you can still keep your business happy because you are still able to\ndeliver new features. However, this approach will take longer than the second one.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-15',
                  id: '_experiences_15',
                  sectionType: 'section',
                  index: 2,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '3',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Paul Hammont reports the following positive with his <a href="http://paulhammant.com/2013/07/14/legacy-application-strangulation-case-studies/">case studies</a>:</p>\n<div class="ulist">\n<ul>\n<li>\n<p>Airline Booking System: the C application which was stable but hard to grow (and find developers) has been incrementally\nreplaced by a Spring stack based application. A load balancer routed the requests to either the C or the Spring\napplication. They introduced session store used by both systems (the C++ application needed to be adjusted for this).</p>\n</li>\n<li>\n<p>Trading Company&#8217;s PowerBuilder based Rich Client: you cannot integrate a new rich client into a new one, so the team\ndecided to run two client applications in parallel for the energy traders, adding more and more functionality to the\nnew (Swing-based) client. The users weren&#8217;t forced to use one or the other, but the team made the new application\nso compelling that they wanted to. Google is (as I heard from a Googler) doing similar approaches to their internal\nsystems, which are replaced by new systems all the time and you need to decide when to switch.</p>\n</li>\n<li>\n<p>National Supermarket&#8217;s internal planning system based on Swing and a major database is moving into a Rails and Java\nMicroservices based web application. Since the two technologies are also very different, there is no smooth way of\nintegrating the old and the new system, they have to exist in parallel (it is an internal system)</p>\n</li>\n<li>\n<p>Used consumer goods magazine&#8217;s web portal - a move from Oracle Endeca to Java/JavaScript. First, they changed the\nOracle frontend that it looks like the new system. Then they integrated a little piece of new functionality from\nthe new stack into the website. The first strangler release took 6 months, then the delivered regularly.</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>Nat Pryce reports failed projects and challenges using the strangler pattern [3]:</p>\n<div class="ulist">\n<ul>\n<li>\n<p>"I&#8217;ve seen critical systems that have suffered both of these fates, and ended up with about four or five\n"strategic architectural directions" and "future state architectures". One large multi-site project ended up with\neight different new persistence mechanisms in its new architecture."</p>\n</li>\n<li>\n<p>"Another ended up with two different database schemas, one for the old way of doing things and another for the\nnew way, neither schema was ever removed from the system and there were also multiple class hierarchies that mapped\nto one or even both of these schemas."</p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'risks-5',
                  id: '_risks_5',
                  sectionType: 'section',
                  index: 3,
                  title: 'Risks',
                  titlePlain: 'Risks',
                  numeral: '4',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>You need to overcome the lack of will to actually finish the strangling (usually political will from\nnon-technical stakeholders manifested as lack of budget). If you don&#8217;t completely kill off the old system, you&#8217;ll\nend up in a worse mess because your system now has two ways of doing everything with an awkward interface between the\ntwo. Later, another wave of developers will probably decide to strangle what&#8217;s there, writing yet another strangler\napplication, and again a lack of will might leave the system in an even worse state, with three ways of doing things [1].</p>\n</li>\n<li>\n<p>You need to have consensus across the development team(s) on the future state of the architecture and how to get there.\nIf everyone runs in another direction, then you end up with a new system, which is also hard to maintain.</p>\n</li>\n<li>\n<p>If you&#8217;re introducing technologies that are new to the team or to support/maintenance staff (e.g. adding reliable async\nmessaging to what is currently a synchronous three-tier client/server architecture) then you have to ensure that there\nare experienced technical leads on the project who know how to build systems with that technology and support those\nsystems. And those tech leads have to stick with the project for some time after the old app has been fully strangled.\nOtherwise, the architecture will degrade as inexperienced developers modify it in ways they know but not in ways that\nfit with the new architecture [1].</p>\n</li>\n<li>\n<p>Strangling creates a layer of goo and there is a risk that this layer becomes a mess, too.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-20',
                  id: '_applicability_20',
                  sectionType: 'section',
                  index: 4,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '5',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>A big bang replacement is too risky and/or your business wants you to constantly deliver new features and does not accept a 1-3 years break for the big rewrite.</p>\n</li>\n<li>\n<p>"Cost of Delay" of not moving to the new platform as early as possible is higher than the cost of running two systems in parallel</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-11',
                  id: '_consequences_11',
                  sectionType: 'section',
                  index: 5,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '6',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'proposed-practices-2',
                  id: '_proposed_practices_2',
                  sectionType: 'section',
                  index: 6,
                  title: 'Proposed practices',
                  titlePlain: 'Proposed practices',
                  numeral: '7',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Paul Hammant recommends the following practices [2]:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>You really should phase the strangulation. Keep your larger application in a continually deployable state while working on it.\nThe first go live after a month or so of work, then every two weeks after that at least or you&#8217;ll fail. That would\nprobably via project cancellation by a checkbook-holding sponsor.</p>\n</li>\n<li>\n<p>Do enhancements or new "business value" work concurrently with strangulation, while getting all to agree that both are\nhappening. As you work on the strangulation, a decent percentage of work should be enhancements too. This allows value\nto be associated with each release from the point of view of the people paying for it. ROI and all that isn&#8217;t just\nabandonment of costly end-of-life IT choices, it is about tangible changes for the better. From top to bottom, everyone\nneeds to agree that both are happening.</p>\n</li>\n<li>\n<p>The additional of integration and functional test suites as a safety net is key. This is particularly true for when the\nold technology did not have unit test coverage. The functional tests will be able to step between old and new (and back),\nto prevent surprises.</p>\n</li>\n<li>\n<p>Understand that Non-Functional Requirements (NFRs) that don&#8217;t directly cheapen the re-implementation may jeopardize the\ninitiative. Jeopardize in the "courting cancellation" territory again. Various authority figures may have pet technologies\nto include or things to exclude. The test is whether the dev team cranking stuff out agrees or not.</p>\n</li>\n<li>\n<p>Agile methodologies optimize everything for maximized developer throughput and phased deliveries to production. You\nwill not manage this with waterfall, unless you want glacially long intervals between production pushes.\nThe <a href="http://cdn.pols.co.uk/papers/agile-approach-to-legacy-systems.pdf">Pols/Stevenson white paper</a> drills much further into the Agile aspects.</p>\n</li>\n<li>\n<p>Lastly, you should always be aware that there could be functionality and context hidden within the old application\nthat people have forgotten about, and that a team of business analysts assigned to reverse engineering behaviors might\nalso miss. This is a risk for any "rewrite" though.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'related-patterns-24',
                  id: '_related_patterns_24',
                  sectionType: 'section',
                  index: 7,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Replaceable Component Architecture</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-18',
                  id: '_references_18',
                  sectionType: 'section',
                  index: 8,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '9',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>[1] Martin Fowler <a href="http://www.martinfowler.com/bliki/StranglerApplication.html">about the Strangler Application</a></p>\n</li>\n<li>\n<p>[2] Paul Hammant&#8217;s <a href="http://paulhammant.com/2013/07/14/legacy-application-strangulation-case-studies/">blog post</a> with practices and case studies</p>\n</li>\n<li>\n<p>[3] <a href="http://stackoverflow.com/questions/1118804/application-strangler-pattern-experiences-thoughts">Discussion on StackOverflow</a> with Nat Pryce and Ira Baxter</p>\n</li>\n<li>\n<p>Michael Feathers speaks on <a href="http://www.hanselman.com/blog/HanselminutesPodcast165WorkingEffectivelyWithLegacyCodeWithMichaelFeathers.aspx">Hanselminutes</a> about the Strangler Application</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'improve-practices',
          id: 'improve-practices',
          sectionType: 'section',
          index: 7,
          title: 'Improvement Practices (Details)',
          titlePlain: 'Improvement Practices (Details)',
          numeral: '8',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Practices, in contrast to approaches, are the short-term\nor tactical improvements.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>We already explained the categories of these improvement practices\nin <a href="#improve-practices-overview">Section 4.5, &#8220;Improvement Practices (Overview)&#8221;</a>. Here we dive into more details,\nstructured along these categories:</p>\n</div>'
            },
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Improve Processes,see <a href="#improve-processes">Section 4.9, &#8220;Practices to Improve Processes&#8221;</a></p>\n</li>\n<li>\n<p>Improve Architecture and Code Structure, see <a href="#improve-architecture">Section 4.10, &#8220;Improve Architecture and Code Structure&#8221;</a></p>\n</li>\n<li>\n<p>Improve Technical Infrastructure, see <a href="#improve-technical-infrastructure">Section 4.11, &#8220;Practices to Improve Technical Infrastructure&#8221;</a></p>\n</li>\n<li>\n<p>Improve Analyzability, see <a href="#improve-analyzability">Section 4.12, &#8220;Practices to Improve Analyzability and Evaluability&#8221;</a></p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'improve-processes',
          id: 'improve-processes',
          sectionType: 'section',
          index: 8,
          title: 'Practices to Improve Processes',
          titlePlain: 'Practices to Improve Processes',
          numeral: '9',
          children: [
            {
              type: 'image',
              content:
                '<div id="fig-improve-processes" class="imageblock">\n<div class="content">\n<img src="./images/improve-practice-processes.png" alt="Practices for Improve Processes">\n</div>\n<div class="title">Figure 32. Practices to improve processes</div>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>For an overview of other improvement practices,\nsee <a href="#improve-practices-overview">Section 4.5, &#8220;Improvement Practices (Overview)&#8221;</a>.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>One way to improve the processes is to resort to <a href="https://mobprogramming.org">Mob Programming</a> for onsite teams or <a href="https://www.remotemobprogramming.org">Remote Mob Programming</a> for distributed teams.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'improve-architecture',
          id: 'improve-architecture',
          sectionType: 'section',
          index: 9,
          title: 'Improve Architecture and Code Structure',
          titlePlain: 'Improve Architecture and Code Structure',
          numeral: '10',
          children: [
            {
              type: 'admonition',
              content:
                '<div class="admonitionblock note">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Note</div>\n</td>\n<td class="content">\nThis category contains a fairly large number of practices.\n</td>\n</tr>\n</table>\n</div>'
            },
            {
              type: 'image',
              content:
                '<div id="fig-improve-architecture" class="imageblock">\n<div class="content">\n<img src="./images/improve-practice-architecture.png" alt="Practices to Improve Architecture">\n</div>\n<div class="title">Figure 33. Practices to improve architecture and code structure</div>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>For an overview of other improvement practices,\nsee <a href="#improve-practices-overview">Section 4.5, &#8220;Improvement Practices (Overview)&#8221;</a>.</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'architecture-and-code-practices-in-detail',
              id: '_architecture_and_code_practices_in_detail',
              sectionType: 'section',
              index: 0,
              title: 'Architecture and Code Practices in Detail',
              titlePlain: 'Architecture and Code Practices in Detail',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>(given in alphabetical order)</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Anticorruption-Layer">Section 4.10.2, &#8220;<span class="pattern">Anticorruption Layer</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Assertions">[Assertions]</a></p>\n</li>\n<li>\n<p><a href="#Automated-Tests">[Automated-Tests]</a></p>\n</li>\n<li>\n<p><a href="#Branch-For-Improvement">[Branch-For-Improvement]</a></p>\n</li>\n<li>\n<p><a href="#Change-by-Abstraction Refactoring">[Change-by-Abstraction Refactoring]</a></p>\n</li>\n<li>\n<p><a href="#Extract-Reusable-Component">[Extract-Reusable-Component]</a></p>\n</li>\n<li>\n<p><a href="#Front-End-Switch">[Front-End-Switch]</a></p>\n</li>\n<li>\n<p><a href="#Group-Improvement-Actions">[Group-Improvement-Actions]</a></p>\n</li>\n<li>\n<p><a href="#Handle-If-Else-Chains">[Handle-If-Else-Chains]</a></p>\n</li>\n<li>\n<p><a href="#Improve-Code-Layout">[Improve-Code-Layout]</a></p>\n</li>\n<li>\n<p><a href="#Improve-feedback-from-and-for-stakeholders">Section 4.10.10, &#8220;<span class="pattern">Improve Feedback From And For Stakeholders</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Improve-Logging">Section 4.10.4, &#8220;<span class="pattern">Improve Logging</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Interface-Segregation-Principle">Section 4.10.5, &#8220;<span class="pattern">Interface Segregation Principle</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Introduce-Boy-Scout-Rule">Section 4.10.6, &#8220;<span class="pattern">Introduce Boy Scout Rule</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Introduce-Layering">[Introduce-Layering]</a></p>\n</li>\n<li>\n<p><a href="#Isolate-Changes">[Isolate-Changes]</a></p>\n</li>\n<li>\n<p><a href="#Keep-Data-Toss-Code">[Keep-Data-Toss-Code]</a></p>\n</li>\n<li>\n<p><a href="#Manage-Complex-Client-Dependencies-With-Facade">Section 4.10.7, &#8220;<span class="pattern">Manage Complex Client Dependencies With Facade</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Measure">Section 4.10.8, &#8220;<span class="pattern">Measure</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Never-Change-Running-System">[Never-Change-Running-System]</a></p>\n</li>\n<li>\n<p><a href="#Never-Rewrite-Running-System">[Never-Rewrite-Running-System]</a></p>\n</li>\n<li>\n<p><a href="#Quality-Driven-Software-Architecture">[Quality-Driven-Software-Architecture]</a></p>\n</li>\n<li>\n<p><a href="#Refactoring">[Refactoring]</a></p>\n</li>\n<li>\n<p><a href="#Refactoring-Plan">[Refactoring-Plan]</a></p>\n</li>\n<li>\n<p><a href="#Remove-Nested-Control-Structures">[Remove-Nested-Control-Structures]</a></p>\n</li>\n<li>\n<p><a href="#Sample-For-Improvement">[Sample-For-Improvement]</a></p>\n</li>\n<li>\n<p><a href="#Schedule-Work">[Schedule-Work]</a></p>\n</li>\n<li>\n<p><a href="#Untangle-Code">[Untangle-Code]</a></p>\n</li>\n<li>\n<p><a href="#Use-Invariants-To-Kill-Zombies">Section 4.10.9, &#8220;<span class="pattern">Use Invariants To Kill Zombies</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'anticorruption-layer',
              id: 'Anticorruption-Layer',
              sectionType: 'section',
              index: 1,
              title: '<span class="pattern">Anticorruption Layer</span>',
              titlePlain: 'Anticorruption Layer',
              numeral: '2',
              children: [
                {
                  type: 'section',
                  slug: 'intent-41',
                  id: '_intent_41',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>An anticorruption layer is a logical layer that provides a stable interface to (potentially) volatile software components. As long as this interface remains untouched developers can implement changes or even replace their own or third-party software without affecting the clients of this interface.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-40',
                  id: '_description_40',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The original definition <a href="#Evans03">[Evans03, p. 365]</a>:</p>\n</div>'
                    },
                    {
                      type: 'quote',
                      content:
                        '<div class="quoteblock">\n<blockquote>\n""\nCreate an isolating layer to provide clients with functionality in terms of their own domain model. The layer talks to the other system through its existing interface, requiring little or no modification to the other system. Internally, the layer translates in both directions as necessary between the two models.\n""\n</blockquote>\n<div class="attribution">\n&#8212; Eric Evans<br>\n<cite>Domain Driven Design</cite>\n</div>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-16',
                  id: '_experiences_16',
                  sectionType: 'section',
                  index: 2,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '3',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Here are some real-life experiences:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Anticorruption layer for a search-index to defer the decision if the best performance can be achieved with Elastic Search, Solr or a self-developed Lucene index.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-21',
                  id: '_applicability_21',
                  sectionType: 'section',
                  index: 3,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '4',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Apply this pattern when clients shall be protected from internal changes in a module or subsystem.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-12',
                  id: '_consequences_12',
                  sectionType: 'section',
                  index: 4,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '5',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Allows to (ex)change software elements without affecting depending components</p>\n</li>\n<li>\n<p>Introduces one more level of indirection and thus may increase complexity</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'also-known-as-12',
                  id: '_also_known_as_12',
                  sectionType: 'section',
                  index: 5,
                  title: 'Also Known As',
                  titlePlain: 'Also Known As',
                  numeral: '6',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Isolation layer</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'related-patterns-25',
                  id: '_related_patterns_25',
                  sectionType: 'section',
                  index: 6,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '7',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Isolate-Changes">[Isolate-Changes]</a>, as an alternative or complimenting approach</p>\n</li>\n<li>\n<p><a href="#Bulkhead">[Bulkhead]</a>, introduces stability boundaries within applications or systems by segmenting runtime resources.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-19',
                  id: '_references_19',
                  sectionType: 'section',
                  index: 7,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Evans03">[Evans03]</a> p. 364ff.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'change-by-abstraction-refactoring',
              id: 'change-by-abstraction-refactoring',
              sectionType: 'section',
              index: 2,
              title:
                '<span class="pattern">Change-by-Abstraction Refactoring</span>',
              titlePlain: 'Change-by-Abstraction Refactoring',
              numeral: '3',
              children: [
                {
                  type: 'section',
                  slug: 'prerequisites-2',
                  id: '_prerequisites_2',
                  sectionType: 'section',
                  index: 0,
                  title: 'Prerequisites',
                  titlePlain: 'Prerequisites',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Intention to change or replace a cohesive piece of code with a lot of incoming\n(afferent) dependencies. A common example is replacing homegrown ORM or plain SQL with\na standard tool or exchanging a logging library for another with incompatible interfaces.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'intent-42',
                  id: '_intent_42',
                  sectionType: 'section',
                  index: 1,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Incrementally replace part of the system with a new implementation.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-41',
                  id: '_description_41',
                  sectionType: 'section',
                  index: 2,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '3',
                  children: [
                    {
                      type: 'olist',
                      content:
                        '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Mark the Method or Class you would like to replace as deprecated.</p>\n</li>\n<li>\n<p>Introduce an abstraction that is implemented by the old implementation. If the\nAPI of the new solution differs, consider the Adapter Pattern to perform<br>\n<span class="image"><img src="./images/change-by-abstraction-1.png" alt="Change by abstraction" width="step 1"></span></p>\n</li>\n<li>\n<p>Incrementally move all the calls where the deprecated Class/Method is still\nbeing used to use the new API instead.<br>\n<span class="image"><img src="./images/change-by-abstraction-2.png" alt="Change by abstraction" width="step 2"></span></p>\n</li>\n<li>\n<p>You can now implement and start testing the new functionality by deriving\nit from the abstraction you introduced in step 2.<br>\n<span class="image"><img src="./images/change-by-abstraction-3.png" alt="Change by abstraction" width="step 3"></span></p>\n</li>\n<li>\n<p>When all the places where the deprecated Class/Method is called directly\nare moved to the abstraction, you can use a feature toggle in a proxy class that implements\nthe common abstraction to toggle between the old and the new implementation.<br>\n<span class="image"><img src="./images/change-by-abstraction-3.png" alt="Change by abstraction" width="step 4"></span></p>\n</li>\n<li>\n<p>If you made sure the new functionality performs well enough, you can remove\nthe deprecated implementation and possibly the abstraction.</p>\n</li>\n</ol>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'related-patternsnames',
                  id: '_related_patternsnames',
                  sectionType: 'section',
                  index: 3,
                  title: 'Related patterns/names',
                  titlePlain: 'Related patterns/names',
                  numeral: '4',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>This method is also known as "Branch by Abstraction" and a smiliar technique that\ngoes under the names "Parallel Change" or "Expand and Contract" exists, where the\nabstraction step is skipped and callers are migrated to a new method/object\nimmediately.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>This approach works best when it is used in combination with <a href="#Introduce-Boy-Scout-Rule">Section 4.10.6, &#8220;<span class="pattern">Introduce Boy Scout Rule</span>&#8221;</a>.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-17',
                  id: '_experiences_17',
                  sectionType: 'section',
                  index: 4,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '5',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'risks-6',
                  id: '_risks_6',
                  sectionType: 'section',
                  index: 5,
                  title: 'Risks',
                  titlePlain: 'Risks',
                  numeral: '6',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Too many of these half-performed incremental refactorings will leave your code base in a mess.\nYou still need to finish, what you start.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-22',
                  id: '_applicability_22',
                  sectionType: 'section',
                  index: 6,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '7',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Your team is familiar with and embraces Trunk-Based development.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-13',
                  id: '_consequences_13',
                  sectionType: 'section',
                  index: 7,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Teams can collaboratively move code towards a new implementation by replacing\ncalls to deprecated methods/classes with calls to the abstraction, even in parallel.</p>\n</li>\n<li>\n<p>The refactoring can be made incrementally.</p>\n</li>\n<li>\n<p>The build will remain "green", even when the refactoring is unfinished.</p>\n</li>\n<li>\n<p>The abstraction enables comparison of the behaviour of the old to the new implementation in production\nor testing environments to make sure that the new implementation matches the old behaviour.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-20',
                  id: '_references_20',
                  sectionType: 'section',
                  index: 8,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '9',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p><a href="http://continuousdelivery.com/2011/05/make-large-scale-changes-incrementally-with-branch-by-abstraction/" class="bare">http://continuousdelivery.com/2011/05/make-large-scale-changes-incrementally-with-branch-by-abstraction/</a><br>\n<a href="http://paulhammant.com/blog/branch_by_abstraction.html" class="bare">http://paulhammant.com/blog/branch_by_abstraction.html</a><br>\n<a href="http://www.alwaysagileconsulting.com/application-pattern-verify-branch-by-abstraction/" class="bare">http://www.alwaysagileconsulting.com/application-pattern-verify-branch-by-abstraction/</a><br>\n<a href="http://martinfowler.com/bliki/BranchByAbstraction.html" class="bare">http://martinfowler.com/bliki/BranchByAbstraction.html</a><br>\n<a href="https://printhelloworld.de/posts/refactoring-in-baby-steps/" class="bare">https://printhelloworld.de/posts/refactoring-in-baby-steps/</a><br>\n<a href="https://www.branchbyabstraction.com/" class="bare">https://www.branchbyabstraction.com/</a></p>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'improve-logging',
              id: 'Improve-Logging',
              sectionType: 'section',
              index: 3,
              title: '<span class="pattern">Improve Logging</span>',
              titlePlain: 'Improve Logging',
              numeral: '4',
              children: [
                {
                  type: 'section',
                  slug: 'intent-43',
                  id: '_intent_43',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Employ sophisticated logging mechanisms such as modern logging frameworks,\ndistributed log collection and visualization tools in order to gain more\ndetailed information about the system during runtime with a minimal or\npredictable performance impact.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-42',
                  id: '_description_42',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>While some time ago it was quite common to output log statements to standard out,\npeople usually use logging frameworks nowadays that give more control about what should\nbe logged and where the log entries should go.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>However, it turns out that such logging frameworks have some feature gems\nthat are not widely known or used. To name a few:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Diagnostics Contexts (also known as Mapped Diagnostics Context (MDC) or Nested Diagnostics Context (NDC)) help to store additional context information for all succeeding log statements. Usage examples for such contexts are the login name of the current user, correlation IDs in order to enable cross-application log tracing or transaction IDs to have the possibility to filter all log entries that belong together.</p>\n</li>\n<li>\n<p>Additional log levels or markers help to make it easier to filter the log stream. It is a good advice to think about the marker and log design at the beginning of the project and try to agree on a common way to phrase log statements.</p>\n</li>\n<li>\n<p>Asynchronous appenders (i.e. log emitter) allow high-throughput logging, which lower impact on the application&#8217;s performance.</p>\n</li>\n<li>\n<p>Structured log formats produce a machine-readable output. Usually, log files are written using a more or less standardized text output. Log files in XML or JSON can be parsed and digested easily and allow for better filtering since more information, like diagnostics contexts, is always available in these formats.</p>\n</li>\n<li>\n<p>Filters enable context-based logging and can dispatch log entries to different log appenders. For instance it is possible to log warnings only but switch to debug logging for a specific user.</p>\n</li>\n</ul>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>In some environments it turns out to be problematic to rely on a single logging API. This could be the case if the application runs within a container or container-like framework that already employs a configured logging framework. In order to be independent of conrete logging frameworks, logging facades like <a href="http://slf4j.org">SLF4J</a> should be preferred over using the framework&#8217;s API directly.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Despite the focus on the software development, logging is also an operations topic. Often it turns out to be difficult to get recent log files from the operations team. Another pain point is that useful log information is scattered across multiple log files, stored at different locations on different systems. Log aggregation tools such as Splunk, <a href="http://www.logstash.net">Logstash</a>, Apache Flume or fluentd can consume and unify log data from different sources (e.g. files, syslog, network), can trigger alerts or index the log stream in order to make them searchable. Now, with tools like Kibana, log data of a system of systems can be easily analyzed and visualized. Correlation IDs contained in the logs can be used to trace certain business-related requests across multiple distributed systems easily.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Using such features makes the problem analysis easier and more data is available in a standardized fashion.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-18',
                  id: '_experiences_18',
                  sectionType: 'section',
                  index: 2,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '3',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Most projects write log files in a more or less sophisticated fashion, in many\ncases log messages are phrased in a rather unstructured way. It turns out that\na well-designed logging concept helps to make the log stream easier to understand.\nThis concept should provide some guidelines regarding which log level should be\nused in which situation, how the wording of log messages could be unified and\nwhich additional log levels or markers shall be used for what purpose.</p>\n</div>'
                    },
                    {
                      type: 'admonition',
                      content:
                        '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="paragraph">\n<p>In a customer project we used an object-relational-mapping (ORM) tool for a\ndatabase independent access layer. The data access was inherently transactional\nand created a lot of database traffic so that deadlock situations on the database\nwere expected and properly handled with a delayed retry mechanism.</p>\n</div>\n<div class="paragraph">\n<p>While this approach worked quite well, we got frequently complaints from the\noperations team, which reported a number of ERROR log messages along with longish\nstacktraces that set their alarm bells off. These log messages were written by\nthe ORM tool whenever a DB deadlock was experienced. Since the application could\nperfectly deal with this situation this was not an error anymore and should have\nbeen logged as WARN or INFO at best. The problem was that a third-party\nframework used the wrong log level and was thus causing a lot of confusion.\nBear this in mind when working on a framework-like codebase and thinking about\nlog levels.</p>\n</div>\n</td>\n</tr>\n</table>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'risks-7',
                  id: '_risks_7',
                  sectionType: 'section',
                  index: 3,
                  title: 'Risks',
                  titlePlain: 'Risks',
                  numeral: '4',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>An excessive amount of log statements is likely to have negative impact on the\napplication&#8217;s performance. The impact is however manageable by using</p>\n<div class="ulist">\n<ul>\n<li>\n<p>guarded log statements that will only be constructed if a certain log level\nis enabled,</p>\n</li>\n<li>\n<p>asynchronous appenders (like the disruptor-based approach used by <a href="http://logging.apache.org/log4j/2.x/">Log4J 2</a>),</p>\n</li>\n<li>\n<p>context-sensitive logging (e.g. to enable debug logs only for a certain scenario or user).</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>Collecting and indexing a huge amount of log data requires additional storage,\napprox. by factor 10. Think of retention policies in order to make the data\nstream manageable.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-23',
                  id: '_applicability_23',
                  sectionType: 'section',
                  index: 4,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '5',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>This pattern should always be considered.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-14',
                  id: '_consequences_14',
                  sectionType: 'section',
                  index: 5,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '6',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Improved understanding of the runtime behavior of an application or a\nsystem of systems.</p>\n</li>\n<li>\n<p>Log messages are well-structured and more meaningful as they carry more\ncontext information (in case MDCs are used).</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'also-known-as-13',
                  id: '_also_known_as_13',
                  sectionType: 'section',
                  index: 6,
                  title: 'Also Known As',
                  titlePlain: 'Also Known As',
                  numeral: '7',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'related-patterns-26',
                  id: '_related_patterns_26',
                  sectionType: 'section',
                  index: 7,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>This pattern is an important enabler for a successful <a href="#Runtime-Artifact-Analysis">[Runtime-Artifact-Analysis]</a>.</p>\n</li>\n<li>\n<p><a href="#Instrument-System">Section 2.3.10, &#8220;<span class="pattern">Instrument System</span>&#8221;</a> is very similar to this pattern, however it is limited to\na temporary instrumentation that is needed during the Analysis phase to identify or scope a certain problem\nthat cannot be isolated without modifying the code.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-21',
                  id: '_references_21',
                  sectionType: 'section',
                  index: 8,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '9',
                  children: []
                }
              ]
            },
            {
              type: 'section',
              slug: 'interface-segregation-principle',
              id: 'Interface-Segregation-Principle',
              sectionType: 'section',
              index: 4,
              title:
                '<span class="pattern">Interface Segregation Principle</span>',
              titlePlain: 'Interface Segregation Principle',
              numeral: '5',
              children: [
                {
                  type: 'section',
                  slug: 'intent-44',
                  id: '_intent_44',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Reduce coupling between clients and service providers.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-43',
                  id: '_description_43',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Service components may provide more functionality than required by one client.\nTo remove the client&#8217;s dependency from functionality not required introduce interfaces that are tailored\nto the client&#8217;s needs.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-24',
                  id: '_applicability_24',
                  sectionType: 'section',
                  index: 2,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '3',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Apply when</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>clients only require a restricted functionality from a complex service,</p>\n</li>\n<li>\n<p>you have to deal with low cohesion components you cannot change</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-15',
                  id: '_consequences_15',
                  sectionType: 'section',
                  index: 3,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '4',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Reduces coupling between client and service providers. Changing the service provider interface will affect fewer clients.</p>\n</li>\n<li>\n<p>Introduces additional interfaces that must be maintained.</p>\n</li>\n<li>\n<p>You have to find a good compromise between "good client fit" and the number of interfaces.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'also-known-as-14',
                  id: '_also_known_as_14',
                  sectionType: 'section',
                  index: 4,
                  title: 'Also Known As',
                  titlePlain: 'Also Known As',
                  numeral: '5',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'related-practices-5',
                  id: '_related_practices_5',
                  sectionType: 'section',
                  index: 5,
                  title: 'Related Practices',
                  titlePlain: 'Related Practices',
                  numeral: '6',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>If <a href="#Never-Change-Running-System">[Never-Change-Running-System]</a> is a must meaning a service component or its API must not be changed, consider using</p>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#Manage-Complex-Client-Dependencies-With-Facade">Section 4.10.7, &#8220;<span class="pattern">Manage Complex Client Dependencies With Facade</span>&#8221;</a> and</p>\n</li>\n<li>\n<p><a href="#Front-End-Switch">[Front-End-Switch]</a></p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-22',
                  id: '_references_22',
                  sectionType: 'section',
                  index: 6,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '7',
                  children: []
                }
              ]
            },
            {
              type: 'section',
              slug: 'introduce-boy-scout-rule',
              id: 'Introduce-Boy-Scout-Rule',
              sectionType: 'section',
              index: 5,
              title: '<span class="pattern">Introduce Boy Scout Rule</span>',
              titlePlain: 'Introduce Boy Scout Rule',
              numeral: '6',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>The &#8220;Boy Scout Rule&#8221; for software development basically states that we</p>\n</div>'
                },
                {
                  type: 'quote',
                  content:
                    '<div class="quoteblock">\n<blockquote>\n&#8220;Always check a module in cleaner than when you checked it out.&#8221;.\n</blockquote>\n<div class="attribution">\n&#8212; Robert C. Martin\n</div>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Uncle Bob (Robert C. Martin) proposed this adoption of the rule from the boy\nscout rulebook which reads &#8220;Try and leave this world a little better than you\nfound it.&#8221; for the software development world in an article in Kevlin Henney&#8217;s\n&#8220;97 Things a Programmer Should Know&#8221; <a href="#Henney">[Henney]</a>.</p>\n</div>'
                },
                {
                  type: 'section',
                  slug: 'intent-45',
                  id: '_intent_45',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Enable cross-cutting architectural improvement even if it is not feasible to change the whole codebase.</p>\n</div>'
                    },
                    {
                      type: 'admonition',
                      content:
                        '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\nOften the introduction of concepts like layering is deemed <em>“impossible”</em> due to the huge codebase that would be affected. In these cases the Boy Scout Rule approach is a lightweight way to enhance the code quality one day at a time.\n</td>\n</tr>\n</table>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-44',
                  id: '_description_44',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Drafting from an <a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a>, define a specific rule set\non how to improve the contents of specific file types.</p>\n</li>\n<li>\n<p>Specify how much effort should be allowed to perform each specific\nclean-up operation</p>\n</li>\n<li>\n<p>Specify how to proceed if the cleanup takes up too much time</p>\n</li>\n<li>\n<p>Revisit the rule set regularly</p>\n</li>\n<li>\n<p>Install a mechanism to ensure that the things that where too big to\nbe cleaned up while visiting the file will end up in the\n<a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a>.</p>\n</li>\n</ul>\n</div>'
                    },
                    {
                      type: 'admonition',
                      content:
                        '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="title">Example Boy Scout Rule agreement</div>\n<div class="paragraph">\n<p>This is a very concrete agreement from a specific project - yours\nshould look rather different.</p>\n</div>\n<div class="paragraph">\n<p><strong>Boy Scout Rule agreement for project X from 2014-02-19 onwards:</strong>\n. Apply defined source code formatting (via IDE) to adhere to coding style<br>\nIf the formatting introduces errors and those errors can not be fixed within 10\nMinutes revert changes and add the file to the "redo formatting list" (e.g. add\nan TODO REFORMAT comment, if such a comment already exist add an exclamation mark\neach time you handle the file)</p>\n</div>\n<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Move SQL strings to the db-encapsulation layer and replace the former\ndirect database calls by appropriate calls to the correct architecture elements<br>\nIf this takes longer than 20 minutes revert changes and add file to the list\n"difficulties with database extraction" (e.g. add an TODO DB-EXTRACT comment,\nif such a comment already exist add an exclamation mark each time you handle\nthe file)</p>\n</li>\n<li>\n<p>Remove magic numbers from source code and replace them with\n  constants (e.g. replace if (item.id &gt; 99) with if (item.id &gt;\nItem.COMPOUND_ITEMS_THRESHHOLD).</p>\n</li>\n<li>\n<p>If time allows replace the former "magic number conditionals" with a\n  function on a business logic level (e.g. replace if (item.id &gt;\nItem.COMPOUND_ITEMS_THRESHHOLD)\n  with if (item.is_compound())</p>\n</li>\n</ol>\n</div>\n</td>\n</tr>\n</table>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-19',
                  id: '_experiences_19',
                  sectionType: 'section',
                  index: 2,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '3',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Introducing the Boy Scout Rule on a heavily deteriorated code base\ninduces heavy payback on <a href="https://en.wikipedia.org/wiki/Technical_debt">technical debt</a> and often gets challenged\nby team members and senior management. It is important to point out\nthat the extended time spent on fixing the artifacts "as the teams\ngoes" actually is the <em>explicit</em> payment of the technical debt interest rate.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'risks-8',
                  id: '_risks_8',
                  sectionType: 'section',
                  index: 3,
                  title: 'Risks',
                  titlePlain: 'Risks',
                  numeral: '4',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Sometimes the Boy Scout Rule can be taken as a means by itself. In\nthese cases the higher goals tend to be forgotten and thus</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-25',
                  id: '_applicability_25',
                  sectionType: 'section',
                  index: 4,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '5',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The pattern &#8220;Introduce Boy Scout Rule&#8221; can always be applied.<br>\nSome of the most effective uses are</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>unstructured code (no layers, no separation of concerns etc.)</p>\n</li>\n<li>\n<p>systematic weaknesses (insecure logging, insecure handling of\ndatabase inserts etc.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-16',
                  id: '_consequences_16',
                  sectionType: 'section',
                  index: 5,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '6',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The introduction the Boy Scout Rule often proved to enable structural\nimprovements as a prerequisite for higher level architectural\nimprovements. Also it heightens the team&#8217;s awareness of good practices\nin their code base.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The introduction of the Boy Scout Rule leads to a dramatic shift in\nthe distribution of the code quality because those parts of the system\nthat get changed the most also get the most care. For more stable\nparts of the system other approaches have to be utilized.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'also-known-as-15',
                  id: '_also_known_as_15',
                  sectionType: 'section',
                  index: 6,
                  title: 'Also Known As',
                  titlePlain: 'Also Known As',
                  numeral: '7',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'related-patterns-27',
                  id: '_related_patterns_27',
                  sectionType: 'section',
                  index: 7,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Refactoring-Plan">[Refactoring-Plan]</a>, as an alternative or complimenting approach</p>\n</li>\n<li>\n<p><a href="#Introduce-Layering">[Introduce-Layering]</a> can be performed using the Boy Scout Rule</p>\n</li>\n<li>\n<p><a href="#Anticorruption-Layer">Section 4.10.2, &#8220;<span class="pattern">Anticorruption Layer</span>&#8221;</a> can be performed using the Boy Scout Rule</p>\n</li>\n<li>\n<p>An <a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a> should be the basis for the tasks\nperformed when applying the Boy Scout Rule</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-23',
                  id: '_references_23',
                  sectionType: 'section',
                  index: 8,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '9',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The original description of the boy scout rule can be found online at <a href="#Boy-Scout-Rule-article">[Boy-Scout-Rule-article]</a>.</p>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'manage-complex-client-dependencies-with-facade',
              id: 'Manage-Complex-Client-Dependencies-With-Facade',
              sectionType: 'section',
              index: 6,
              title:
                '<span class="pattern">Manage Complex Client Dependencies With Facade</span>',
              titlePlain: 'Manage Complex Client Dependencies With Facade',
              numeral: '7',
              children: [
                {
                  type: 'section',
                  slug: 'intent-46',
                  id: '_intent_46',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Simplify the interaction of a client with a set of service components.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-45',
                  id: '_description_45',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>When clients use a set of components with repeating patterns these\ninteraction patterns are implemented in a Facade component.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The interface the Facade provides to the client is tailored to the client&#8217;s\nneed. Technical details that are specific for the service component implementations\nare handled inside the facade.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-20',
                  id: '_experiences_20',
                  sectionType: 'section',
                  index: 2,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '3',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Consider a Facade if you must use generic frameworks or systems you cannot modify\ne.g. legacy systems.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-26',
                  id: '_applicability_26',
                  sectionType: 'section',
                  index: 3,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '4',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Apply this pattern when clients use a set of components in stereotypcial fashion.\nThings that can be handled by a facade:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>recurring control flows</p>\n</li>\n<li>\n<p>technical details</p>\n<div class="ulist">\n<ul>\n<li>\n<p>configuration of components</p>\n</li>\n<li>\n<p>resource lookup</p>\n</li>\n<li>\n<p>error handling</p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-17',
                  id: '_consequences_17',
                  sectionType: 'section',
                  index: 4,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '5',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Enhances Information Hiding. Clients do not need information about the components\' technical detail.</p>\n</li>\n<li>\n<p>Supports DRY principle: complex interactions are implemented in one place. No need to reimplement this in different clients.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'also-known-as-16',
                  id: '_also_known_as_16',
                  sectionType: 'section',
                  index: 5,
                  title: 'Also Known As',
                  titlePlain: 'Also Known As',
                  numeral: '6',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'related-patterns-28',
                  id: '_related_patterns_28',
                  sectionType: 'section',
                  index: 6,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '7',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Interface-Segregation-Principle">Section 4.10.5, &#8220;<span class="pattern">Interface Segregation Principle</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-24',
                  id: '_references_24',
                  sectionType: 'section',
                  index: 7,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '8',
                  children: []
                }
              ]
            },
            {
              type: 'section',
              slug: 'measure',
              id: 'Measure',
              sectionType: 'section',
              index: 7,
              title: '<span class="pattern">Measure</span>',
              titlePlain: 'Measure',
              numeral: '8',
              children: [
                {
                  type: 'section',
                  slug: 'intent-47',
                  id: '_intent_47',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>If you don’t measure it, you can’t optimize it.&#8201;&#8212;&#8201;Coda Hale</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-46',
                  id: '_description_46',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>TODO: explain different kind of metrics (static-code, runtime, organisational&#8230;&#8203;)</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-21',
                  id: '_experiences_21',
                  sectionType: 'section',
                  index: 2,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '3',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'risks-9',
                  id: '_risks_9',
                  sectionType: 'section',
                  index: 3,
                  title: 'Risks',
                  titlePlain: 'Risks',
                  numeral: '4',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>If you measure too many different parameters or attributes, you might get drown in numbers.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-27',
                  id: '_applicability_27',
                  sectionType: 'section',
                  index: 4,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '5',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>This pattern should always be considered.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-18',
                  id: '_consequences_18',
                  sectionType: 'section',
                  index: 5,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '6',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'also-known-as-17',
                  id: '_also_known_as_17',
                  sectionType: 'section',
                  index: 6,
                  title: 'Also Known As',
                  titlePlain: 'Also Known As',
                  numeral: '7',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>quantitative analysis</p>\n</li>\n<li>\n<p>quantitative runtime analysis</p>\n</li>\n<li>\n<p>profiling</p>\n</li>\n<li>\n<p>organisational metrics</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'related-patterns-29',
                  id: '_related_patterns_29',
                  sectionType: 'section',
                  index: 7,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>This pattern is an important enabler for a successful <a href="#Runtime-Artifact-Analysis">[Runtime-Artifact-Analysis]</a> or performance analysis.</p>\n</li>\n<li>\n<p><a href="#Instrument-System">Section 2.3.10, &#8220;<span class="pattern">Instrument System</span>&#8221;</a> and <a href="https://en.wikipedia.org/wiki/Profiling_(computer_programming)">profiling</a> are very similar to this pattern, however they are limited to a temporary instrumentation that is needed during the Analysis phase to identify or scope a certain problem that cannot be isolated without modifying the code.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-25',
                  id: '_references_25',
                  sectionType: 'section',
                  index: 8,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '9',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="https://www.youtube.com/watch?v=czes-oa0yik">Coda Hale Talk on "Metrics-Everywhere"</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'use-invariants-to-kill-zombies',
              id: 'Use-Invariants-To-Kill-Zombies',
              sectionType: 'section',
              index: 8,
              title:
                '<span class="pattern">Use Invariants To Kill Zombies</span>',
              titlePlain: 'Use Invariants To Kill Zombies',
              numeral: '9',
              children: [
                {
                  type: 'section',
                  slug: 'intent-48',
                  id: '_intent_48',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Provide a safe approach in situations where it seems to dangerous to delete\ncode or whole modules from a huge system because <a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a> can&#8217;t\nrecognize whether the code is still in use or not.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-47',
                  id: '_description_47',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Oftentimes old systems contain lots of code that probably is no longer in use\nbut still has to be tended to. Such code puts a burden on every cross-cutting\nchange - from the year-2000 efforts of the late nineties to the upcoming\nend-of-unix-system date rewrites. New processor architectures, new versions of\noperating systems with a different handling of the byte-order and all kinds of\nexternal regulations are just some examples for things that make it necessary to\nmake changes to <strong>all</strong> existing code&#8201;&#8212;&#8201;whether it is still in use or not. This\ncode is deemed dead, but like the proverbial zombie it still goes around and\nmunches on everybody&#8217;s brain when it is time for the next system-wide change.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>This kind of zombie can be killed more safely by employing invariants.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>An invariant&#8201;&#8212;&#8201;as described by Bertrand Meyer in\n<a href="#Object-Oriented-Software-Construction">[Object-Oriented-Software-Construction]</a>&#8201;&#8212;&#8201;is a logical expression that always\nis true for a given set of circumstances. He proposes to actually verify those\ninvariants <em>in the code itself</em>. What happens if the invariant does not hold\ntrue is open to discussion - in some circumstances it&#8217;s best to <a href="#Fail-Fast">fail-fast</a>\nbut when improving legacy software with hundreds or thousand of users this often\nis not an option.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>So if we want to make sure we can delete this code our invariant is simple:</p>\n</div>'
                    },
                    {
                      type: 'listing',
                      content:
                        '<div class="listingblock">\n<div class="title">Pseudo-Code</div>\n<div class="content">\n<pre class="highlight"><code class="language-java" data-lang="java">assertTrue(false, "We should not be here" + __FILE__ + __LINE__ );</code></pre>\n</div>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>How to implement assertTrue() for this case is hard, though.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>As just pointed out, the simple “let the program die” approach might not be\nappropriate.<br>\nJust logging the fact might not have a sufficient effect.<br>\nSending an e-mail requires at least some infrastructure (and infrastructure\ncode)<br>\nSending an SNMP-Trap might not be feasible in the environment.<br></p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>And so on.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>This is a classical situation that calls for trade-off decisions, but since this\npiece of code should never be called anyway things like sending an e-mail or\ncalling some web services are not so far out of the question.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>If a huge number of deployments is possible without problems it can also be\nfeasible to deescalate slowly and use more and more intrusive ways to handle\nthe failed invariant&#8201;&#8212;&#8201;write a log entry in the first two weeks, send an SNMP\ntrap in the next four weeks and after that send an e-mail (although it doesn&#8217;t\nhurt to keep the logging turned on).</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-22',
                  id: '_experiences_22',
                  sectionType: 'section',
                  index: 2,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '3',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>In several cases this approach helped to delete up to 50% of the code base.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'risks-10',
                  id: '_risks_10',
                  sectionType: 'section',
                  index: 3,
                  title: 'Risks',
                  titlePlain: 'Risks',
                  numeral: '4',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Sometimes the Zombie is buried to early&#8201;&#8212;&#8201;to be on the safe side the\npresumably dead code should live through at least each season. For huge\nsystems that really means 366 days.</p>\n</li>\n<li>\n<p>The presumably dead code might be called <em>much</em> more often than anticipated -\nin these cases a highly invasive reaction, like sending an e-mail, can lead to\nside-effects that are close to a denial-of-service attack.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-28',
                  id: '_applicability_28',
                  sectionType: 'section',
                  index: 4,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '5',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>This pattern can be applied whenever the code-base has gotten too big and there\nare parts of the system that are perhaps unused (e.g. dead) but still add to the\nweight of the system.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-19',
                  id: '_consequences_19',
                  sectionType: 'section',
                  index: 5,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '6',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Dead code can be safely deleted</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'also-known-as-18',
                  id: '_also_known_as_18',
                  sectionType: 'section',
                  index: 6,
                  title: 'Also Known As',
                  titlePlain: 'Also Known As',
                  numeral: '7',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'related-patterns-30',
                  id: '_related_patterns_30',
                  sectionType: 'section',
                  index: 7,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Use <a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a> to find candidates, entry points and exit points.</p>\n</li>\n<li>\n<p>Using invariants to kill zombies is a special case of <a href="#Assertions">[Assertions]</a> in the\ncontext of architecture improvement.</p>\n</li>\n<li>\n<p>Introducing invariants to verify that the code is really dead is a specific\nway to make <a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a>s</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-26',
                  id: '_references_26',
                  sectionType: 'section',
                  index: 8,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '9',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>Invariants (and other <a href="#Assertions">[Assertions]</a>) have been made popular by Bertrand Meyer\nin his seminal book <a href="#Object-Oriented-Software-Construction">[Object-Oriented-Software-Construction]</a></p>\n</li>\n<li>\n<p>Brian Foote references Zombie code in <a href="#Big-Ball-Of-Mud">[Big-Ball-Of-Mud]</a></p>\n</li>\n<li>\n<p>Dead code is an alternate name for the lava-flow anti pattern <a href="#Brown">[Brown]</a>.</p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            },
            {
              type: 'section',
              slug: 'improve-feedback-from-and-for-stakeholders',
              id: 'Improve-feedback-from-and-for-stakeholders',
              sectionType: 'section',
              index: 9,
              title:
                '<span class="pattern">Improve Feedback From And For Stakeholders</span>',
              titlePlain: 'Improve Feedback From And For Stakeholders',
              numeral: '10',
              children: [
                {
                  type: 'section',
                  slug: 'intent-49',
                  id: '_intent_49',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Effectively collect feedback from various stakeholders.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-48',
                  id: '_description_48',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>It is expensive to collect information (problems, opinions etc.) from stakeholders (customers, support staff, developers, backoffice etc.) via surveys, interviews or meetings (e.g. <a id="atam"></a>). There are possibilities to offer low-threshold services for involved people to give feedback. Possibilities e.g. are:</p>\n</div>'
                    },
                    {
                      type: 'olist',
                      content:
                        '<div class="olist loweralpha">\n<ol class="loweralpha" type="a" start="1">\n<li>\n<p>Tracking systems in the user interface</p>\n</li>\n<li>\n<p>Easy-to-use contact possibilities in the system&#8217;s user interface</p>\n</li>\n<li>\n<p>Ticketing/issue management software</p>\n</li>\n<li>\n<p>Wikis</p>\n</li>\n<li>\n<p>System-supported surveys</p>\n</li>\n</ol>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>This information might help in finding issues, calculate their costs and prioritize it. Additionally to quantitative analysis, qualitative analysis might give improvement hints.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-23',
                  id: '_experiences_23',
                  sectionType: 'section',
                  index: 2,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '3',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'risks-11',
                  id: '_risks_11',
                  sectionType: 'section',
                  index: 3,
                  title: 'Risks',
                  titlePlain: 'Risks',
                  numeral: '4',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Since most improvements are based on voluntariness (all examples except a), the information might be biased.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-29',
                  id: '_applicability_29',
                  sectionType: 'section',
                  index: 4,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '5',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Many of the tools supporting this use case are used for a group of stakeholders and can possibly be used for others as well (e.g. ticketing systems or Wikis for developers in open source projects).</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-20',
                  id: '_consequences_20',
                  sectionType: 'section',
                  index: 5,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '6',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Stakeholders give valuable information, their satisfaction with the system increases.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'also-known-as-19',
                  id: '_also_known_as_19',
                  sectionType: 'section',
                  index: 6,
                  title: 'Also Known As',
                  titlePlain: 'Also Known As',
                  numeral: '7',
                  children: []
                },
                {
                  type: 'section',
                  slug: 'related-patterns-31',
                  id: '_related_patterns_31',
                  sectionType: 'section',
                  index: 7,
                  title: 'Related Patterns',
                  titlePlain: 'Related Patterns',
                  numeral: '8',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Context-Analysis">Section 2.3.3, &#8220;<span class="pattern">Context-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Issue-Tracker-Analysis">Section 2.3.11, &#8220;<span class="pattern">Issue-Tracker-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Pre-Interview-Questionnaire">Section 2.3.16, &#8220;<span class="pattern">Pre Interview Questionnaire</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Questionnaire">Section 2.3.18, &#8220;<span class="pattern">Questionnaire</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#User-Analysis">Section 2.3.27, &#8220;<span class="pattern">User-Analysis</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-27',
                  id: '_references_27',
                  sectionType: 'section',
                  index: 8,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '9',
                  children: []
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'improve-technical-infrastructure',
          id: 'improve-technical-infrastructure',
          sectionType: 'section',
          index: 10,
          title: 'Practices to Improve Technical Infrastructure',
          titlePlain: 'Practices to Improve Technical Infrastructure',
          numeral: '11',
          children: [
            {
              type: 'image',
              content:
                '<div id="fig-improve-technical-infrastructure" class="imageblock">\n<div class="content">\n<img src="./images/improve-practice-technical-infrastructure.png" alt="Practices to Improve Technical Infrastructure">\n</div>\n<div class="title">Figure 34. Practices to improve technical infrastructure</div>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>For an overview of other improvement practices,\nsee <a href="#improve-practices-overview">Section 4.5, &#8220;Improvement Practices (Overview)&#8221;</a>.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'improve-analyzability',
          id: 'improve-analyzability',
          sectionType: 'section',
          index: 11,
          title: 'Practices to Improve Analyzability and Evaluability',
          titlePlain: 'Practices to Improve Analyzability and Evaluability',
          numeral: '12',
          children: [
            {
              type: 'image',
              content:
                '<div id="fig-improve-analyzability" class="imageblock">\n<div class="content">\n<img src="./images/improve-practice-analyzability.png" alt="Practices for Improve Analyzability">\n</div>\n<div class="title">Figure 35. Practices to improve analyzability</div>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>For an overview of other improvement practices,\nsee <a href="#improve-practices-overview">Section 4.5, &#8220;Improvement Practices (Overview)&#8221;</a>.</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'analyzability-and-evaluability-practices-in-detail',
              id: '_analyzability_and_evaluability_practices_in_detail',
              sectionType: 'section',
              index: 0,
              title: 'Analyzability and Evaluability Practices in Detail',
              titlePlain: 'Analyzability and Evaluability Practices in Detail',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>(given in alphabetical order)</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Docs-As-Code">Section 4.12.2, &#8220;<span class="pattern">Docs-As-Code</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'docs-as-code',
              id: 'Docs-As-Code',
              sectionType: 'section',
              index: 1,
              title: '<span class="pattern">Docs-As-Code</span>',
              titlePlain: 'Docs-As-Code',
              numeral: '2',
              children: [
                {
                  type: 'section',
                  slug: 'intent-50',
                  id: '_intent_50',
                  sectionType: 'section',
                  index: 0,
                  title: 'Intent',
                  titlePlain: 'Intent',
                  numeral: '1',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Docs-As-Code is a documentation approach that raises developer-related documentation to the same importance as source code.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'description-49',
                  id: '_description_49',
                  sectionType: 'section',
                  index: 1,
                  title: 'Description',
                  titlePlain: 'Description',
                  numeral: '2',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Developer-related documentation of software systems is often neglected. In many situations, it&#8217;s not the lack of ideas for meaningful content that prevents documentation but the way developers have to do it: Separate programs have to be started and other work processes have to be followed. These and many more other distractions lead to long context switch times.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The additional effort could be a reason for a rather negative attitude towards documentation on the developer side. As a result, the developer&#8217;s documentation is neglected and becomes obsolete with the time until it can no longer be used for anything at all. Unfortunately, missing or outdated documentation has negative consequences for the understandability of the entire software system.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The core idea of Docs-As-Code is to use the same tools and processes for creating documentation as for creating source code. This ensures that there are no high costs for context switches.</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>There are a few practices that ensure that the acceptance of documentation increases in software development teams:</p>\n</div>'
                    },
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p>The documentation format is a simple, text-based format that can be opened and edited in any integrated development environment.</p>\n</li>\n<li>\n<p>The necessary formatting of the texts can be done textually by a corresponding formatting syntax.</p>\n</li>\n<li>\n<p>Diagrams can also be created with a pure text-based approach.</p>\n</li>\n<li>\n<p>Changes to the texts are comparable to standard diffing tools.</p>\n</li>\n<li>\n<p>The documentation is placed directly next to the source code in the same version control system.</p>\n</li>\n<li>\n<p>The creation of the documentation artifacts (such as PDFs or HTML pages) that should be delivered is completely automated.</p>\n</li>\n<li>\n<p>Automated tests check the structure and links within the document when documentation artifacts are created.</p>\n</li>\n<li>\n<p>The same code review process and tooling is used for checking the documentation as well as for source code.</p>\n</li>\n<li>\n<p>Documentation can be maintained in parallel for different versions and merged if required.</p>\n</li>\n<li>\n<p>Optionally: The additional needed documentation is maintained in the same ticket system and implemented with the same processes as the implementation of new features for the software.</p>\n</li>\n</ul>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>The seamless integration of documentation creation into the software development process means that there are no longer any obstacles for software developers to document necessary facts. By reusing the tools and processes, the documentation work gets the same importance as the writing of source code. Work on documentation becomes as visible as newly written code. The automated creation of documentation artifacts or websites makes the current status of the documentation more clear to other stakeholders such as product owners or project managers.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'experiences-24',
                  id: '_experiences_24',
                  sectionType: 'section',
                  index: 2,
                  title: 'Experiences',
                  titlePlain: 'Experiences',
                  numeral: '3',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>When documentation and source code are in the very same code repository, developers can be kind of forced to update the documentation when they write new features or update existing ones. With the help of pull requests and code review techniques, it can be checked very quickly if necessary documentation updates were made.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'applicability-30',
                  id: '_applicability_30',
                  sectionType: 'section',
                  index: 3,
                  title: 'Applicability',
                  titlePlain: 'Applicability',
                  numeral: '4',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Apply this pattern when there is a clear lack of documentation. Start by defining the minimum required scope of documentation for new features (e. g. take some parts of the arc42 documentation template as a guidance if developers complain that they don&#8217;t know what to document).</p>\n</div>'
                    },
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Show the documentation in sprint reviews to make non-technical developers aware of the newly created content.</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'consequences-21',
                  id: '_consequences_21',
                  sectionType: 'section',
                  index: 4,
                  title: 'Consequences',
                  titlePlain: 'Consequences',
                  numeral: '5',
                  children: [
                    {
                      type: 'paragraph',
                      content:
                        '<div class="paragraph">\n<p>Can lead to grumbling at the beginning (at the latest when the first pull request is declined due to missing documentation).</p>\n</div>'
                    }
                  ]
                },
                {
                  type: 'section',
                  slug: 'references-28',
                  id: '_references_28',
                  sectionType: 'section',
                  index: 5,
                  title: 'References',
                  titlePlain: 'References',
                  numeral: '6',
                  children: [
                    {
                      type: 'ulist',
                      content:
                        '<div class="ulist">\n<ul>\n<li>\n<p><a href="https://docs-as-co.de/" class="bare">https://docs-as-co.de/</a></p>\n</li>\n<li>\n<p><a href="https://doctoolchain.github.io/docToolchain/" class="bare">https://doctoolchain.github.io/docToolchain/</a></p>\n</li>\n<li>\n<p><a href="http://www.writethedocs.org/guide/docs-as-code/" class="bare">http://www.writethedocs.org/guide/docs-as-code/</a></p>\n</li>\n</ul>\n</div>'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      slug: 'crosscutting',
      id: 'Crosscutting',
      sectionType: 'section',
      index: 5,
      title: 'Cross-Cutting Practices and Patterns',
      titlePlain: 'Cross-Cutting Practices and Patterns',
      numeral: '5',
      children: [
        {
          type: 'image',
          content:
            '<div class="imageblock">\n<div class="content">\n<img src="./images/01-intro-and-overview/crosscutting-phase.png" alt="Visualization of the crosscutting phase">\n</div>\n<div class="title">Figure 36. Crosscutting-Phase</div>\n</div>'
        },
        {
          type: 'section',
          slug: 'goals-4',
          id: '_goals_4',
          sectionType: 'section',
          index: 0,
          title: 'Goals',
          titlePlain: 'Goals',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content: '<div class="paragraph">\n<p>to be done.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'overview-2',
          id: '_overview_2',
          sectionType: 'section',
          index: 1,
          title: 'Overview',
          titlePlain: 'Overview',
          numeral: '2',
          children: [
            {
              type: 'pass',
              content:
                '<map name="CrosscuttingPracticesOverview">\n\t<area shape=rect coords="341,3,478,50" href="#Architectural-Understanding">\n\t<area shape=poly coords="218,378,329,378,338,382,338,380,342,384,342,382,347,386,347,440,338,445,226,445,218,442,213,440,209,436,209,382,218,378" href="#Issue-List">\n\t<area shape=poly coords="517,376,641,376,651,381,651,379,655,383,655,381,660,385,660,440,651,445,526,445,517,442,512,440,507,436,507,381,517,376" href="#Improvement-Backlog">\n\t<area shape=rect coords="3,305,130,352" href="#Explicit-Assumption">\n\t<area shape=rect coords="501,167,669,235" href="#Collect-Opportunities-For-Improvement">\n\t<area shape=rect coords="218,181,321,235" href="#Collect-Issues">\n</map>\n\n<img border=0 src="images/crosscutting-patterns-overview.png"\nusemap="#CrosscuttingPracticesOverview", alt="Overview of the crosscutting patterns">'
            }
          ]
        },
        {
          type: 'section',
          slug: 'how-it-works-2',
          id: '_how_it_works_2',
          sectionType: 'section',
          index: 2,
          title: 'How it works',
          titlePlain: 'How it works',
          numeral: '3',
          children: [
            {
              type: 'olist',
              content:
                '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Start with collecting issues - mainly in <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a> phase. Based upon your findings here, maintain an <a href="#Issue-List">Section 5.15, &#8220;<span class="pattern">Issue List</span>&#8221;</a></p>\n</li>\n<li>\n<p>Evaluate those, determine <em>values</em>, preferably cost. This ensures you later solve <em>important</em> and <em>relevant</em> issues.</p>\n</li>\n<li>\n<p><a href="#Collect-Opportunities-For-Improvement">Section 5.6, &#8220;<span class="pattern">Collect Opportunities for Improvement</span>&#8221;</a> and evaluate those too.</p>\n</li>\n<li>\n<p>Align issues and potential improvements, <a href="#Plan-Improvements">Section 5.16, &#8220;<span class="pattern">Plan Improvements</span>&#8221;</a></p>\n</li>\n<li>\n<p>Continously strive to increase your <a href="#Architectural-Understanding">Section 5.5, &#8220;<span class="pattern">Architectural-Understanding</span>&#8221;</a>, as this\nfacilitates identification of additional issues and improvements.</p>\n</li>\n</ol>\n</div>'
            },
            {
              type: 'image',
              content:
                '<div id="issues-and-improvements" class="imageblock">\n<div class="content">\n<img src="./images/issues-and-improvements.png" alt="issues and improvements">\n</div>\n<div class="title">Figure 37. Collect issues and improvements</div>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'cross-cutting-practices',
          id: '_cross_cutting_practices',
          sectionType: 'section',
          index: 3,
          title: 'Cross-Cutting Practices',
          titlePlain: 'Cross-Cutting Practices',
          numeral: '4',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>(given in alphabetical order)</p>\n</div>'
            },
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Architectural-Understanding">Section 5.5, &#8220;<span class="pattern">Architectural-Understanding</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Collect-Opportunities-For-Improvement">Section 5.6, &#8220;<span class="pattern">Collect Opportunities for Improvement</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Collect-Issues">Section 5.7, &#8220;<span class="pattern">Collect Issues</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Expect-Denial">Section 5.8, &#8220;<span class="pattern">Expect Denial</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a> (work-in-progress: move to Fundamentals?)</p>\n</li>\n<li>\n<p><a href="#Fail-Fast">Section 5.10, &#8220;<span class="pattern">Fail Fast</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Fast-Feedback">Section 5.11, &#8220;<span class="pattern">Fast Feedback</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Impact-Analysis">Section 5.12, &#8220;<span class="pattern">Impact Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Issue-List">Section 5.15, &#8220;<span class="pattern">Issue List</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Plan-Improvements">Section 5.16, &#8220;<span class="pattern">Plan Improvements</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Report-Structure">Section 5.17, &#8220;<span class="pattern">Report-Structure</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Slide-Or-Write">Section 5.19, &#8220;<span class="pattern">Slide or Write</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Traceability">Section 5.20, &#8220;<span class="pattern">Traceability</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Widen-Your-Options">Section 5.21, &#8220;<span class="pattern">Widen Your Options</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
            },
            {
              type: 'pass',
              content:
                '<map name="CrosscuttingPractices">\n   \t<area shape=poly coords="52,443,133,443,139,446,139,444,142,447,142,446,145,449,145,488,139,491,59,491,52,489,49,488,46,485,46,446,52,443" href="#Goals-Constraints">\n\t<area shape=rect coords="302,477,412,526" href="#Plan-Improvements">\n\t<area shape=rect coords="11,204,91,238" href="#Widen-Your-Options">\n\t<area shape=rect coords="286,82,385,116" href="#Architectural-Understanding">\n\t<area shape=poly coords="215,375,295,375,301,378,301,377,305,380,305,378,308,381,308,420,301,423,221,423,215,422,212,420,209,417,209,378,215,375" href="#Issue-List">\n\t<area shape=rect coords="314,13,394,47" href="#Traceability">\n\t<area shape=rect coords="19,62,73,98" href="#Slide-Or-Write">\n\t<area shape=rect coords="90,354,174,403" href="#Separate-Cause-From-Effect">\n\t<area shape=rect coords="43,546,117,583" href="#Fast-Feedback">\n\t<area shape=rect coords="134,546,206,583" href="#Fail-Fast">\n\t<area shape=poly coords="409,374,498,374,505,377,505,376,509,379,509,377,512,380,512,420,505,423,416,423,409,422,405,420,402,417,402,377,409,374" href="#Improvement-Backlog">\n\t<area shape=rect coords="19,296,91,326" href="#Explicit-Assumption">\n\t<area shape=rect coords="85,24,165,63" href="#Expect-Denial">\n\t<area shape=rect coords="295,282,365,316" href="#Impact-Analysis">\n\t<area shape=rect coords="419,193,540,242" href="#Collect-Opportunities-For-Improvement">\n\t<area shape=rect coords="177,176,251,225" href="#Collect-Issues">\n\n</map>\n\n<img border=0 src="images/crosscutting-patterns-complete.png" usemap="#CrosscuttingPractices", alt="Overview of the crosscutting practices">'
            }
          ]
        },
        {
          type: 'section',
          slug: 'architectural-understanding',
          id: 'Architectural-Understanding',
          sectionType: 'section',
          index: 4,
          title: '<span class="pattern">Architectural-Understanding</span>',
          titlePlain: 'Architectural-Understanding',
          numeral: '5',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Develop and document an understanding of internal structures, concepts, architectural approaches  and important decisions of the <a href="#System">[System]</a>.</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'description-50',
              id: '_description_50',
              sectionType: 'section',
              index: 0,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Collect and organize architectural information about the <a href="#System">[System]</a>:\nDocument structures, concepts, decisions, interfaces etc. of the <a href="#System">[System]</a>\nto <em>locate</em> issues, risks and opportunities for improvement.</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Business or technical system context, with external interfaces. Learn this\nfrom <a href="#Context-Analysis">Section 2.3.3, &#8220;<span class="pattern">Context-Analysis</span>&#8221;</a> or <a href="#Infrastructure-Analysis">Section 2.3.8, &#8220;<span class="pattern">Infrastructure-Analysis</span>&#8221;</a>.</p>\n</li>\n<li>\n<p>Solution strategy, often to be learnt from <a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a> with\nexperienced developers of the system.</p>\n</li>\n<li>\n<p>Building block structure, the static organization of the source code.\nAt least elaborate the highest level of code blocks (level 1 building blocks)</p>\n</li>\n<li>\n<p>Runtime structures, like important use-case scenarios. Sometimes this can be\nlearned from <a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a>.</p>\n</li>\n<li>\n<p>Infrastructure and deployment, often derived from <a href="#Infrastructure-Analysis">Section 2.3.8, &#8220;<span class="pattern">Infrastructure-Analysis</span>&#8221;</a>.</p>\n</li>\n<li>\n<p>Cross-cutting and technical concepts, like domain models, persistence,\nuser-interface and other concepts.</p>\n</li>\n<li>\n<p>Important architecture and design decisions taken and revoked during\ndevelopment of the system.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-25',
              id: '_experiences_25',
              sectionType: 'section',
              index: 1,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Architectural understanding can be gained in small increments, so there is no\nneed to reserve long times just for documentation.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Understanding should come from various sources - see all the <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a> practices.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-practices-6',
              id: '_related_practices_6',
              sectionType: 'section',
              index: 2,
              title: 'Related Practices',
              titlePlain: 'Related Practices',
              numeral: '3',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#arc42">[arc42]</a> provides a free and pragmatic template for software architecture\ndocumentation. It&#8217;s available in various formats (e.g. Microsoft-Word (tm) and\nAsciiDoc).</p>\n</li>\n<li>\n<p><a href="#View-Based-Understanding">Section 2.3.28, &#8220;<span class="pattern">View Based Understanding</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'collect-opportunities-for-improvement',
          id: 'Collect-Opportunities-For-Improvement',
          sectionType: 'section',
          index: 5,
          title:
            '<span class="pattern">Collect Opportunities for Improvement</span>',
          titlePlain: 'Collect Opportunities for Improvement',
          numeral: '6',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>You should look for improvement opportunities, remedies, measures,\ntactics and strategies in all of the aim42-phases.</p>\n</div>'
            },
            {
              type: 'image',
              content:
                '<div id="figure-collect-remedies" class="imageblock">\n<div class="content">\n<img src="./images/collect-remedies.png" alt="collect remedies">\n</div>\n<div class="title">Figure 38. Collect Remedies in All Phases</div>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'collect-issues',
          id: 'Collect-Issues',
          sectionType: 'section',
          index: 6,
          title: '<span class="pattern">Collect Issues</span>',
          titlePlain: 'Collect Issues',
          numeral: '7',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>You should constantly watch out for issues (problems and risks), especially\nduring <a href="#Analyze">analysis</a> activities like <a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a> and others.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>The artifact (physical collection) is the <a href="#Issue-List">Section 5.15, &#8220;<span class="pattern">Issue List</span>&#8221;</a>.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Regularly match these issues to your\n<a href="#Collect-Opportunities-For-Improvement">collection of possible improvements</a>.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'expect-denial',
          id: 'Expect-Denial',
          sectionType: 'section',
          index: 7,
          title: '<span class="pattern">Expect Denial</span>',
          titlePlain: 'Expect Denial',
          numeral: '8',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Some people will oppose your findings, will whitewash or sugarcoat issues, problems or <a href="#Root-Cause-Analysis">root causes</a>. Regardless on how careful you prepared your analysis, they will try to diminish, attack or dispute your findings.</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'intent-51',
              id: '_intent_51',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Prepare you (as analyzer or evaluator or systems) for serious opposition and resistance by some stakeholders.</p>\n</li>\n<li>\n<p>Describe which kind of reaction might be turned into acceptance.</p>\n</li>\n<li>\n<p>Describe what might be gained by certain slightly negative reactions.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-51',
              id: '_description_51',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'image',
                  content:
                    '<div id="figure-reaction-pyramid" class="imageblock">\n<div class="content">\n<img src="./images/expect-denial-reaction-levels.png" alt="Reaction levels">\n</div>\n<div class="title">Figure 39. Levels of Reaction when presented with problems</div>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>From enthusiasm to neutrality things will be easy, but from here on it gets interesting or difficult, however you might call it.</p>\n</div>'
                },
                {
                  type: 'olist',
                  content:
                    '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p><strong>Enthusiasm</strong>:\nSome people will embrace your findings - like "that&#8217;s what we always said&#8230;&#8203;". Enthusiasts sometimes expect that findings or the appropriate\nimprovement approaches directly improve their own situation.</p>\n</li>\n<li>\n<p><strong>Agreement</strong>:\nOthers will agree, without further ado.</p>\n</li>\n<li>\n<p><strong>Neutrality</strong>:\nSome stakeholders won&#8217;t care. These are probably unconcerned by\nany finding.</p>\n</li>\n<li>\n<p><strong>Amazement</strong>:\nYour results will amaze or astonish some people. Although they would never have expected your findings, amazed stakeholders might be convinced to agreement or neutrality by using explanation and proofs in stakeholder-specific language or communication. On the other hand, amazed stakeholders pose the serious risk of becoming more negative (doubtful or resisting) if you fail to convince them - or if other people (your opponents, for example) manage to bring them over to the <em>dark side</em>&#8230;&#8203;</p>\n<div class="paragraph">\n<p>Always ask amazed stakeholders <em>why</em> for the reasons of their amazement - that can help you in your argumentation.</p>\n</div>\n</li>\n<li>\n<p><strong>Doubt</strong>:\nYou will hear or read "Can&#8217;t be, impossible!" or similar expressions\nfrom some people. If these stakeholders can explain the reasons for their doubts, you might find ways to improve your explanation (maybe your issues were simply ill-formulated) or you have to look for additional and better ways to explain. Doubt can lead you to errors or ommissions in your own argumentation or conclusions.</p>\n<div class="paragraph">\n<p>Some doubtful stakeholders will be emotional - and therefore not open for rational or objective arguments. That&#8217;s a serious and difficult communication problem - beyond the scope of this document.</p>\n</div>\n</li>\n<li>\n<p><strong>Minimization</strong>, sometimes disavowal:\nThis is the first level of denial. The fact itself is accepted, but its consequences, evaluations or seriousness are denied. In practice we encountered this phenomenon quite often: Affected stakeholders repeat their assessment "problem acknowledged, but the consequences are only minimal" like a mantra. Other stakeholders, especially doubtful or amazed ones, might start to believe in this minimization tactic - especially if the truth implies inconvenient or uncomfortable changes in their own working environment.</p>\n</li>\n<li>\n<p><strong>Resistance</strong>:\nFindings are opposed, either actively or passively.</p>\n<div class="paragraph">\n<p>In case you encounter minimization or resistance, get support from the highest management level you can access: As a consequence some, if not many, minimizing or resisting stakeholders will turn to your side.</p>\n</div>\n</li>\n<li>\n<p><strong>Hostility</strong>, or "<em>Shoot the messenger</em>". Always remain calm and polite - but hard in your argumentation and facts. Hostile stakeholders can rarely be convinced of something, but need to be handled with diplomacy, politics and organizational skills (none of which we can cover here).</p>\n<div class="paragraph">\n<p>Be prepared for <em>hostile actions</em>, though: In case of critical issues, always keep details documentation of their origin. Be prepared to <em>proof</em> those issues, remove even minor omissions or formal weaknesses in your argumentation. Your issues and <a href="#Root-Cause-Analysis">Section 2.3.20, &#8220;<span class="pattern">Root Cause Analysis</span>&#8221;</a> has to be flawless and backed by meticulous research and management support. Ensure <a href="#Traceability">Section 5.20, &#8220;<span class="pattern">Traceability</span>&#8221;</a> of your chain of reasoning! Keep written records of <a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a> and of suspicious pieces of source code or documentation.</p>\n</div>\n</li>\n</ol>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Let others review your findings before publication.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-26',
              id: '_experiences_26',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In one audit of a European Logistic Company (&gt; 40.000 employees) we found serious issues within their development processes, in addition to some issues in their source code. The process problems caused massive (&gt; 3 months) delays in delivery of working software to production, whereas the pure software bugs were relatively minor in their consequences. When we presented these issues, all process-related issues were minimized or doubted by senior management of the IT department.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>With the help of the CIO, we identified those minimizers to be the root cause of most process issues, as they had themselves introduced inefficient, formal and bloated processes.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'consequences-22',
              id: '_consequences_22',
              sectionType: 'section',
              index: 3,
              title: 'Consequences',
              titlePlain: 'Consequences',
              numeral: '4',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Especially when presenting results to (opposing) management stakeholders, you should be able to <strong>verify</strong> all your claims. In critical cases you should keep written protocols and note who-said-what in your <a href="#Stakeholder-Interview">stakeholder interviews</a>.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-32',
              id: '_related_patterns_32',
              sectionType: 'section',
              index: 4,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Collect-Issues">Section 5.7, &#8220;<span class="pattern">Collect Issues</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Estimate-Issue-Cost">Section 3.3.3, &#8220;<span class="pattern">Estimate Issue Cost</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Traceability">Section 5.20, &#8220;<span class="pattern">Traceability</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'explicit-assumption',
          id: 'Explicit-Assumption',
          sectionType: 'section',
          index: 8,
          title: '<span class="pattern">Explicit Assumption</span>',
          titlePlain: 'Explicit Assumption',
          numeral: '9',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Compensate missing facts (especially requirements, goals, estimates,\nopinions) by explicit (written) assumptions about those facts.</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'description-52',
              id: '_description_52',
              sectionType: 'section',
              index: 0,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Making assumptions <em>explicit</em> is fundamentally important to\n<a href="#Capture-Quality-Requirements">Section 2.3.2, &#8220;<span class="pattern">Capture Quality Requirements</span>&#8221;</a>, so that development teams don&#8217;t\nneed to rely on implicit assumptions or requirements.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>When evaluating problems, risks or remedies, we often need to\nestimate or assume stuff like duration, cost, workload or others.\nThese estimates or assumptions need to be made <em>explicit</em>,\nso that others can reproduce or understand our evaluation.\nIn case of numerical estimation, it helps to apply\n<a href="#Estimate-In-Interval">Section 3.3.2, &#8220;<span class="pattern">Estimate in Interval</span>&#8221;</a></p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Also known as <em>educated guess</em>.</p>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'fail-fast',
          id: 'Fail-Fast',
          sectionType: 'section',
          index: 9,
          title: '<span class="pattern">Fail Fast</span>',
          titlePlain: 'Fail Fast',
          numeral: '10',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>"fail fast" is actually a reference to an architecture principle describing a runtime behaviour of a system. I.e. if the application already knows that a remote system is not reachable, it should not try to send other/ more requests to this system so that this system can recover. Instead the application should immediately return either an error message or - even better - a functional fallback value.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Transferring this to software improvements, a fail-fast approach would be to immediately report when an improvement can not be applied. Don&#8217;t wait e.g. until the end of the sprint to communicate the failure. Instead this early feedback provides the opportunity to reflect and pivot on the improvement before the next sprint is started.</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'takeaways',
              id: '_takeaways',
              sectionType: 'section',
              index: 0,
              title: 'Takeaways',
              titlePlain: 'Takeaways',
              numeral: '1',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>fail-fast is actually an architecture principle for software runtime behaviour</p>\n</li>\n<li>\n<p>report failures as early as possible</p>\n</li>\n<li>\n<p>use failures as opportunities to pivot</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'fast-feedback',
          id: 'Fast-Feedback',
          sectionType: 'section',
          index: 10,
          title: '<span class="pattern">Fast Feedback</span>',
          titlePlain: 'Fast Feedback',
          numeral: '11',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Fast Feedback is a well-known term which was e.g. coined in Bruce Tulgan&#8217;s book with the same name. Usually it&#8217;s about "frequent, accurate, specific and timely, and FAST feedback" in evaluation of different topics e.g. performance evaluation. Fast Feedback means that we don&#8217;t want to wait for six to twelve months until we get results or answers on a specific question. Instead we keep participants in a constant feedback loop so they immediately exchange information once they receive it.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>The intention behind this is, the later a lack of quality is identified the higher the costs to fix it. Continuously evaluate the quality of work artifacts and immediately take\ncountermeasures or pull the plug as early as possible. Similar to <a href="#Fail-Fast">Section 5.10, &#8220;<span class="pattern">Fail Fast</span>&#8221;</a>.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Suitable methods to identify such situations are:</p>\n</div>'
            },
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Code reviews</p>\n</li>\n<li>\n<p>Architecture reviews</p>\n</li>\n<li>\n<p>Peer reviews</p>\n</li>\n<li>\n<p>Testing in early stages</p>\n</li>\n</ul>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>See also <a href="#Fail-Fast">Section 5.10, &#8220;<span class="pattern">Fail Fast</span>&#8221;</a>.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'impact-analysis',
          id: 'Impact-Analysis',
          sectionType: 'section',
          index: 11,
          title: '<span class="pattern">Impact Analysis</span>',
          titlePlain: 'Impact Analysis',
          numeral: '12',
          children: [
            {
              type: 'section',
              slug: 'intent-52',
              id: '_intent_52',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Determine what impact (in code, concepts, data and the organization)\na specific action or issue (e.g. refactoring, recurring problem) will or\nmight have. Identify the resultant effects on system development and operations.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-practices-7',
              id: '_related_practices_7',
              sectionType: 'section',
              index: 1,
              title: 'Related Practices',
              titlePlain: 'Related Practices',
              numeral: '2',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Failure-Mode-and-Effect-Analysis (<a href="http://en.wikipedia.org/wiki/Failure_mode_and_effects_analysis">FMEA</a>), a method for failure analysis, widely used in various industries</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'goals-constraints',
          id: 'Goals-Constraints',
          sectionType: 'section',
          index: 12,
          title: '<span class="pattern">Goals and Constraints</span>',
          titlePlain: 'Goals and Constraints',
          numeral: '13',
          children: [
            {
              type: 'section',
              slug: 'intent-53',
              id: '_intent_53',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Make the overall goals and constraints of the improvement efforts understandable to every stakeholder.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-53',
              id: '_description_53',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>It&#8217;s of the uttermost importance to clarify the expectations and assumption of all stakeholders of a software system.\nThere may be conflicting interests or hidden doubts among the project&#8217;s participants that could let any improvement activity fail severely.\nClear goals and understandable constraints are a great way to set the direction and the rules of the game.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Goals of improvements activities can be manifold.\nE. g. a goal could be to make sure that the software system gets more understandable.\nAnother goal could be to be able to add new features or capabilities more easily in the future.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Goals are restricted by <em>constraints</em>. Because we live in a world with finite resources, we have to work with what we have in our (project) environment.\nE. g. constraints could be certain finish dates, organizational or technical limitations.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'representation',
              id: '_representation',
              sectionType: 'section',
              index: 2,
              title: 'Representation',
              titlePlain: 'Representation',
              numeral: '3',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><em><a href="#Capture-Quality-Requirements">Quality scenarios</a></em> are a good way to align business\' goals with the actual technical requirements and constraints.</p>\n</li>\n<li>\n<p><em>Architecture decisions</em> contain information about goals and constraints that led to a certain decision.</p>\n</li>\n<li>\n<p><em>Architecture Decision Records</em> contain the problem statements (=goals) and the drivers (=constraints) that lead to a certain decision.</p>\n</li>\n<li>\n<p><em>Impact Mapping</em> is another nice methodology to trace goals (=Why?) over constraints (=How?) to the actual implementation (=What?).</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'references-29',
              id: '_references_29',
              sectionType: 'section',
              index: 3,
              title: 'References',
              titlePlain: 'References',
              numeral: '4',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Architecture decision in arc42: <a href="https://docs.arc42.org/section-9/" class="bare">https://docs.arc42.org/section-9/</a></p>\n</li>\n<li>\n<p>An introduction to Architectural Decision Records: <a href="https://adr.github.io/" class="bare">https://adr.github.io/</a></p>\n</li>\n<li>\n<p>Impact Mapping: <a href="https://www.impactmapping.org/" class="bare">https://www.impactmapping.org/</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'improvement-backlog',
          id: 'Improvement-Backlog',
          sectionType: 'section',
          index: 13,
          title: '<span class="pattern">Improvement Backlog</span>',
          titlePlain: 'Improvement Backlog',
          numeral: '14',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Keep a public, written backlog of possible improvements, remedies, tactics or strategies.</p>\n</div>'
            },
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Revise this backlog in regular intervalls.</p>\n</li>\n<li>\n<p>Define the <em>owner role</em> for this backlog, similar to the <em>product owner</em> in Scrum.</p>\n</li>\n<li>\n<p>Enhance the backlog with information from the <a href="#Evaluate">Section 3, &#8220;Evaluate&#8221;</a> phase, like cost, effort or risk.</p>\n</li>\n</ul>\n</div>'
            },
            {
              type: 'image',
              content:
                '<div id="figure-improvement-backlog" class="imageblock">\n<div class="content">\n<img src="./images/improvement-backlog.jpg" alt="improvement backlog">\n</div>\n<div class="title">Figure 40. Improvement Backlog</div>\n</div>'
            },
            {
              type: 'section',
              slug: 'intent-54',
              id: '_intent_54',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Collect all known issues and problems within a system or its associated processes. Make the issues comparable by evaluating each one, usually using economical units like money or time. Align carefully with <a href="#Issue-List">Section 5.15, &#8220;<span class="pattern">Issue List</span>&#8221;</a>.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'content',
              id: '_content',
              sectionType: 'section',
              index: 1,
              title: 'Content',
              titlePlain: 'Content',
              numeral: '2',
              children: [
                {
                  type: 'table',
                  content:
                    '<table class="tableblock frame-all grid-all stretch">\n<caption class="title">Table 4. Improvement Backlog</caption>\n<colgroup>\n<col style="width: 10%;">\n<col style="width: 10%;">\n<col style="width: 30%;">\n<col style="width: 10%;">\n<col style="width: 10%;">\n<col style="width: 30%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top">ID</th>\n<th class="tableblock halign-left valign-top">Improvement</th>\n<th class="tableblock halign-left valign-top">Description</th>\n<th class="tableblock halign-left valign-top">min Cost</th>\n<th class="tableblock halign-left valign-top">max Cost</th>\n<th class="tableblock halign-left valign-top">Related Issues</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">identifier</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">name</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">short description of this improvement or remedy</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">minimal estimated cost or effort</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">maximal cost or effort</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">links to related issues</p></td>\n</tr>\n</tbody>\n</table>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'representation-and-tools',
              id: '_representation_and_tools',
              sectionType: 'section',
              index: 2,
              title: 'Representation and Tools',
              titlePlain: 'Representation and Tools',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Try to use a similar documentation approach like for <a href="#Issue-List">Section 5.15, &#8220;<span class="pattern">Issue List</span>&#8221;</a>. It should be\nas easy as possible to link issues to improvements and vice versa.</p>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'issue-list',
          id: 'Issue-List',
          sectionType: 'section',
          index: 14,
          title: '<span class="pattern">Issue List</span>',
          titlePlain: 'Issue List',
          numeral: '15',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>A collection of issues (problems, risks) found during <a href="#Collect-Issues">Section 5.7, &#8220;<span class="pattern">Collect Issues</span>&#8221;</a>.</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'intent-55',
              id: '_intent_55',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Collect all known issues and problems within a system or its associated processes. Make the issues comparable by evaluating each one, usually using economical units like money or time.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'content-2',
              id: '_content_2',
              sectionType: 'section',
              index: 1,
              title: 'Content',
              titlePlain: 'Content',
              numeral: '2',
              children: [
                {
                  type: 'table',
                  content:
                    '<table class="tableblock frame-all grid-all stretch">\n<caption class="title">Table 5. Issue List</caption>\n<colgroup>\n<col style="width: 8.3333%;">\n<col style="width: 8.3333%;">\n<col style="width: 25%;">\n<col style="width: 16.6666%;">\n<col style="width: 8.3333%;">\n<col style="width: 8.3333%;">\n<col style="width: 25.0002%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top">ID</th>\n<th class="tableblock halign-left valign-top">Issue</th>\n<th class="tableblock halign-left valign-top">Description</th>\n<th class="tableblock halign-left valign-top">Frequency</th>\n<th class="tableblock halign-left valign-top">min Value</th>\n<th class="tableblock halign-left valign-top">max Value</th>\n<th class="tableblock halign-left valign-top">Improvements</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">identifier</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">name</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">a short description of the issue</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">how often does the issue occur, once, daily, weekly, with every new feature?</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">minimal value</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">maximal value</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">links to improvements</p></td>\n</tr>\n</tbody>\n</table>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'representation-and-tools-2',
              id: '_representation_and_tools_2',
              sectionType: 'section',
              index: 2,
              title: 'Representation and Tools',
              titlePlain: 'Representation and Tools',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>It&#8217;s difficult to decide how much formalism to apply in collecting issues and problems:\nSometimes a wiki page might suffice, for other systems a full-blown\nissue tracker can be useful.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>As always: documentation is only valuable if it can be found easily, which makes electronic approaches more viable.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>For every entry in this issue list we need to <a href="#Estimate-Issue-Cost">Section 3.3.3, &#8220;<span class="pattern">Estimate Issue Cost</span>&#8221;</a>, an estimation of the cost of this issued in any business-related unit.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In case you already have identified or developed <a href="#Collect-Opportunities-For-Improvement">opportunities for improvement</a> adressing this issue,\nlinks to the corresponding improvements (remedies, tactics, strategies, changes) in the\n<a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a> are neccesssary.</p>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'plan-improvements',
          id: 'Plan-Improvements',
          sectionType: 'section',
          index: 15,
          title: '<span class="pattern">Plan Improvements</span>',
          titlePlain: 'Plan Improvements',
          numeral: '16',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Conduct long- and short-term planning of improvement activities. Balance\nor align issues and improvements, considering existing <a href="#Goals-Constraints">goals and constraints</a>.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Consists of long-term decisions (concerning <a href="#improve-approaches-overview">Section 4.4, &#8220;Improvement Approaches (Overview)&#8221;</a>) and\nshort-term planning.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'report-structure',
          id: 'Report-Structure',
          sectionType: 'section',
          index: 16,
          title: '<span class="pattern">Report-Structure</span>',
          titlePlain: 'Report-Structure',
          numeral: '17',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>When you examine (audit, review) systems, as proposed\nin <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a>, you often need to prepare a report for\nthe management in charge.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>This practice proposes a generic report structure you\nmight use in preparing such documents.</p>\n</div>'
            },
            {
              type: 'table',
              content:
                '<table class="tableblock frame-all grid-all stretch">\n<caption class="title">Table 6. Report Structure</caption>\n<colgroup>\n<col style="width: 20%;">\n<col style="width: 80%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top">Chapter</th>\n<th class="tableblock halign-left valign-top">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Formalities</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">formal stuff, like disclaimer, references to\n                 contractual documents, table of contents,\n                 licence, change history etc.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Management Summary</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">1, at most 2 page summary</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Goals</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">describe the goals of the review/audit.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Review Approach</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">brief description how the review was conducted,\n                    outline the activities or actions performed.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Stakeholders</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">outline which stakeholders participated,\n                     in what form, at that time</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Findings</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">in order of importance or priority, list\n                     and explain your findings</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Proposed Actions</p></td>\n<td class="tableblock halign-left valign-top"></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Conclusion</p></td>\n<td class="tableblock halign-left valign-top"></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Appendix: Sources</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">list your sources and references, e.g. documents,\n                         source-code, interview protocols,\n                         issue-trackers, websites etc.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Appendix: The Team</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">briefly introduce the review team and explain\n                       their role in the review.</p></td>\n</tr>\n</tbody>\n</table>'
            },
            {
              type: 'section',
              slug: 'related-practices-8',
              id: '_related_practices_8',
              sectionType: 'section',
              index: 0,
              title: 'Related Practices',
              titlePlain: 'Related Practices',
              numeral: '1',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Slide-Or-Write">Section 5.19, &#8220;<span class="pattern">Slide or Write</span>&#8221;</a> to decide, wether you really need to prepare a written report.</p>\n</li>\n<li>\n<p><a href="#Traceability">Section 5.20, &#8220;<span class="pattern">Traceability</span>&#8221;</a>, to ensure you have proper sources for all important issues.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'separate-cause-from-effect',
          id: 'Separate-Cause-From-Effect',
          sectionType: 'section',
          index: 17,
          title: '<span class="pattern">Separate-Cause-From-Effect</span>',
          titlePlain: 'Separate-Cause-From-Effect',
          numeral: '18',
          children: [
            {
              type: 'section',
              slug: 'intent-56',
              id: '_intent_56',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Explicitly differentiate between symptom (<em>effect</em>) and cause:</p>\n</div>'
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
              slug: 'description-54',
              id: '_description_54',
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
              slug: 'related-practices-9',
              id: '_related_practices_9',
              sectionType: 'section',
              index: 2,
              title: 'Related Practices',
              titlePlain: 'Related Practices',
              numeral: '3',
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
          slug: 'slide-or-write',
          id: 'Slide-Or-Write',
          sectionType: 'section',
          index: 18,
          title: '<span class="pattern">Slide or Write</span>',
          titlePlain: 'Slide or Write',
          numeral: '19',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>In every review you will face the question of how to deliver and present the results to the customer. Will you write a long and formal report document or is a set of presentation slides adequate and sufficient?</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'intent-57',
              id: '_intent_57',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Consider format and structure of the review report early.</p>\n</li>\n<li>\n<p>Ensure that you share a common vision with your customer about the preparation of results .</p>\n</li>\n<li>\n<p>Remind contractual agreements and formal requirements, especially if someone might take offence by your report.</p>\n</li>\n</ul>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-55',
              id: '_description_55',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>There are two common ways to deliver review results:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>As a formal document (Word, PDF, etc.)</p>\n</li>\n<li>\n<p>As a collection of slides (PowerPoint, Keynote, etc.) and a presentation</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In general it is recommended to write the review results down in a well-structured document. This form is suitable to contain a lot of details and background information, so that it is easy e.g. to trace back a recommendation to a stakeholder interview. A written document can (and should) contain all information needed to understand the review starting position, targets, approach and findings, without spoken words and additional explanations. If the results shall supplementary be presented to some audiences it is easy to create purposeful slides from this document.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>A set of PowerPoint slides as only result is adequate if the customer has been closely involved in the review process and is mainly interested in the outcome and if there will definitely be a presentation given to all relevant stakeholders. In this case the creation of slides with the most important bullet points might be quicker than the writing of detailed, well formulated text.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-27',
              id: '_experiences_27',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In a review for a financial broker we agreed initially to deliver a detailed document with the results. When we were later asked to present the outcomes to two different audiences (engineers and management) it was quite easy to create specific slides for both of them from the ~ 40 pages of documentation.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>In another case we planned to present out review finding in one big meeting and so we wrapped all findings into briefly and concise slides. Later some executives who missed the meeting complained that they needed some spoken explanations to understand the presentation document. We spent much more time in subsequently writing out the background information as if we had worked on a result document from beginning on.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-33',
              id: '_related_patterns_33',
              sectionType: 'section',
              index: 3,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '4',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Report-Structure">Section 5.17, &#8220;<span class="pattern">Report-Structure</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Traceability">Section 5.20, &#8220;<span class="pattern">Traceability</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'traceability',
          id: 'Traceability',
          sectionType: 'section',
          index: 19,
          title: '<span class="pattern">Traceability</span>',
          titlePlain: 'Traceability',
          numeral: '20',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Maintain references to the origin of problems or issues: Remember who told you about a problem, in which documents you found issues and in what version of the source you identified risks or faults.</p>\n</div>'
            },
            {
              type: 'section',
              slug: 'intent-58',
              id: '_intent_58',
              sectionType: 'section',
              index: 0,
              title: 'Intent',
              titlePlain: 'Intent',
              numeral: '1',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>When discussing problems, some stakeholders will question or doubt your findings (see pattern <a href="#Expect-Denial">Section 5.8, &#8220;<span class="pattern">Expect Denial</span>&#8221;</a>). Keeping thorough references to the origins or original sources of major\nfindings keep eventual critics in check.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'description-56',
              id: '_description_56',
              sectionType: 'section',
              index: 1,
              title: 'Description',
              titlePlain: 'Description',
              numeral: '2',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>(To be done)</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'experiences-28',
              id: '_experiences_28',
              sectionType: 'section',
              index: 2,
              title: 'Experiences',
              titlePlain: 'Experiences',
              numeral: '3',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Some contrary experiences happened when we neglected traceability:</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Stakeholder questioned some of our findings - we could not immediately trace those findings\nback to an original source (i.e. an interview protocol, a particular file/version of source code). These stakeholders immediately suspected <em>all</em> our findings, not only the one or two in question.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Please keep in mind that a lack of traceability, especially for disputed findings or problems,\nmight lead to serious loss of credibility.</p>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>On the other hand, maintaining detailed references is a time-consuming task. You easily spend\nhours with (rather trivial) bookkeeping activities, instead of identifying new and exciting problems.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'applicability-31',
              id: '_applicability_31',
              sectionType: 'section',
              index: 3,
              title: 'Applicability',
              titlePlain: 'Applicability',
              numeral: '4',
              children: [
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Apply traceability whenever you identify problems or issues</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>which might discredit or offend one important stakeholder,</p>\n</li>\n<li>\n<p>which seriously impact parts of the underlying organization, company or business unit,</p>\n</li>\n<li>\n<p>that carry huge financial, technical or organizational risks or penalties.</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content:
                    '<div class="paragraph">\n<p>Short rule: The more expensive or dangerous, the more traceability you need.</p>\n</div>'
                }
              ]
            },
            {
              type: 'section',
              slug: 'related-patterns-34',
              id: '_related_patterns_34',
              sectionType: 'section',
              index: 4,
              title: 'Related Patterns',
              titlePlain: 'Related Patterns',
              numeral: '5',
              children: [
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Expect-Denial">Section 5.8, &#8220;<span class="pattern">Expect Denial</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
                }
              ]
            }
          ]
        },
        {
          type: 'section',
          slug: 'widen-your-options',
          id: 'Widen-Your-Options',
          sectionType: 'section',
          index: 20,
          title: '<span class="pattern">Widen Your Options</span>',
          titlePlain: 'Widen Your Options',
          numeral: '21',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Before taking decisions it&#8217;s often a good idea to widen your decision space,\nlook for additional options. Sometimes it&#8217;s not only "yes-or-no" decisions,\nbut a spectrum of additional options are available - at least if you allow\nyour brain to deviate from conventional path or your own preliminary conclusions.</p>\n</div>'
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      slug: 'pattern-index',
      id: '_pattern_index',
      sectionType: 'section',
      index: 6,
      title: 'Pattern index',
      titlePlain: 'Pattern index',
      numeral: '6',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>This chapter contains an alphabetic list of all patterns, practices and methods with a\nshort description and links to the explanation.</p>\n</div>'
        },
        {
          type: 'olist',
          content:
            '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p><strong><a href="#Anticorruption-Layer">Section 4.10.2, &#8220;<span class="pattern">Anticorruption Layer</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Isolate clients from internal changes of sub-systems or modules.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Architectural-Understanding">Section 5.5, &#8220;<span class="pattern">Architectural-Understanding</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Document relevant structures, concepts, decisions, interfaces etc. of the <a href="#System">[System]</a>\nto <em>locate</em> issues, risks and opportunities for improvement.\nSee <a href="#arc42">[arc42]</a> and <a href="#View-Based-Understanding">Section 2.3.28, &#8220;<span class="pattern">View Based Understanding</span>&#8221;</a>.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Architecture-Backlog"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Architecture-Backlog</span></dt>\n<dd>\n<p>Keep a prioritized list of improvement tasks (<em>remedies</em>) with their as a backlog, parallel to the (regular) feature backlog.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Assertions"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Assertions</span></dt>\n<dd>\n<p>Use assertions to verify preconditions and to make a program fail early when something goes fundamentally wrong.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#ATAM">Section 2.3.1, &#8220;<span class="pattern">Atam</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Systematic approach to find architectural risks, tradeoffs (compromises) and sensitivity points.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Automated-Tests"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Automated Tests</span></dt>\n<dd>\n<p>Introduce automated tests to verify correctness or runtime behavior. Unit-, integration-, acceptance-, load- or database-tests are well-known specialisations of this.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#big-bang-approach">Section 4.7.1, &#8220;<span class="pattern">Big Bang Approach</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Approach to replace an old system with a new system with one big bang deployment.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Branch-For-Improvement"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Branch For Improvement</span></dt>\n<dd>\n<p>Introduce distinct branches in your version control system to reflect improvements.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Bulkhead"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Bulkhead</span></dt>\n<dd>\n<p>Can be placed between two systems to avoid the propagation of faults from one system to the other system (<a href="#Nygard07">[Nygard07]</a>, p. 119ff.).\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Capture-Quality-Requirements">Section 2.3.2, &#8220;<span class="pattern">Capture Quality Requirements</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Part of <a href="#ATAM">Section 2.3.1, &#8220;<span class="pattern">Atam</span>&#8221;</a>, Capture and document specific quality requirements. Specialisation of <a href="#Requirements-Analysis">Section 2.3.19, &#8220;<span class="pattern">Requirements-Analysis</span>&#8221;</a>.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Change-by-Extension"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Change by Extension</span></dt>\n<dd>\n<p>Enable efficient change by creating new components instead of modifying existing ones.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Change-by-Copy"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Change by Copy</span></dt>\n<dd>\n<p>Isolate competing change necessity by copying and allowing the copies to evolve independently. Also known as <a href="#Change-Via-Split">[Change-Via-Split]</a>\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Change-Via-Split"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Change Via Split</span></dt>\n<dd>\n<p>Isolate competing change necessity by copying and allowing the copies to evolve independently. Also known as <a href="#Change-Via-Split">[Change-Via-Split]</a>\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Collect-Opportunities-For-Improvement">Section 5.6, &#8220;<span class="pattern">Collect Opportunities for Improvement</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Keep a list of possible and potential measures, remedies, tactics, strategies for improvements. Regularly match those to your <a href="#Collect-Issues">collection of issues</a>.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Collect-Issues">Section 5.7, &#8220;<span class="pattern">Collect Issues</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Keep a list of problems, issues and risks. Regularly match those to your <a href="#Collect-Opportunities-For-Improvement">collection of possible remedies</a>.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Context-Analysis">Section 2.3.3, &#8220;<span class="pattern">Context-Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Analyse external interfaces for risk, technology, business value and other factors.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Data-Analysis">Section 2.3.4, &#8220;<span class="pattern">Data-Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Analyse and inspect the data created and manipulated by the system for its content, structure, quantity and size.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Debugging">Section 2.3.5, &#8220;<span class="pattern">Debugging</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Identify the source of a bug or misbehavior by observing the\ndetailed flow of execution, e.g. stepwise execution of program statements. Usually supported by <em>debugger</em>. Specialisation of <a href="#Root-Cause-Analysis">Section 2.3.20, &#8220;<span class="pattern">Root Cause Analysis</span>&#8221;</a>.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Deprecate-Obsolete-Parts"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Deprecate Obsolete Parts</span></dt>\n<dd>\n<p>Actively mark parts in software that aren&#8217;t needed anymore and communicate to your consumers or customers, that you will remove specific functionality in the future.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Development-Process-Analysis">Section 2.3.6, &#8220;<span class="pattern">Development-Process-Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Analyse and inspect the development process (as documented or described by stakeholders) for appropriateness, problems or problem-areas.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Documentation-Analysis">Section 2.3.7, &#8220;<span class="pattern">Documentation-Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Analyse existing documentation for availability, correctness, actuality, problems or problem-areas.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Document-Problems"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Document Problems</span></dt>\n<dd>\n<p>See <a href="#Improvement-Backlog">Improvement Backlog</a>.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Estimate-Feature-Value">Section 3.3.1, &#8220;<span class="pattern">Estimate Feature Value</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Estimate the (monetary) value of a given feature, so you can compare features of the system with each other.\nCategory: <a href="#Evaluate">Section 3, &#8220;Evaluate&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Estimate-In-Interval">Section 3.3.2, &#8220;<span class="pattern">Estimate in Interval</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Estimation differs from <strong>measurement</strong> in its inherent uncertainty. Therefore, estimate in intervals, giving lower and upper bounds. The difference between the two shows your confidence in the estimate. Low (relative) difference means high confidence.\nCategory: <a href="#Evaluate">Section 3, &#8220;Evaluate&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Estimate-Issue-Cost">Section 3.3.3, &#8220;<span class="pattern">Estimate Issue Cost</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Find out how much a given issue costs in units of money or effort in a period of time or for every occurence.\nCategory: <a href="#Evaluate">Section 3, &#8220;Evaluate&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Estimate-Improvement-Cost">Section 3.3.4, &#8220;<span class="pattern">Estimate Improvement Cost</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Determine how much a specific improvement (a set of actions taken to eliminate or reduce a specific issue or problem) is likely to cost (in money and/or effort).\nCategory: <a href="#Evaluate">Section 3, &#8220;Evaluate&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Expect-Denial">Section 5.8, &#8220;<span class="pattern">Expect Denial</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Some people will oppose your findings, will whitewash or sugarcoat issues, problems or <a href="#Root-Cause-Analysis">root causes</a>. Regardless on how careful you prepared your analysis, they will try to diminish or attack your findings. Category: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Compensate missing facts (especially requirements, goals, estimates, opinions) by explicit (usually written) assumptions about those facts.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Extract-Reusable-Component"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Extract Reusable Component</span></dt>\n<dd>\n<p>Extract code from an existing system to create a reusable component. See <a href="#SERIOUS-Refactoring">[SERIOUS-Refactoring]</a>, page 95.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Fail-Fast">Section 5.10, &#8220;<span class="pattern">Fail Fast</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Identify quality issues as early as possible and aim to fix them.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Fast-Feedback">Section 5.11, &#8220;<span class="pattern">Fast Feedback</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Evaluate the quality of work artifacts and processes as early as possible. Enables teams to apply corrective actions or take countermeasures as early as possible.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Front-End-Switch"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Front End Switch</span></dt>\n<dd>\n<p>Route front-end requests to either new or old backend systems, depending on their nature, content-negotiation or other request criteria. This is especially helpful to support <a href="#Never-Change-Running-System">[Never-Change-Running-System]</a>.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Group-Improvement-Actions"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Group Improvement Actions</span></dt>\n<dd>\n<p>Collect several improvement actions, which can or shall be applied or implemented together.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Handle-If-Else-Chains"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Handle If Else Chains</span></dt>\n<dd>\n<p>Refactor nested if-then-else structures for improved understandability. Can be seen as a specialisation of <a href="#Remove-Nested-Control-Structures">[Remove-Nested-Control-Structures]</a>.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Hierarchical-Quality-Model">Section 2.3.9, &#8220;<span class="pattern">Hierarchical-Quality-Model</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Decompose the overall goal of "high quality" into more detailed and precise requirements, finally resulting in a tree-like structure. See <a href="#ATAM">Section 2.3.1, &#8220;<span class="pattern">Atam</span>&#8221;</a> and <a href="#Quality-Requirements">[Quality-Requirements]</a>.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Impact-Analysis">Section 5.12, &#8220;<span class="pattern">Impact Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Determine what impact (in code, concepts and\n  the organization) a specific action (e.g. refactoring) will or might have.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Improve-Code-Layout"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Improve Code Layout</span></dt>\n<dd>\n<p>Making code easier to read results in better understandability.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Improve-Logging">Section 4.10.4, &#8220;<span class="pattern">Improve Logging</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Making runtime analysis easier with meaningful logs. This includes decentralized log analysis as well as well-structured log levels, markers and log message phrasing.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Keep a backlog of possible improvements, remedies, tactics or strategies.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Infrastructure-Analysis">Section 2.3.8, &#8220;<span class="pattern">Infrastructure-Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Analyze the technical infrastructure of the <a href="#System">[System]</a>, e.g. with respect to time and resource consumption or creation. Part of <a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a>. Category: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Instrument-System">Section 2.3.10, &#8220;<span class="pattern">Instrument System</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Instrument either the executable or the source code to make\n<a href="#Explicit-Assumption">assumtions explicit</a> and expand on <a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a> and\n<a href="#Runtime-Artifact-Analysis">[Runtime-Artifact-Analysis]</a>.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Interface-Segregation-Principle">Section 4.10.5, &#8220;<span class="pattern">Interface Segregation Principle</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Reduce coupling between clients and service provider.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Introduce-Boy-Scout-Rule">Section 4.10.6, &#8220;<span class="pattern">Introduce Boy Scout Rule</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Establish a policy to perform certain structural\nimprovements each time an artifact (source code, configuration, documents etc.)\nis changed. Usable in situations where a <a href="#Refactoring-Plan">[Refactoring-Plan]</a> is not feasible or in\naddition to such a plan.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Introduce-Layering"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Introduce Layering</span></dt>\n<dd>\n<p>Introduce <em>layers</em> within the source code to improve <em>separation of concern</em>. It&#8217;s common to have at least a <em>business layer</em> and an <em>interface layer</em> - the latter for both user- and programatic interfaces. See <a href="http://blog.8thlight.com/uncle-bob/2012/08/13/the-clean-architecture.html">Uncle Bob&#8217;s Clean Architecture</a> for a short summary.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Isolate-Changes"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Isolate Changes</span></dt>\n<dd>\n<p>Introduce interfaces and intra-system borders, so that changes cannot propagate to other areas.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Issue-List">Section 5.15, &#8220;<span class="pattern">Issue List</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Keep a list or collection or issues (problems, risks) - together with an appropriate amount of description and evaluation.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Issue-Tracker-Analysis">Section 2.3.11, &#8220;<span class="pattern">Issue-Tracker-Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Analyse entries from issue-tracker to identify critical areas, components or stakeholders.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Keep-Data-Toss-Code"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Keep Data Toss Code</span></dt>\n<dd>\n<p>A strategy to improve systems, keeping the data created with the (old) systems as foundation for a new one. Also described as <a href="#Keller-Migration">Bridge-to-the-New-Town</a> (by Wolfgang Keller). This is the opposite of <a href="#Never-Change-Running-System">[Never-Change-Running-System]</a>.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Manage-Complex-Client-Dependencies-With-Facade">Section 4.10.7, &#8220;<span class="pattern">Manage Complex Client Dependencies With Facade</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Simplify the interaction of a client with a set of service components.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Measure">Section 4.10.8, &#8220;<span class="pattern">Measure</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Gather various metrics and visualize them on dashboards in order to make your system behavior more predictable and assumed coincidences explainable. Examples of such metrics are thread pool saturation, number of failed logins, requests per second but also number of successful orders today, amount-of-time-spent-debugging-this-component, code-metrics, amount-of-effort-needed-for-feature&#8230;&#8203;\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Migrate-Data"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Migrate Data</span></dt>\n<dd>\n<p>Transform existing data from one structure or representation into another by keeping its original intent or semantic intact.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Mikado-Method"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Mikado-Method</span></dt>\n<dd>\n<p>Coordinated <a href="#Refactoring">refactoring</a> effort, described in the <a href="#Mikado">Mikado-book</a>.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Natural-Death"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Natural Death</span></dt>\n<dd>\n<p>Keep old system running and only retire it once all objects contained reach end of life according to their life cycle.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Never-Change-Running-System"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Never Change Running System</span></dt>\n<dd>\n<p>To minimize risks, you should try to refrain from changes to existing (working) code - as every change\ninevitably introduces new risks or even bugs.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Never-Rewrite-Running-System"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Never Rewrite Running System</span></dt>\n<dd>\n<p>Joel Spolsky arguments, <a href="#Spolsky-NeverRewrite">never to rewrite a system from scratch</a>, as you will likely make many new mistake and won&#8217;t generate much added value.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Organizational-Analysis">Section 2.3.12, &#8220;<span class="pattern">Organizational-Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Analyse and inspect organization(s) responsible for the system.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Outside-in-Interfaces"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Outside-in Interfaces</span></dt>\n<dd>\n<p>Modularize system aligned to (existing) external interfaces.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Pre-Interview-Questionnaire">Section 2.3.16, &#8220;<span class="pattern">Pre Interview Questionnaire</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Prior to interviewing stakeholders, present them with a written questionnaire, so they can reflect in advance. A specialisation of <a href="#Questionnaire">Section 2.3.18, &#8220;<span class="pattern">Questionnaire</span>&#8221;</a>.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Pre-Mortem">Section 2.3.17, &#8220;<span class="pattern">Pre-Mortem</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Identify issues that could let become the current project a huge disaster.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Qualitative-Analysis">Section 2.3.14, &#8220;<span class="pattern">Qualitative Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Analyze which quality goals of the <a href="#System">[System]</a> are at risk and which are met by the current implementation. Needs concrete <a href="#Quality-Requirements">[Quality-Requirements]</a>. See <a href="#ATAM">Section 2.3.1, &#8220;<span class="pattern">Atam</span>&#8221;</a>.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Quality-Driven-Software-Architecture"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Quality Driven Software Architecture</span> (QDSA)</dt>\n<dd>\n<p>Derive (technical, structural or process-related) decisions based upon detailed quality requirements. QDSA requires <a href="#Capture-Quality-Requirements">explicit quality requirements</a>.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Quantitative-Analysis">Section 2.3.15, &#8220;<span class="pattern">Quantitative-Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Measure artifacts or processes within the system, e.g. source code. For example, see <a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a> and <a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a>.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Questionnaire">Section 2.3.18, &#8220;<span class="pattern">Questionnaire</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Written collection of questions presented to stakeholders. Can be addendum, preparation or replacement of <a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a>.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Refactoring"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Refactoring</span></dt>\n<dd>\n<p>Source code transformation that does not change functionality of system. See <a href="#Fowler-Refactoring">[Fowler-Refactoring]</a>.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Refactoring-Plan"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Refactoring Plan</span></dt>\n<dd>\n<p>The route of refactoring, as discussed within the development team. This plan should always be visible to every team member.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Requirements-Analysis">Section 2.3.19, &#8220;<span class="pattern">Requirements-Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Analyze and document (current) requirements: required features and required constraints\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Remove-Nested-Control-Structures"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Remove Nested Control Structures</span></dt>\n<dd>\n<p>Re-structure code so that deeply nested or complicated control structures are replaced by semantically identical versions. Special case of <a href="#Refactoring">[Refactoring]</a>, similar to <a href="#Untangle-Code">[Untangle-Code]</a>. Often performed by reducing complexity and especially cyclomatic complexity. When reducing code complexity one needs to make sure we&#8217;re not exchanging inner/ method/ cyclomatic complexity by outer/ design or runtime complexity.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Report-Structure">Section 5.17, &#8220;<span class="pattern">Report-Structure</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>A generic structure for written audit or review reports, usually\nfollowing an <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a> phase. See <a href="#Slide-Or-Write">Section 5.19, &#8220;<span class="pattern">Slide or Write</span>&#8221;</a>. Category: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a>.</p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Root-Cause-Analysis">Section 2.3.20, &#8220;<span class="pattern">Root Cause Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p><em>Find the evil at the bottom</em>: Explicitely differentiate between symptom and cause: Identify root causes of symptoms, problems or issues.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Analyze the runtime behavior of the <a href="#System">[System]</a>, e.g. with respect to time and resource consumption or creation.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Runtime-Artifact-Analysis"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Runtime Artifact Analysis</span></dt>\n<dd>\n<p>Artifacts that were created by a running system are a gold mine. They allow you to get a deeper understanding of the inner workings of a software system. Use log management, aggregators and monitoring tools to gather log files. Then analyze usage patterns, stack traces or errors to see what the system is really doing.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Sample-For-Improvement"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Sample For Improvement</span></dt>\n<dd>\n<p>Provide concrete code example for typical improvement situations, so that developers can improve existing code easily.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Schedule-Work"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Schedule Work</span></dt>\n<dd>\n<p>Schedule refactoring or improvement work, so that all (business and technical) stakeholders know about them.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Separate-Cause-From-Effect">Section 5.18, &#8220;<span class="pattern">Separate-Cause-From-Effect</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>See <a href="#Root-Cause-Analysis">Section 2.3.20, &#8220;<span class="pattern">Root Cause Analysis</span>&#8221;</a>.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Software-Archeology">Section 2.3.22, &#8220;<span class="pattern">Software Archeology</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Understand software by analysing its source code, usually in absence of other documentation or knowledge sources.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Stakeholder-Analysis">Section 2.3.23, &#8220;<span class="pattern">Stakeholder Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Find out which people, roles, organizational units or organizations have interests in the <a href="#System">[System]</a>.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Conduct personal interviews with key persons of the <a href="#System">[System]</a> or associated processes to identify, clarify or discuss potential issues and remedies.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Stakeholder-Specific-Communication"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Stakeholder Specific Communication</span></dt>\n<dd>\n<p>Communicate with stakeholders by actively applying their specific or favored terminology and/or communication channels.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Analyse source code to identify building blocks and their dependencies, determine complexity, coupling, cohesion and other structural properties.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#strangler-approach">Section 4.7.8, &#8220;<span class="pattern">Strangler Approach</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Approach to gradually create a new system around the edges of the old, letting it grow slowly over several years until the old system is strangled.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Structural-Analysis"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Structural Analysis</span></dt>\n<dd>\n<p>Analyze the static structures (e.g. building block structure) of the <a href="#System">[System]</a>, e.g. package or module dependencies, runtime- and/or deployment dependencies. See the more specific <a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a>, <a href="#Context-Analysis">Section 2.3.3, &#8220;<span class="pattern">Context-Analysis</span>&#8221;</a> and <a href="#Data-Analysis">Section 2.3.4, &#8220;<span class="pattern">Data-Analysis</span>&#8221;</a>.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Systematic-Decisions"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Systematic Decisions</span></dt>\n<dd>\n<p>Systematically prepare and take decisions by finding appropriate options, check assumptions, overcome emotion and prepare to be wrong. See <a href="#heath-decisive">Decisive (by C+D Heath)</a>.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Take-What-They-Mean">Section 2.3.26, &#8220;<span class="pattern">Take What They Mean, Not What They Say</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Natural language has the risk, that semantics on the senders\' side differs from semantics of the receiver: People simply misunderstand each other because <em>meaning</em> of words differ between people. Pattern provided by Phillip Ghadir (who is too humble to claim this discovery)\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Toggle-Feature"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Toggle Feature</span></dt>\n<dd>\n<p>Simultaneously support evolved, competing or conflicting features at runtime by toggling feature flags. Category: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a>, see also:</p>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="http://en.wikipedia.org/wiki/Feature_toggle" class="bare">http://en.wikipedia.org/wiki/Feature_toggle</a></p>\n</li>\n<li>\n<p><a href="http://www.togglz.org/" class="bare">http://www.togglz.org/</a></p>\n</li>\n</ul>\n</div>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#Traceability">Section 5.20, &#8220;<span class="pattern">Traceability</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Maintain references to the origin of problems or issues: Remember who told you about a problem, in which documents you found issues and in what version of the source you identified risks or faults.\nCategory: <a href="#Crosscutting">Section 5, &#8220;Cross-Cutting Practices and Patterns&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><a id="Untangle-Code"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Untangle Code</span></dt>\n<dd>\n<p>Remove unneccessary complications in code, e.g. nested structures, dependencies, dead-code, duplicate-code etc. See <a href="#Remove-Nested-Control-Structures">[Remove-Nested-Control-Structures]</a>. Special case of <a href="#Refactoring">[Refactoring]</a>.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><a id="Use-Case-Cluster"></a></p>\n<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="pattern">Use Case Cluster</span></dt>\n<dd>\n<p>Understand system functionality by grouping functionality into clusters to reduce complexity.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</dd>\n</dl>\n</div>\n</li>\n<li>\n<p><strong><a href="#User-Analysis">Section 2.3.27, &#8220;<span class="pattern">User-Analysis</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Get an overview of user-categories or -groups, their goals, requirements\nand expectations. Find out about issues users have with the system. Related to <a href="#Stakeholder-Analysis">Section 2.3.23, &#8220;<span class="pattern">Stakeholder Analysis</span>&#8221;</a>, <a href="#Context-Analysis">Section 2.3.3, &#8220;<span class="pattern">Context-Analysis</span>&#8221;</a> and <a href="#Requirements-Analysis">Section 2.3.19, &#8220;<span class="pattern">Requirements-Analysis</span>&#8221;</a>. Category: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#Use-Invariants-To-Kill-Zombies">Section 4.10.9, &#8220;<span class="pattern">Use Invariants To Kill Zombies</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Use Invariants to make sure that you can\nkill Zombies safely. If code seems to be &#8220;dead&#8221;&#8201;&#8212;&#8201;meaning that it\nsupposedly isn&#8217;t called anymore&#8201;&#8212;&#8201;but no one dares to remove it from the\ncodebase, the introduction of invariants can provide reliable feedback on\nwhether it is safe to remove the code or not.\nCategory: <a href="#Improve">Section 4, &#8220;Improve&#8221;</a></p>\n</div>\n</li>\n<li>\n<p><strong><a href="#View-Based-Understanding">Section 2.3.28, &#8220;<span class="pattern">View Based Understanding</span>&#8221;</a></strong></p>\n<div class="paragraph">\n<p>Create architectural views (mainly building block view) to understand and communicate code structure.\nCategory: <a href="#Analyze">Section 2, &#8220;Analyze&#8221;</a></p>\n</div>\n</li>\n</ol>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'domain-model',
      id: 'Domain-Model',
      sectionType: 'appendix',
      index: 7,
      caption: 'Appendix A: ',
      title: 'Domain Model',
      titlePlain: 'Domain Model',
      numeral: 'A',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Within the systematic improvement we consider and manipulate several\ntypical kinds of information, <strong>entities</strong>.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p><span class="small">For a more pragmatic description, please see the <a href="#_common_terminology">Section 1.4.2, &#8220;Common Terminology&#8221;</a> section</span></p>\n</div>'
        },
        {
          type: 'image',
          content:
            '<div id="figure-domain-model" class="imageblock">\n<div class="content">\n<img src="./images/aim42-domain-model.png" alt="aim42 domain model">\n</div>\n<div class="title">Figure 41. aim42 domain terminology - detailed</div>\n</div>'
        },
        {
          type: 'table',
          content:
            '<table class="tableblock frame-all grid-all" style="width: 80%;">\n<colgroup>\n<col style="width: 6.6666%;">\n<col style="width: 26.6666%;">\n<col style="width: 66.6668%;">\n</colgroup>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Cause</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Root cause of an Issue, in contrast to a symptom.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>is-a</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">(inherits from) Issue</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>is real source of</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">one or many Issues.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Configuration</strong></p></td>\n<td class="tableblock halign-left valign-top"></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Constraints</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Technical or organizational constraints, restraining management, design, implementation or operation of the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>restrict</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">the System, associated Processes or Organization.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Documentation</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Any (hopefully written) information about\nthe systems, its goals, requirements, architecture, implementation, operation or management.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Goals</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">What does the Organization or Stakeholder expect from\nthe System, why does the System exist anyway.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Hardware</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Structure and kind of hardware required to develop, test and operate the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Improvement</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Any remedy, opportunity, tactic or strategy to improve the System by resolving one or several Issues.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>modifies</em> or <em>creates</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Risk</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>is remedy for</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>resolves</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">(partially or complete) one or several Issues</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Issue</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Any problem, error, fault, risk, suboptimal situation or their causes within the\nSystem, Processes or Organization related to it (e.g. management, operational, development, administrative or organizational activities).</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Frequency:</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">how often does the Issue occur?</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>resolved by</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">one or several Improvements.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Organization</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The organization or entity responsible or owning the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>source of</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Issues.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Process</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Processes, conventions or activities for developing, maintaining, operating or managing the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>source of</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Issues.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Risk</strong></p></td>\n<td class="tableblock halign-left valign-top"></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">EarlyWarning</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Indicator that the Risk is occuring and turning into a problem.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>is an</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">(inherits from) Issue, but not occurred yet.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Software</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">All source code and configuration that make up the System under improvement. Hopefully stored in version-control.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>is an</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Issue, but not occurred yet.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Stakeholder</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">People or roles interested or participating in the System or any of its associated Processes.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>belong to</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">the Organization responsible or owning the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>knows / informs about</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Issues and/or Improvements. Stakeholders often\n  know about existing problems and opportunities for improvements.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>System</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The system under improvement, consisting of Software, Hardware and Documentation.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>managed and affected by</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Processes</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>remedy</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">the System or aspects of it by Improvements</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>suffers from</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Issue</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>complies with</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">one or several Goals.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>consists of</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Software, Configuration, Hardware and Documentation.</p></td>\n</tr>\n</tbody>\n</table>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'bibliography',
      id: '_bibliography',
      sectionType: 'appendix',
      index: 8,
      caption: 'Appendix B: ',
      title: 'Bibliography',
      titlePlain: 'Bibliography',
      numeral: 'B',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist bibliography">\n<ul class="bibliography">\n<li>\n<p><a id="arc42"></a>[arc42] arc42: Resources for Software Architects. Practical template, liberal licence.\nAvailable in a variety of formats, see <a href="http://arc42.de">German website</a> or <a href="http://arc42.org">English website</a>.</p>\n</li>\n<li>\n<p><a id="Agans-Debugging"></a>[Agans-Debugging] David J. Agans: Debugging: The 9 Indispensable Rules for Finding Even the Mose\nElusive Software and Hardware Problems. Amacom Press, 2002. Although most developers take "debugging skills" for granted,\nthey sometimes spend too much time tracking too little bugs.</p>\n</li>\n<li>\n<p><a id="Ambler"></a>[Ambler] Scott Ambler on Database Refactoring: <a href="http://agiledata.org/essays/databaseRefactoring.html" class="bare">http://agiledata.org/essays/databaseRefactoring.html</a></p>\n</li>\n<li>\n<p><a id="Annett-Legacy"></a>[Annett-Legacy] Robert Annett: Working with Legacy Systems: A practical guide to the real systems we inherit.  <a href="http://leanpub.com/WorkingWithLegacySystems">Leanpub Publishing</a>.</p>\n</li>\n<li>\n<p><a id="Brown"></a>[Brown] William J. Brown: AntiPatterns: Refactoring Software,\nArchitecture and Projects in Crisis, John Wiley &amp; Sons, 1998&#8201;&#8212;&#8201;a tried and\ntrue work on things that tend to go wrong in software development and other\nprojects.</p>\n</li>\n<li>\n<p><a id="Berglung-AfferentCoupling"></a>[Berglung-AfferentCoupling] Tim Berglund (GitHub) on\n<a href="http://de.slideshare.net/jaxlondon2012/complexity-theory-and-software-development-tim-berglund">Complexity Theory and Software Development</a>. Look at slide 73ff on afferent coupling - and keep that in mind for your own refactorings.</p>\n</li>\n<li>\n<p><a id="Bass09"></a>[Bass09] Len Bass et.al.: Software Architecture in Practice. Addison-Wesley, 2. Edition 2009.</p>\n</li>\n<li>\n<p><a id="Big-Ball-Of-Mud"></a>[Big-Ball-Of-Mud] Brian Foote and Joseph Yoder, <a href="http://laputan.org/mud/">Big Ball of Mud</a> - very influentual paper from the <a href="http://hillside.net/plop/plop97/">fourth conference on Patterns languages of Program Design, PLoP97</a></p>\n</li>\n<li>\n<p><a id="BISBAL"></a>[BISBAL] BISBAL, J. et.al.: A Survey of Research into Legacy System Migration. Technical Report TCD-CS-1997-01, Computer Science Department, Trinity College Dublin, 1997. <a href="http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.50.9051" class="bare">http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.50.9051</a></p>\n</li>\n<li>\n<p><a id="Bommer-Wartung"></a>[Bommer-Wartung] Christoph Bommer, M. Spindler, V. Barr: Softwarewartung: Grundlagen, Management und Wartungstechniken.\n(in German) dpunkt Verlag, 2008. Interesting treatment of categories of software systems and their respective need for maintenance and evolution. Authors quote studies from Lehman and Belady from the 1970&#8217;s.</p>\n</li>\n<li>\n<p><a id="Boy-Scout-Rule-article"></a>[Boy-Scout-Rule-article] The Boy Scout Rule, see <a href="http://programmer.97things.oreilly.com/wiki/index.php/The_Boy_Scout_Rule" class="bare">http://programmer.97things.oreilly.com/wiki/index.php/The_Boy_Scout_Rule</a></p>\n</li>\n<li>\n<p><a id="Brodie-Stonebraker"></a>[Brodie-Stonebraker] Brodie, M. and Stonebraker, M: Migrating Legacy Systems: Gateway, Interfaces &amp; the Incremental Approach; Morgan Kaufmann 1995.</p>\n</li>\n<li>\n<p><a id="Clements-ATAM"></a>[Clements-ATAM] Paul Clements et.al.: Evaluating Software Architecture - Methods and Case Studies.\nAddison-Wesley, 2001. Detailed overview of ATAM (and other evaluation methods).</p>\n</li>\n<li>\n<p><a id="Campbell14"></a>[Campbell14] Ann Campbell et. al: SonarQube in Action. Manning Publications, 2014. Great introduction to\nthe flexible, multi-language code-analysis toolkit.</p>\n</li>\n<li>\n<p><a id="ERDLE"></a>[ERDLE] ERDLE, C.: Management von Softwaresystemen – Legacy Migrationsstrategien. Seminar an der TU München, Fakultät Informatik, 2005. <a href="http://www4.in.tum.de/lehre/seminare/hs/WS0506/mvs/files/Ausarbeitung_Erdle.pdf" class="bare">http://www4.in.tum.de/lehre/seminare/hs/WS0506/mvs/files/Ausarbeitung_Erdle.pdf</a></p>\n</li>\n<li>\n<p><a id="Evans03"></a>[Evans03] Eric Evans: Domain-Driven Design: Tackling Complexity in the Heart of Software. Addison-Wesley, 2003.</p>\n</li>\n<li>\n<p><a id="Feathers"></a>[Feathers] Michael Feathers: Working Effectively with Legacy Code. Prentice Hall, 2005. The author claims "Code without tests is bad code". So true&#8230;&#8203;</p>\n</li>\n<li>\n<p><a id="Fowler-Refactoring"></a>[Fowler-Refactoring] Martin Fowler: Refactoring. Addision-Wesley. Addision-Wesley, 1999. See also <a href="http://www.refactoring.com/">refactoring.com</a></p>\n</li>\n<li>\n<p><a id="Freemann"></a>[Freemann] Steve Freeman, Nat Pryce: Growing Object Oriented Software By Tests. Addison-Wesley, 2010.</p>\n</li>\n<li>\n<p><a id="heath-decisive"></a>[heath-decisive] Chip and Dan Heath: Decisive: How to make better choices in life and work. Crown Publishing / Random House Books, 2013. A practical and pragmatic guide to decision making (both preparing and taking them) - not specific to software. They describe four pillars of systematic decision making, which we adopted for our cross-cutting practice <a href="#Systematic-Decisions">Systematic-Decisions</a>.</p>\n</li>\n<li>\n<p><a id="Henney"></a>[Henney] Kevlin Henney: 97 Things Every Programmer Should Know. O&#8217;Reilly Media, 2010, ISBN 0596809484, also <a href="http://programmer.97things.oreilly.com/wiki/index.php/97_Things_Every_Programmer_Should_Know">available online</a></p>\n</li>\n<li>\n<p><a id="Hunt-Archeology"></a>[Hunt-Archeology] Andy Hunt, Dave Thomas: <a href="http://media.pragprog.com/articles/mar_02_archeology.pdf">Software Archeology</a>, IEEE Software, March/April 2002</p>\n</li>\n<li>\n<p><a id="Impact-Mapping"></a>[Impact-Mapping] Gojko Adzic: <a href="http://impactmapping.org">Impact Mapping. Making a Big Impact With Software Products and Projects</a>.</p>\n</li>\n<li>\n<p><a id="ISO-9126"></a>[ISO-9126] ISO 9126 Quality Model: Hierarchical model for software quality, consisting of six major <em>quality topics</em> (functionality, reliability, usability, efficiency, maintainability and portability).</p>\n</li>\n<li>\n<p><a id="ISO-14764"></a>[ISO-14764] ISO/IEC 14764 Standard on Software Maintenance:2006. For a brief overview, see <a href="http://en.wikipedia.org/wiki/Software_maintenance">Wikepedia-entry on ISO-14764</a>.</p>\n</li>\n<li>\n<p><a id="ISO-25010"></a>[ISO-25010] ISO/IEC 25010 Systems and software Quality Requirements and Evaluation (SQuaRE)&#8201;&#8212;&#8201;System and software quality models. ISO-Standard model for software quality. Superseeds <a href="#ISO-9126">[ISO-9126]</a> and categorizes software quality into 8 <em>characteristics</em>: functional suitability, reliability, efficiency, operability, security, compatibility, maintainability, transferability. See <a href="http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=35733">ISO-25010 website</a>.</p>\n</li>\n<li>\n<p><a id="Keller-Migration"></a>[Keller-Migration] Wolfgang Keller: <a href="http://www.objectarchitects.de/ObjectArchitects/papers/WhitePapers/ZippedPapers/pacman03.pdf">The Bridge to the New Town</a> - A Legacy System Migration Pattern. EuroPLoP 2000, ISBN 3-87940-775-4</p>\n</li>\n<li>\n<p><a id="Lippert-Refactoring"></a>[Lippert-Refactoring] M.Lippert, S.Roock: Refactoring in Large Software Projects:\nPerforming Complex Restructurings Successfully, Wiley 2006</p>\n</li>\n<li>\n<p><a id="Martin-CleanCode"></a>[Martin-CleanCode] Robert Martin: Clean Code - A Handbook of Agile Software Craftmanship. Prentice Hall, 2009.\nA detailed writeup of how (object-oriented) code should look like. Lots of things we like.</p>\n</li>\n<li>\n<p><a id="Mikado"></a>[Mikado] Ola Elnestam, Daniel Brolund: The Mikado Method. Manning, 2014. Describes a method to <em>morphing</em> software from bad to better state. Quote from the book:\n&#8220;It helps us visualize, plan, and perform business-value-focused improvements over several iterations and increments of work, without ever having a broken codebase&#8221;</p>\n</li>\n<li>\n<p><a id="Moyer-Archeology"></a>[Moyer-Archeology] Brian Moyer: <a href="http://adm.omg.org/docs/Software_Archeology_4-Mar-2009.pdf">Software Archeology</a></p>\n</li>\n<li>\n<p><a id="Nygard07"></a>[Nygard07] Michael T. Nygard: Release It! Design and Deploy Production-Ready Software. Pragmatic Programmers, 2007.</p>\n</li>\n<li>\n<p><a id="Object-Oriented-Software-Construction"></a>[Object-Oriented-Software-Construction] Bertrand Meyer:\nObject-Oriented Software Construction, Prentice Hall (September\n1994), ISBN-13: 978-0136290490<br>\nOne of those old books which is has influenced many a software but\nis actually known to few.</p>\n</li>\n<li>\n<p><a id="Ogawa-Evolution"></a>[Ogawa-Evolution] Michael Ogawa: Software Evolution Storylines. Available as research paper, open-source code and\nonline. <a href="http://www.michaelogawa.com/research/storylines/">Visualizes interactions between developers in software systems</a></p>\n</li>\n<li>\n<p><a id="OORP"></a>[OORP] Serge Demeyer et. al: <a href="http://scg.unibe.ch/download/oorp/">Object-Oriented Reengineering Patterns</a>.\nA pattern-based approach to re-engineer object-oriented legacy systems. It contains a wealth of <a href="#Improve">improvement-patterns</a>, some named slightly different than their aim42-brethren.</p>\n</li>\n<li>\n<p><a id="Quality-Requirements"></a>[Quality-Requirements]\n<a href="https://github.com/arc42/quality-requirements">(Free) Examples of Practical Software Quality Requirements</a>.</p>\n</li>\n<li>\n<p><a id="Sadalage"></a> Sadalage, P.: Refactoring Databases: Evolutionary Database Design. Collection of patterns\nfor database refactoring. Online: <a href="http://databaserefactoring.com/" class="bare">http://databaserefactoring.com/</a></p>\n</li>\n<li>\n<p><a id="SEI-ATAM"></a>[SEI-ATAM] <a href="http://www.sei.cmu.edu/architecture/tools/evaluate/atam.cfm">Architecture Tradeoff Analysis Method</a>.\nSoftware Engineering Institute, Carnegie Mellon University.</p>\n</li>\n<li>\n<p><a id="SERIOUS"></a>[SERIOUS] Software Evolution, Refactoring, Improvement of Operational &amp; Usable Systems.\n<a href="https://itea3.org/project/serious.html">ITEA / EUREKA research project</a>.\nCompleted in 2008, holds a fairly large number of deliverables. Too bad, some of the result websites\nare down&#8230;&#8203;</p>\n</li>\n<li>\n<p><a id="SERIOUS-Refactoring"></a>[SERIOUS-Refactoring]\n<a href="http://lore.ua.ac.be/Publications/pdf/SERIOUSRefactoringHandbook.pdf">SERIOUS Refactoring Handbook</a>.</p>\n</li>\n<li>\n<p><a id="SERIOUS-Methods"></a>[SERIOUS-Methods] SERIOUS project.\n<a href="http://www.fmeainfocentre.com/updates/dec08/Overview%20and%20evaluation%20of%20design%20and%20refactoring%20methods.PDF">Overview and evaluation of design and refactoring methods</a></p>\n</li>\n<li>\n<p><a id="Software-Evolution"></a>[Software-Evolution] <a href="http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)2047-7481">Journal of Software: Evolution and Process</a>. Academic journal on software evolution and maintenance.</p>\n</li>\n<li>\n<p><a id="SonarQube"></a>[SonarQube] SonarQube is an <a href="http://sonarqube.org">free and open platform to measure manage code quality</a>, lots of plugins for\na variety of programming languages, plugins for different metrics and checks. SonarQube can track results over time - showing the history of code quality for software systems.</p>\n</li>\n<li>\n<p><a id="Spolsky-NeverRewrite"></a>[Spolsky-NeverRewrite] Joel Spolsky: <a href="http://www.joelonsoftware.com/articles/fog0000000069.html">Things You Should Never Do, Part-I</a></p>\n</li>\n<li>\n<p><a id="Tornhill-CrimeScene"></a>[Tornhill-CrimeScene] Adam Tornhill: <a href="https://pragprog.com/book/atcrime/your-code-as-a-crime-scene">Your Code as a Crime Scene</a>.\nUse forensic techniques to arrest defects, bottlenecks and bad design in your programs.\nPragmatic Programmers, 2015. Despite the seemingly funny title, this is one of the most practical books on analyzing source code from arbitrary languages.\nThe <a href="http://www.adamtornhill.com/articles/crimescene/codeascrimescene.htm">author</a> has implemented several of the ideas as open-source tools.</p>\n</li>\n<li>\n<p><a id="Tornhill-XRay"></a>[Tornhill-XRay] Adam Tornhill: <a href="https://pragprog.com/book/atevol/software-design-x-rays">Software Design X-Rays: Fix Technical Debt with Behavioral Code Analysis</a>. Pragmatic Programmers, 2018. This book focuses on the social behavior of software developers. It shows how you can spot knowledge loss, hidden change dependencies and hot spots of bad code.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'glossary',
      id: '_glossary',
      sectionType: 'appendix',
      index: 9,
      caption: 'Appendix C: ',
      title: 'Glossary',
      titlePlain: 'Glossary',
      numeral: 'C',
      children: [
        {
          type: 'dlist',
          content:
            '<div class="dlist">\n<dl>\n<dt class="hdlist1">AIM42</dt>\n<dd>\n<p>Architecture Improvement Method.</p>\n</dd>\n<dt class="hdlist1">ATAM</dt>\n<dd>\n<p>Architecture Tradeoff Analysis Method. Extensively described in\n<a href="#Clements-ATAM">Clemens-2001</a> and <a href="#SEI-ATAM">online by the SEI</a>,\nbriefly described as <a href="#ATAM">aim42 pattern</a>.</p>\n</dd>\n<dt class="hdlist1">Failure</dt>\n<dd>\n<p>Loss of functionality under defined (<em>stated</em>) conditions.</p>\n</dd>\n<dt class="hdlist1">Issue</dt>\n<dt class="hdlist1">Remedy</dt>\n<dt class="hdlist1">SEI</dt>\n<dd>\n<p>Software Engineering Institute at the Carnegie Mellon University.\nA federally funded research and development institute,\nsponsored by the US Departement of Defense.</p>\n</dd>\n</dl>\n</div>'
        },
        {
          type: 'dlist',
          content:
            '<div id="System" class="dlist">\n<dl>\n<dt class="hdlist1">System</dt>\n<dd>\n<p>The system to be improved - often a single software system, but it might be a complex combination of hardware, software and organizational aspects. <em>Systems</em> in our sense consists of:</p>\n<div class="ulist">\n<ul>\n<li>\n<p>software, usually with corresponding data structures and data</p>\n</li>\n<li>\n<p>required infrastructure software, like operating system, database, UI-frameworks, middleware etc.</p>\n</li>\n<li>\n<p>required hardware infrastructure, like processors, storage facilities, network, routers etc.</p>\n</li>\n<li>\n<p>associated development processes, like requirements engineering, architecture, implementation, version- and configuration management, build- and deployment</p>\n</li>\n<li>\n<p>associated administration and operation processes or procedures</p>\n</li>\n<li>\n<p>associated organizational processes, like budgeting, HR, controlling, management etc.</p>\n</li>\n<li>\n<p>associated external systems, like data-/event providers or consumers.</p>\n</li>\n</ul>\n</div>\n</dd>\n</dl>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>and maybe even more :-)</p>\n</div>'
        },
        {
          type: 'dlist',
          content:
            '<div class="dlist">\n<dl>\n<dt class="hdlist1">Value</dt>\n<dd>\n<p>(of an improvement or remedy). Approximately -1 times the cost of the associated issue(s). If an improvement solves only part of an issue, value estimation becomes much harder.</p>\n</dd>\n</dl>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'organizational-stuff',
      id: '_organizational_stuff',
      sectionType: 'appendix',
      index: 10,
      caption: 'Appendix D: ',
      title: 'Organizational Stuff',
      titlePlain: 'Organizational Stuff',
      numeral: 'D',
      children: [
        {
          type: 'section',
          slug: 'the-team',
          id: '_the_team',
          sectionType: 'section',
          index: 0,
          title: 'The Team',
          titlePlain: 'The Team',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>For a current and complete overview, please see the <a href="https://github.com/aim42/aim42/graphs/contributors">contributor page</a>\non Github.</p>\n</div>'
            },
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Gernot Starke (innoQ Fellow, project founder): setup, patterns, practices, maintenance.</p>\n</li>\n<li>\n<p>Alex Heusingfeld (innoQ): hero-of-the-build, Travis-CI integration, numerous discussions.\nStarted the idea of a distinct <em>user guide</em>&#8230;&#8203;</p>\n</li>\n<li>\n<p>Peter Hruschka (Atlantic Systems Guild): reviews + comments,\nespecially to the intricacies of the <a href="#Domain-Model">Appendix A, <em>Domain Model</em></a>.</p>\n</li>\n<li>\n<p>Christine Koppelt (innoQ): improvement-patterns</p>\n</li>\n<li>\n<p>Michael Mahlberg (Consulting Guild): patterns and practices.</p>\n</li>\n<li>\n<p>Burkhard Neppert (innoQ): review, method</p>\n</li>\n<li>\n<p>Roland Schimmack: review, practices and patterns, bugfixes</p>\n</li>\n<li>\n<p>Oliver Tigges (innoQ): patterns and practices</p>\n</li>\n<li>\n<p>Stefan Tilkov (innoQ): maintenance and evolution patterns.</p>\n</li>\n<li>\n<p>Tammo van Lessen (innoQ): improvement patterns, technical debt contribution</p>\n</li>\n<li>\n<p>Sven Johann (innoQ): several improvements on various patterns</p>\n</li>\n<li>\n<p>Matthias Möser (Kassenärztliche Vereinigung Bayerns): improvement patterns, rewrite</p>\n</li>\n<li>\n<p>(what are you waiting for - <strong>join us</strong>!)</p>\n</li>\n</ul>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Comments and suggestions by Markus Harrer, Phillip Ghadir - and numerous (anonymous) project-teams from all around the IT-world.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'license',
          id: '_license',
          sectionType: 'section',
          index: 1,
          title: 'License',
          titlePlain: 'License',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>aim42 is free to use, similar to many open-source software systems.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>For practical reasons we decided to apply the\n<a href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attributions Sharealike 4.0 license</a>.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Copyright 2012-2018 the original author (Gernot Starke) and contributors.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Licensed under the Creative Commons Attributions Sharealike (the "License");\nYou may not use this file except in compliance with the License.\nYou may obtain a copy of the License at</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p><a href="http://creativecommons.org/licenses/by-sa/4.0/" class="bare">http://creativecommons.org/licenses/by-sa/4.0/</a></p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Unless required by applicable law or agreed to in writing, software and documentation\ndistributed under the License is distributed on an "AS IS" BASIS,\nWITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\nSee the License for the specific language governing permissions and\nlimitations under the License.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'contributions',
          id: 'contributions',
          sectionType: 'section',
          index: 2,
          title:
            'Contribute to aim42.org <span class="icon">[smile o&#93;</span>',
          titlePlain: 'Contribute to aim42.org [smile o]',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>This content is open source! The source is hosted under the aim42 organization on GitHub.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>If you want to help by improving upon it, fork the project, revise the content, then send a pull request.</p>\n</div>'
            },
            {
              type: 'dlist',
              content:
                '<div class="dlist">\n<dl>\n<dt class="hdlist1"><span class="icon">[github&#93;</span> Source</dt>\n<dd>\n<p>aim42 currently provides a <em>method reference</em>, the asciidoc sources are hosted at <a href="https://github.com/aim42/aim42">GitHub under the aim42 organization</a>.</p>\n</dd>\n<dt class="hdlist1"><span class="icon">[bolt&#93;</span> Issues</dt>\n<dd>\n<p>Look over <a href="https://github.com/aim42/aim42/issues">our open issues</a>, pick one, fork the repository and resolve the issue. Send over a pull request!</p>\n</dd>\n<dt class="hdlist1"><span class="icon">[twitter&#93;</span> Twitter</dt>\n<dd>\n<p><a href="https://twitter.com/arc_improve42">@arc_improve42</a></p>\n</dd>\n<dt class="hdlist1"><span class="icon">[comment o&#93;</span> Suggestions</dt>\n<dd>\n<p>open an issue (see above) and test our reactivity&#8230;&#8203;</p>\n</dd>\n</dl>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p><span class="small">(due to increased spam we had to remove the convenient mailto links, sorry)</span></p>\n</div>'
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      slug: 'how-to-add-a-new-pattern-or-practice',
      id: '_how_to_add_a_new_pattern_or_practice',
      sectionType: 'appendix',
      index: 11,
      caption: 'Appendix E: ',
      title: 'How to add a new pattern or practice',
      titlePlain: 'How to add a new pattern or practice',
      numeral: 'E',
      children: [
        {
          type: 'olist',
          content:
            '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Add the pattern to the related section in analyze.adoc, evaluate.adoc or\nimprove.adoc\nUse the exact spelling (e.g. including dashes) you intend to use in the pattern\ndescription</p>\n</li>\n<li>\n<p>Add the pattern to the pattern catalog in pattern-index.adoc</p>\n</li>\n<li>\n<p>Entries in the pattern-index which currently don&#8217;t have a detailed description in\ntheir own file are preceded with an anchor, like <em>[[the-exact-name]]</em></p>\n</li>\n<li>\n<p>If you describe a pattern or practice in detail, create a new file with the appropriate name and the .adoc extension under the pattern subdirectory.</p>\n</li>\n<li>\n<p>At the beginning of that new file, include the anchor, like <em>[[the-exact-name]]</em>. See below for an example.</p>\n<div class="literalblock">\n<div class="content">\n<pre>[[the-exact-name]]\n=== The Exact Name\n(write your pattern description here...)</pre>\n</div>\n</div>\n</li>\n<li>\n<p>Add an include statement below the pattern overview in analyze.adoc,\nevaluate.adoc or improve.adoc</p>\n<div class="listingblock">\n<div class="content">\n<pre> include::patterns/the-exact-name.adoc[]</pre>\n</div>\n</div>\n</li>\n<li>\n<p>In the pattern index, create a reference, like _&lt;&lt;the-exact-name&gt;&gt;</p>\n</li>\n</ol>\n</div>'
        }
      ]
    }
  ]
}
