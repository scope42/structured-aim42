// This file is generated. Please don't modify it directly.

import { Section } from '../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const improveApproachesOverview: Section = {
  type: 'section',
  slug: 'improve-approaches-overview',
  id: 'improve-approaches-overview',
  sectionType: 'section',
  index: 3,
  title: 'Improvement Approaches (Overview)',
  titlePlain: 'Improvement Approaches (Overview)',
  numeral: '4',
  children: [
    {
      type: 'image',
      content:
        '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches-categories.png" alt="improve approaches categories">\n</div>\n<div class="title">Figure 18. Categories of Improvement Approaches</div>\n</div>'
    },
    {
      type: 'dlist',
      content:
        '<div class="hdlist">\n<table>\n<tr>\n<td class="hdlist1">\nData Migration\n</td>\n<td class="hdlist2">\n<p>Keep your (valuable) data, and toss (or rewrite or otherwise change) your code. Oftentimes\ncombined with approaches from the categories <em>rewrite</em> or <em>restructure</em>.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nRewrite\n</td>\n<td class="hdlist2">\n<p>Your system is <em>broken beyond repair</em> and you need to completely replace it by a new one.\nRewrite approaches give you some ideas how and if that might work (spoiler: we fear that <span class="pattern">Big-Bang</span> won&#8217;t work&#8230;&#8203;)</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nRestructure\n</td>\n<td class="hdlist2">\n<p>Improve your system by restructuring your code <em>in-the-large</em>. Might involve extraction of\ncertain functionalities, splitting your system, improving the modularization or strangulating\ncertain (bad) parts of the system (and, of course, replacing those by better solutions).</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nImprove Modularization\n</td>\n<td class="hdlist2">\n<p>Subcategory of <em>restructure</em>: improve responsibilities within the system, improving the boundaries between components, improving interfaces and similar operations.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nBrainsize\n</td>\n<td class="hdlist2">\n<p>Evidence from neuroscience suggests our working memory has a capacity of about four items <sup class="footnote">[<a id="_footnoteref_15" class="footnote" href="#_footnotedef_15" title="View footnote.">15</a>]</sup>. That&#8217;s why smaller solutions tend to be more maintainable, as the cognitive load on the developers working memory is reduced. These "brainsizing" strategies can be used to reduce the amount of <em>stuff</em>, e.g. by splitting your system up, extracting certain parts into abstractions, or other ways to reduce LOC or other complexity metrics. Terms like <em>microservices</em> fall into this category.</p>\n</td>\n</tr>\n<tr>\n<td class="hdlist1">\nImprove-Domain-Focus\n</td>\n<td class="hdlist2">\n<p>Subcategory of <em>restructure</em>:Clear separation of domain-related code from purely technical aspects has long been a useful design heuristic - but is still often violated.\nIn addition, aspects belonging to similar areas of the domain should be implemented within the same building-blocks (in Domain-Drive Design terminology called <em>Bounded Context</em>).</p>\n</td>\n</tr>\n</table>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>You find further information on the  <a href="#improve-approaches-details">detailed approaches here</a>.</p>\n</div>'
    }
  ]
}
