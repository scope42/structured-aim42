// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const useInvariantsToKillZombies: Section = {
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
}
