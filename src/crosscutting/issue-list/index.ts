// This file is generated. Please don't modify it directly.

import { Section } from '../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const issueList: Section = {
  type: 'section',
  slug: 'issue-list',
  id: 'Issue-List',
  sectionType: 'section',
  index: 14,
  title: '<span class="pattern">Issue List</span>',
  titlePlain: 'Issue List',
  numeral: '15',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>A collection of issues (problems, risks) found during <a href="#Collect-Issues">Section 5.7, &#8220;<span class="pattern">Collect Issues</span>&#8221;</a>.</p>\n</div>'
    },
    {
      type: 'section',
      slug: 'intent-55',
      id: '_intent_55',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Collect all known issues and problems within a system or its associated processes. Make the issues comparable by evaluating each one, usually using economical units like money or time.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'content-2',
      id: '_content_2',
      sectionType: 'section',
      index: 1,
      title: 'Content',
      titlePlain: 'Content',
      numeral: '2',
      children: [
        {
          type: 'table',
          content:
            '<table class="tableblock frame-all grid-all stretch">\n<caption class="title">Table 5. Issue List</caption>\n<colgroup>\n<col style="width: 8.3333%;">\n<col style="width: 8.3333%;">\n<col style="width: 25%;">\n<col style="width: 16.6666%;">\n<col style="width: 8.3333%;">\n<col style="width: 8.3333%;">\n<col style="width: 25.0002%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top">ID</th>\n<th class="tableblock halign-left valign-top">Issue</th>\n<th class="tableblock halign-left valign-top">Description</th>\n<th class="tableblock halign-left valign-top">Frequency</th>\n<th class="tableblock halign-left valign-top">min Value</th>\n<th class="tableblock halign-left valign-top">max Value</th>\n<th class="tableblock halign-left valign-top">Improvements</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">identifier</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">name</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">a short description of the issue</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">how often does the issue occur, once, daily, weekly, with every new feature?</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">minimal value</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">maximal value</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">links to improvements</p></td>\n</tr>\n</tbody>\n</table>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'representation-and-tools-2',
      id: '_representation_and_tools_2',
      sectionType: 'section',
      index: 2,
      title: 'Representation and Tools',
      titlePlain: 'Representation and Tools',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>It&#8217;s difficult to decide how much formalism to apply in collecting issues and problems:\nSometimes a wiki page might suffice, for other systems a full-blown\nissue tracker can be useful.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>As always: documentation is only valuable if it can be found easily, which makes electronic approaches more viable.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>For every entry in this issue list we need to <a href="#Estimate-Issue-Cost">Section 3.3.3, &#8220;<span class="pattern">Estimate Issue Cost</span>&#8221;</a>, an estimation of the cost of this issued in any business-related unit.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>In case you already have identified or developed <a href="#Collect-Opportunities-For-Improvement">opportunities for improvement</a> adressing this issue,\nlinks to the corresponding improvements (remedies, tactics, strategies, changes) in the\n<a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a> are neccesssary.</p>\n</div>'
        }
      ]
    }
  ]
}
