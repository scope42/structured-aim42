// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const captureQualityRequirements: Section = {
  type: 'section',
  slug: 'capture-quality-requirements',
  id: 'Capture-Quality-Requirements',
  sectionType: 'section',
  index: 1,
  title: '<span class="pattern">Capture Quality Requirements</span>',
  titlePlain: 'Capture Quality Requirements',
  numeral: '2',
  children: [
    {
      type: 'section',
      slug: 'intent-2',
      id: '_intent_2',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Make the specific quality requirements of a system explicit.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-2',
      id: '_description_2',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Invite authoritative stakeholders to a joint workshop (e.g. half- or full-day).\nLet them write <em>quality scenarios</em> to describe their specific quality requirements for the system. Moderate this workshop.</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Use <em>scenarios</em> to formulate specific quality requirements.</p>\n</li>\n<li>\n<p>Order those scenarios within a mostly hierarchical quality tree, similar to <a href="#ISO-9126">[ISO-9126]</a>.</p>\n</li>\n</ul>\n</div>'
        },
        {
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
      ]
    },
    {
      type: 'section',
      slug: 'experiences-2',
      id: '_experiences_2',
      sectionType: 'section',
      index: 2,
      title: 'Experiences',
      titlePlain: 'Experiences',
      numeral: '3',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><strong>Needs moderation</strong>: Brainstorming quality requirements usually works well in moderated workshops. If given (even trivial) examples, every stakeholder will most likely write down several scenarios. We often received 80-120 different scenarios in one-day workshops.</p>\n</li>\n<li>\n<p><strong>Uncovers problems and risks</strong>: Scenarios collected within brainstorming sessions often contain <em>hidden</em> problem descriptions, risks or problems with the current systems.</p>\n</li>\n<li>\n<p><strong>Covers organization and process</strong>: Scenarios sometimes cover process or organizational aspects (like release cycles should be faster than they are now). Move those to your <a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a>.</p>\n</li>\n<li>\n<p><strong>Improves human communication</strong>: Different stakeholders often start communicating about the system or their requirements during such workshops. This kind of interaction <em>should</em> have happened long before&#8230;&#8203;</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-2',
      id: '_applicability_2',
      sectionType: 'section',
      index: 3,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Use this practice when (authoritative) stakeholders are available for discussion or a workshop.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>If you have well-documented, specific and current (!) quality requirements available, you might consider skipping this practice for now (although we&#8217;re quite sure it&#8217;s a good opportunity to learn a lot about the system, its stakeholders, their requirements and opinions).</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'consequences',
      id: '_consequences',
      sectionType: 'section',
      index: 4,
      title: 'Consequences',
      titlePlain: 'Consequences',
      numeral: '5',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>The required constraints (aka quality attributes) of a system are made explicit.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'also-known-as',
      id: '_also_known_as',
      sectionType: 'section',
      index: 5,
      title: 'Also Known As',
      titlePlain: 'Also Known As',
      numeral: '6',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Non-functional requirements (although this term is misleading, as <em>functional</em> requirements strongly influence the <em>quality</em> of any system!)</p>\n</li>\n<li>\n<p>Documentation of quality requirements.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'related-patterns-2',
      id: '_related_patterns_2',
      sectionType: 'section',
      index: 6,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '7',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#ATAM">Section 2.3.1, &#8220;<span class="pattern">Atam</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Qualitative-Analysis">Section 2.3.14, &#8220;<span class="pattern">Qualitative Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Requirements-Analysis">Section 2.3.19, &#8220;<span class="pattern">Requirements-Analysis</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references',
      id: '_references',
      sectionType: 'section',
      index: 7,
      title: 'References',
      titlePlain: 'References',
      numeral: '8',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The workshop-based collection of quality requirements has been described by\n<a href="#Clements-ATAM">[Clements-ATAM]</a>.</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Real-world examples of software quality requirements (currently available only in German): <a href="https://github.com/arc42/quality-requirements" class="bare">https://github.com/arc42/quality-requirements</a></p>\n</li>\n<li>\n<p><a href="#Clements-ATAM">[Clements-ATAM]</a> contains a brief description of scenario-based quality description and details on how to set up such workshops.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
