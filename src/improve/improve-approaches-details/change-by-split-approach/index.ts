// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const changeBySplitApproach: Section = {
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
}
