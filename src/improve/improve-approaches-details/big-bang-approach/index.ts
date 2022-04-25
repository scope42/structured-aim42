// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const bigBangApproach: Section = {
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
}
