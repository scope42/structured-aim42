// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const howToAddANewPatternOrPracticeAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'how-to-add-a-new-pattern-or-practice',
  id: '_how_to_add_a_new_pattern_or_practice',
  sectionType: 'appendix',
  index: 11,
  caption: 'Appendix E: ',
  title: 'How to add a new pattern or practice',
  titlePlain: 'How to add a new pattern or practice',
  numeral: 'E',
  content:
    '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Add the pattern to the related section in analyze.adoc, evaluate.adoc or\nimprove.adoc\nUse the exact spelling (e.g. including dashes) you intend to use in the pattern\ndescription</p>\n</li>\n<li>\n<p>Add the pattern to the pattern catalog in pattern-index.adoc</p>\n</li>\n<li>\n<p>Entries in the pattern-index which currently don&#8217;t have a detailed description in\ntheir own file are preceded with an anchor, like <em>[[the-exact-name]]</em></p>\n</li>\n<li>\n<p>If you describe a pattern or practice in detail, create a new file with the appropriate name and the .adoc extension under the pattern subdirectory.</p>\n</li>\n<li>\n<p>At the beginning of that new file, include the anchor, like <em>[[the-exact-name]]</em>. See below for an example.</p>\n<div class="literalblock">\n<div class="content">\n<pre>[[the-exact-name]]\n=== The Exact Name\n(write your pattern description here...)</pre>\n</div>\n</div>\n</li>\n<li>\n<p>Add an include statement below the pattern overview in analyze.adoc,\nevaluate.adoc or improve.adoc</p>\n<div class="listingblock">\n<div class="content">\n<pre> include::patterns/the-exact-name.adoc[]</pre>\n</div>\n</div>\n</li>\n<li>\n<p>In the pattern index, create a reference, like _&lt;&lt;the-exact-name&gt;&gt;</p>\n</li>\n</ol>\n</div>'
}
