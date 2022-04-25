// This file is generated. Please don't modify it directly.

import { Section } from '../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const crosscutting: Section = {
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
              content: '<div class="paragraph">\n<p>(To be done)</p>\n</div>'
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
}
