// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const risks: Section = {
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
}
