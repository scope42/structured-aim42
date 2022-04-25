// This file is generated. Please don't modify it directly.

import { Section } from '../../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const scenarioBasedQualityDescription: Section = {
  type: 'section',
  slug: 'scenario-based-quality-description',
  id: '_scenario_based_quality_description',
  sectionType: 'section',
  index: 0,
  title: 'Scenario-based Quality Description',
  titlePlain: 'Scenario-based Quality Description',
  numeral: '1',
  children: [
    {
      type: 'dlist',
      content:
        '<div class="dlist">\n<dl>\n<dt class="hdlist1">Scenario</dt>\n<dd>\n<p>describes the reaction of a system to a certain event (or type of event).</p>\n</dd>\n</dl>\n</div>'
    },
    {
      type: 'image',
      content:
        '<div id="quality-scenario-diagram" class="imageblock">\n<div class="content">\n<img src="./images/quality-scenario.png" alt="quality scenario">\n</div>\n<div class="title">Figure 9. Structure of Quality Scenarios</div>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Although this definition is concise, it needs some explanation to become understandable. See figure <a href="#quality-scenario-diagram">Figure 9, &#8220;Structure of Quality Scenarios&#8221;</a>:</p>\n</div>'
    },
    {
      type: 'ulist',
      content:
        '<div class="ulist">\n<ul>\n<li>\n<p>An <em>event</em> can be</p>\n<div class="ulist">\n<ul>\n<li>\n<p>a user clicking a button</p>\n</li>\n<li>\n<p>an administrator starting or stopping the system</p>\n</li>\n<li>\n<p>a hacker trying to get unauthorized access.</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>An <em>event</em> can also be</p>\n<div class="ulist">\n<ul>\n<li>\n<p>a manager needing another feature</p>\n</li>\n<li>\n<p>another manager wanting to reduce operation costs</p>\n</li>\n<li>\n<p>some government agency requiring financial data to be tamper-proof</p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>'
    },
    {
      type: 'example',
      content:
        '<div class="exampleblock">\n<div class="title">Example 1. Example scenario "Mandatory changes to Business Processes"*</div>\n<div class="content">\n<table class="tableblock frame-all grid-all fit-content">\n<colgroup>\n<col>\n<col>\n</colgroup>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Context</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The individual processing step AB within use case XY is declared invalid by the regulatory authority and removed from the system. The data processed by the system is not affected.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Business Goal(s)</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The needed changes to the use case XY can be carried out at low cost and without negative effects.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Trigger</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The legislator, represented by the regulatory authority, prohibits the use of the AB processing step.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Reaction</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">A developer or architect removes the AB processing step in the system (by deleting the corresponding calls or reconfiguring the process flows).</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Target value</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The change requires a maximum of 24 hours with a maximum of 48 person-hours of effort. After this time, the system is fully working again.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Constraints</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">This change has no effect on the existing data of the users/customers in the system regarding the XY application case. An (automatic) migration of some data is permitted, but must not exceed the 24-hour limit.</p></td>\n</tr>\n</tbody>\n</table>\n</div>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Such a scenario makes it clear to everyone that not only business functionality is needed to achieve the project&#8217;s goals.\nIt makes technical requirements (in the example above: modifiability) visible to non-technical stakeholders by providing traceability from the business goal to the technical details.</p>\n</div>'
    }
  ]
}
