// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const stranglerApproach: Section = {
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
