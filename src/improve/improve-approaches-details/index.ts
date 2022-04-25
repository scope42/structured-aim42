// This file is generated. Please don't modify it directly.

import { Section } from '../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const improveApproachesDetails: Section = {
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
}
