// This file is generated. Please don't modify it directly.

import { Section } from '../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const improve: Section = {
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
            '<div class="hdlist">\n<table>\n<tr>\n<td class="hdlist1">\nData Migration\n</td>\n<td class="hdlist2">\n<p>Keep your (valuable) data, and toss (or rewrite or otherwise change) your code. Oftentimes\ncombined with approaches from the categories <em>rewrite</em> or <em>restructure</em>.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nRewrite\n</td>\n<td class="hdlist2">\n<p>Your system is <em>broken beyond repair</em> and you need to completely replace it by a new one.\nRewrite approaches give you some ideas how and if that might work (spoiler: we fear that <span class="pattern">Big-Bang</span> won&#8217;t work&#8230;&#8203;)</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nRestructure\n</td>\n<td class="hdlist2">\n<p>Improve your system by restructuring your code <em>in-the-large</em>. Might involve extraction of\ncertain functionalities, splitting your system, improving the modularization or strangulating\ncertain (bad) parts of the system (and, of course, replacing those by better solutions).</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nImprove Modularization\n</td>\n<td class="hdlist2">\n<p>Subcategory of <em>restructure</em>: improve responsibilities within the system, improving the boundaries between components, improving interfaces and similar operations.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nBrainsize\n</td>\n<td class="hdlist2">\n<p>Evidence from neuroscience suggests our working memory has a capacity of about four items <sup class="footnote">[<a id="_footnoteref_13" class="footnote" href="#_footnotedef_13" title="View footnote.">13</a>]</sup>. That&#8217;s why smaller solutions tend to be more maintainable, as the cognitive load on the developers working memory is reduced. These "brainsizing" strategies can be used to reduce the amount of <em>stuff</em>, e.g. by splitting your system up, extracting certain parts into abstractions, or other ways to reduce LOC or other complexity metrics. Terms like <em>microservices</em> fall into this category.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nImprove-Domain-Focus\n</td>\n<td class="hdlist2">\n<p>Subcategory of <em>restructure</em>:Clear separation of domain-related code from purely technical aspects has long been a useful design heuristic - but is still often violated.\nIn addition, aspects belonging to similar areas of the domain should be implemented within the same building-blocks (in Domain-Drive Design terminology called <em>Bounded Context</em>).</p>\n</td>\n</tr>\n</table>\n</div>'
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
                  content: '<div class="paragraph">\n<p>Positive:</p>\n</div>'
                },
                {
                  type: 'ulist',
                  content:
                    '<div class="ulist">\n<ul>\n<li>\n<p>Basecamp <a href="https://signalvnoise.com/posts/3856-the-big-rewrite-revisited">rewrote</a> their product successfully within a year.\n(Note: they kept the old and new system running in parallel and customers could decide to switch or not, therefore this\nis not a hard big bang)</p>\n</li>\n<li>\n<p>An insurance company replaced a small system within 4 month by big bang</p>\n</li>\n<li>\n<p>A multiple years running big bang replacement project of a governmental application has been successfully delivered in\ntime and budget (but they also had no market pressure for new features)</p>\n</li>\n</ul>\n</div>'
                },
                {
                  type: 'paragraph',
                  content: '<div class="paragraph">\n<p>Negative:</p>\n</div>'
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
          title: '<span class="pattern">Interface Segregation Principle</span>',
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
                  content: '<div class="paragraph">\n<p>Apply when</p>\n</div>'
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
          title: '<span class="pattern">Use Invariants To Kill Zombies</span>',
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
                  content: '<div class="paragraph">\n<p>And so on.</p>\n</div>'
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
}
