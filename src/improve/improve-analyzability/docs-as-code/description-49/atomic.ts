// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description49Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'description-49',
  id: '_description_49',
  sectionType: 'section',
  index: 1,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '2',
  content:
    '<div class="paragraph">\n<p>Developer-related documentation of software systems is often neglected. In many situations, it&#8217;s not the lack of ideas for meaningful content that prevents documentation but the way developers have to do it: Separate programs have to be started and other work processes have to be followed. These and many more other distractions lead to long context switch times.</p>\n</div>\n<div class="paragraph">\n<p>The additional effort could be a reason for a rather negative attitude towards documentation on the developer side. As a result, the developer&#8217;s documentation is neglected and becomes obsolete with the time until it can no longer be used for anything at all. Unfortunately, missing or outdated documentation has negative consequences for the understandability of the entire software system.</p>\n</div>\n<div class="paragraph">\n<p>The core idea of Docs-As-Code is to use the same tools and processes for creating documentation as for creating source code. This ensures that there are no high costs for context switches.</p>\n</div>\n<div class="paragraph">\n<p>There are a few practices that ensure that the acceptance of documentation increases in software development teams:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>The documentation format is a simple, text-based format that can be opened and edited in any integrated development environment.</p>\n</li>\n<li>\n<p>The necessary formatting of the texts can be done textually by a corresponding formatting syntax.</p>\n</li>\n<li>\n<p>Diagrams can also be created with a pure text-based approach.</p>\n</li>\n<li>\n<p>Changes to the texts are comparable to standard diffing tools.</p>\n</li>\n<li>\n<p>The documentation is placed directly next to the source code in the same version control system.</p>\n</li>\n<li>\n<p>The creation of the documentation artifacts (such as PDFs or HTML pages) that should be delivered is completely automated.</p>\n</li>\n<li>\n<p>Automated tests check the structure and links within the document when documentation artifacts are created.</p>\n</li>\n<li>\n<p>The same code review process and tooling is used for checking the documentation as well as for source code.</p>\n</li>\n<li>\n<p>Documentation can be maintained in parallel for different versions and merged if required.</p>\n</li>\n<li>\n<p>Optionally: The additional needed documentation is maintained in the same ticket system and implemented with the same processes as the implementation of new features for the software.</p>\n</li>\n</ul>\n</div>\n<div class="paragraph">\n<p>The seamless integration of documentation creation into the software development process means that there are no longer any obstacles for software developers to document necessary facts. By reusing the tools and processes, the documentation work gets the same importance as the writing of source code. Work on documentation becomes as visible as newly written code. The automated creation of documentation artifacts or websites makes the current status of the documentation more clear to other stakeholders such as product owners or project managers.</p>\n</div>'
}
