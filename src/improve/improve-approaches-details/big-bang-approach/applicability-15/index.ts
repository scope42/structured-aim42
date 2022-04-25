// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const applicability15: Section = {
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
}
