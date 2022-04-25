// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description47: Section = {
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
}
