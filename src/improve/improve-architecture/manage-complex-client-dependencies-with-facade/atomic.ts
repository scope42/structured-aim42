// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const manageComplexClientDependenciesWithFacadeAtomic: Atomic<Section> =
  {
    type: 'section',
    slug: 'manage-complex-client-dependencies-with-facade',
    id: 'Manage-Complex-Client-Dependencies-With-Facade',
    sectionType: 'section',
    index: 6,
    title:
      '<span class="pattern">Manage Complex Client Dependencies With Facade</span>',
    titlePlain: 'Manage Complex Client Dependencies With Facade',
    numeral: '7',
    content:
      '<div class="sect4">\n<h5 id="_intent_46">Intent</h5>\n<div class="paragraph">\n<p>Simplify the interaction of a client with a set of service components.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_description_45">Description</h5>\n<div class="paragraph">\n<p>When clients use a set of components with repeating patterns these\ninteraction patterns are implemented in a Facade component.</p>\n</div>\n<div class="paragraph">\n<p>The interface the Facade provides to the client is tailored to the client&#8217;s\nneed. Technical details that are specific for the service component implementations\nare handled inside the facade.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_experiences_20">Experiences</h5>\n<div class="paragraph">\n<p>Consider a Facade if you must use generic frameworks or systems you cannot modify\ne.g. legacy systems.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_applicability_26">Applicability</h5>\n<div class="paragraph">\n<p>Apply this pattern when clients use a set of components in stereotypcial fashion.\nThings that can be handled by a facade:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>recurring control flows</p>\n</li>\n<li>\n<p>technical details</p>\n<div class="ulist">\n<ul>\n<li>\n<p>configuration of components</p>\n</li>\n<li>\n<p>resource lookup</p>\n</li>\n<li>\n<p>error handling</p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_consequences_17">Consequences</h5>\n<div class="ulist">\n<ul>\n<li>\n<p>Enhances Information Hiding. Clients do not need information about the components\' technical detail.</p>\n</li>\n<li>\n<p>Supports DRY principle: complex interactions are implemented in one place. No need to reimplement this in different clients.</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_also_known_as_16">Also Known As</h5>\n\n</div>\n<div class="sect4">\n<h5 id="_related_patterns_28">Related Patterns</h5>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#Interface-Segregation-Principle">Section 4.10.5, &#8220;<span class="pattern">Interface Segregation Principle</span>&#8221;</a></p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_references_24">References</h5>\n\n</div>'
  }
