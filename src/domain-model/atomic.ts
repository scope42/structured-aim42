// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const domainModelAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'domain-model',
  id: 'Domain-Model',
  sectionType: 'appendix',
  index: 7,
  caption: 'Appendix A: ',
  title: 'Domain Model',
  titlePlain: 'Domain Model',
  numeral: 'A',
  content:
    '<div class="paragraph">\n<p>Within the systematic improvement we consider and manipulate several\ntypical kinds of information, <strong>entities</strong>.</p>\n</div>\n<div class="paragraph">\n<p><span class="small">For a more pragmatic description, please see the <a href="#_common_terminology">Section 1.4.2, &#8220;Common Terminology&#8221;</a> section</span></p>\n</div>\n<div id="figure-domain-model" class="imageblock">\n<div class="content">\n<img src="./images/aim42-domain-model.png" alt="aim42 domain model">\n</div>\n<div class="title">Figure 41. aim42 domain terminology - detailed</div>\n</div>\n<table class="tableblock frame-all grid-all" style="width: 80%;">\n<colgroup>\n<col style="width: 6.6666%;">\n<col style="width: 26.6666%;">\n<col style="width: 66.6668%;">\n</colgroup>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Cause</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Root cause of an Issue, in contrast to a symptom.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>is-a</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">(inherits from) Issue</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>is real source of</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">one or many Issues.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Configuration</strong></p></td>\n<td class="tableblock halign-left valign-top"></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Constraints</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Technical or organizational constraints, restraining management, design, implementation or operation of the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>restrict</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">the System, associated Processes or Organization.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Documentation</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Any (hopefully written) information about\nthe systems, its goals, requirements, architecture, implementation, operation or management.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Goals</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">What does the Organization or Stakeholder expect from\nthe System, why does the System exist anyway.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Hardware</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Structure and kind of hardware required to develop, test and operate the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Improvement</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Any remedy, opportunity, tactic or strategy to improve the System by resolving one or several Issues.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>modifies</em> or <em>creates</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Risk</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>is remedy for</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>resolves</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">(partially or complete) one or several Issues</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Issue</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Any problem, error, fault, risk, suboptimal situation or their causes within the\nSystem, Processes or Organization related to it (e.g. management, operational, development, administrative or organizational activities).</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Frequency:</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">how often does the Issue occur?</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>resolved by</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">one or several Improvements.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Organization</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The organization or entity responsible or owning the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>source of</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Issues.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Process</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Processes, conventions or activities for developing, maintaining, operating or managing the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>source of</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Issues.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Risk</strong></p></td>\n<td class="tableblock halign-left valign-top"></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">EarlyWarning</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Indicator that the Risk is occuring and turning into a problem.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>is an</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">(inherits from) Issue, but not occurred yet.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Software</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">All source code and configuration that make up the System under improvement. Hopefully stored in version-control.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>is an</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Issue, but not occurred yet.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>Stakeholder</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">People or roles interested or participating in the System or any of its associated Processes.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>belong to</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">the Organization responsible or owning the System.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>knows / informs about</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Issues and/or Improvements. Stakeholders often\n  know about existing problems and opportunities for improvements.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top" colspan="2"><p class="tableblock"><strong>System</strong></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">The system under improvement, consisting of Software, Hardware and Documentation.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>managed and affected by</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Processes</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>remedy</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">the System or aspects of it by Improvements</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>suffers from</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Issue</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>complies with</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">one or several Goals.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock"><em>consists of</em></p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Software, Configuration, Hardware and Documentation.</p></td>\n</tr>\n</tbody>\n</table>'
}
