// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const experiences15: Section = {
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
}
