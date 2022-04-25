// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const anticorruptionLayerAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'anticorruption-layer',
  id: 'Anticorruption-Layer',
  sectionType: 'section',
  index: 1,
  title: '<span class="pattern">Anticorruption Layer</span>',
  titlePlain: 'Anticorruption Layer',
  numeral: '2',
  content:
    '<div class="sect4">\n<h5 id="_intent_41">Intent</h5>\n<div class="paragraph">\n<p>An anticorruption layer is a logical layer that provides a stable interface to (potentially) volatile software components. As long as this interface remains untouched developers can implement changes or even replace their own or third-party software without affecting the clients of this interface.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_description_40">Description</h5>\n<div class="paragraph">\n<p>The original definition <a href="#Evans03">[Evans03, p. 365]</a>:</p>\n</div>\n<div class="quoteblock">\n<blockquote>\n""\nCreate an isolating layer to provide clients with functionality in terms of their own domain model. The layer talks to the other system through its existing interface, requiring little or no modification to the other system. Internally, the layer translates in both directions as necessary between the two models.\n""\n</blockquote>\n<div class="attribution">\n&#8212; Eric Evans<br>\n<cite>Domain Driven Design</cite>\n</div>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_experiences_16">Experiences</h5>\n<div class="paragraph">\n<p>Here are some real-life experiences:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>Anticorruption layer for a search-index to defer the decision if the best performance can be achieved with Elastic Search, Solr or a self-developed Lucene index.</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_applicability_21">Applicability</h5>\n<div class="paragraph">\n<p>Apply this pattern when clients shall be protected from internal changes in a module or subsystem.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_consequences_12">Consequences</h5>\n<div class="ulist">\n<ul>\n<li>\n<p>Allows to (ex)change software elements without affecting depending components</p>\n</li>\n<li>\n<p>Introduces one more level of indirection and thus may increase complexity</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_also_known_as_12">Also Known As</h5>\n<div class="ulist">\n<ul>\n<li>\n<p>Isolation layer</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_related_patterns_25">Related Patterns</h5>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#Isolate-Changes">[Isolate-Changes]</a>, as an alternative or complimenting approach</p>\n</li>\n<li>\n<p><a href="#Bulkhead">[Bulkhead]</a>, introduces stability boundaries within applications or systems by segmenting runtime resources.</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_references_19">References</h5>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#Evans03">[Evans03]</a> p. 364ff.</p>\n</li>\n</ul>\n</div>\n</div>'
}
