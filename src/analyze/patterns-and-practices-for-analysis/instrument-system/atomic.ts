// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const instrumentSystemAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'instrument-system',
  id: 'Instrument-System',
  sectionType: 'section',
  index: 9,
  title: '<span class="pattern">Instrument System</span>',
  titlePlain: 'Instrument System',
  numeral: '10',
  content:
    '<div class="paragraph">\n<p>Use retroactive modification of the executables which target\ncross-cutting concerns to make the existing software-base tell about it&#8217;s\ninternals. Ways to achieve this can include <a href="https://en.wikipedia.org/wiki/Aspect-oriented_programming">aspect-oriented programming (AOP)</a>, <a href="https://en.wikipedia.org/wiki/Monkey_patch">Monkey-Patching</a> and other <a href="https://en.wikipedia.org/wiki/Metaprogramming">metaprogramming</a> techniques.</p>\n</div>\n<div class="sect4">\n<h5 id="_intent_10">Intent</h5>\n<div class="paragraph">\n<p>Find out how the system is really used and what the runtime relationships are,\nas well as other facts that can not be easily determined by\n<a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a> even in situation where the system under design is\nlargely undocumented and the architecture work thus mostly relies on\nassumptions, interviews and lore.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_description_10">Description</h5>\n<div class="paragraph">\n<p>In many languages today it is possible to define operation that alter the\nbehavior of certain structures in the system without modifying the original\nsource code. In Java this is often done by byte code instrumentation, in Ruby,\nPHP and some other languages there are built in mechanisms to (re-) define the\nbehavior of system classes or libraries.</p>\n</div>\n<div class="paragraph">\n<p>In theory instrumenting the system therefore is a straightforward process:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>Identify and describe the concern that shall be explored (e.g.\nobject creation, function entries and exits, code execution or something\nelse that can be described in the terms of the mechanism used).</p>\n</li>\n<li>\n<p>Write the code that collects the data about the system behavior (e.g. sends it\nto a syslog, writes it to a file, sends it to a dedicated server, creates an\nSNMP Trap etc.)</p>\n</li>\n<li>\n<p>Use the (language specific) mechanism to create the instrumented version of\nthe system</p>\n</li>\n<li>\n<p>Replace (part of) the currently operational system with the instrumented version</p>\n</li>\n<li>\n<p>Collect the data</p>\n</li>\n<li>\n<p>Replace the instrumented version with the previously operational version</p>\n</li>\n</ul>\n</div>\n<div class="paragraph">\n<p>In real life, since the mechanisms of instrumentation varies widely, specific ways\nmust be found for each scenario.</p>\n</div>\n<div class="paragraph">\n<p>While tools like AspectJ provide easy ways to instrument Java code and Ruby’s\nmetaprogramming model allows for easy introduction of cross-cutting functionality\nthe same gets harder to do with other languages. In some languages it may be\nnecessary to modify a dynamically linked library with central operations to\nintroduce instrumentation without modifying the original system.</p>\n</div>\n<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="paragraph">\n<p>A special form of this pattern, especially useful for interpreted languages, is\n<em>instrumenting the source code manually</em>. Basically all you do here is manually type in\nthe code to collect the information you&#8217;re interested in. In this case it is\nespecially important to have a tried and tested way to replace the instrumented\nsystem back with the original system!</p>\n</div>\n</td>\n</tr>\n</table>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_experiences_4">Experiences</h5>\n<div class="admonitionblock warning">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Warning</div>\n</td>\n<td class="content">\neven if used cautiously, the instrumentation of the system under design can\nentail heavy performance penalties (on execution time, space used, bandwith\netc.) so always make sure that there is a quick way to switch back to the\noriginal non-instrumented version.\n</td>\n</tr>\n</table>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_applicability_4">Applicability</h5>\n<div class="paragraph">\n<p>The pattern is almost universally applicable as long as there is a way to\nintroduce instrumentation to the executable and the operations team can be\nconvinced that it is possible to switch back from the instrumented version\nreal fast.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_related_patterns_4">Related Patterns</h5>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Runtime-Analysis">Section 2.3.21, &#8220;<span class="pattern">Runtime-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Software-Archeology">Section 2.3.22, &#8220;<span class="pattern">Software Archeology</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Use-Invariants-To-Kill-Zombies">Section 4.10.9, &#8220;<span class="pattern">Use Invariants To Kill Zombies</span>&#8221;</a></p>\n</li>\n</ul>\n</div>\n</div>'
}