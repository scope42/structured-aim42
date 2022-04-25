// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const docsAsCode: Section = {
  type: 'section',
  slug: 'docs-as-code',
  id: 'Docs-As-Code',
  sectionType: 'section',
  index: 1,
  title: '<span class="pattern">Docs-As-Code</span>',
  titlePlain: 'Docs-As-Code',
  numeral: '2',
  children: [
    {
      type: 'section',
      slug: 'intent-50',
      id: '_intent_50',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Docs-As-Code is a documentation approach that raises developer-related documentation to the same importance as source code.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-49',
      id: '_description_49',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Developer-related documentation of software systems is often neglected. In many situations, it&#8217;s not the lack of ideas for meaningful content that prevents documentation but the way developers have to do it: Separate programs have to be started and other work processes have to be followed. These and many more other distractions lead to long context switch times.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The additional effort could be a reason for a rather negative attitude towards documentation on the developer side. As a result, the developer&#8217;s documentation is neglected and becomes obsolete with the time until it can no longer be used for anything at all. Unfortunately, missing or outdated documentation has negative consequences for the understandability of the entire software system.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The core idea of Docs-As-Code is to use the same tools and processes for creating documentation as for creating source code. This ensures that there are no high costs for context switches.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>There are a few practices that ensure that the acceptance of documentation increases in software development teams:</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>The documentation format is a simple, text-based format that can be opened and edited in any integrated development environment.</p>\n</li>\n<li>\n<p>The necessary formatting of the texts can be done textually by a corresponding formatting syntax.</p>\n</li>\n<li>\n<p>Diagrams can also be created with a pure text-based approach.</p>\n</li>\n<li>\n<p>Changes to the texts are comparable to standard diffing tools.</p>\n</li>\n<li>\n<p>The documentation is placed directly next to the source code in the same version control system.</p>\n</li>\n<li>\n<p>The creation of the documentation artifacts (such as PDFs or HTML pages) that should be delivered is completely automated.</p>\n</li>\n<li>\n<p>Automated tests check the structure and links within the document when documentation artifacts are created.</p>\n</li>\n<li>\n<p>The same code review process and tooling is used for checking the documentation as well as for source code.</p>\n</li>\n<li>\n<p>Documentation can be maintained in parallel for different versions and merged if required.</p>\n</li>\n<li>\n<p>Optionally: The additional needed documentation is maintained in the same ticket system and implemented with the same processes as the implementation of new features for the software.</p>\n</li>\n</ul>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The seamless integration of documentation creation into the software development process means that there are no longer any obstacles for software developers to document necessary facts. By reusing the tools and processes, the documentation work gets the same importance as the writing of source code. Work on documentation becomes as visible as newly written code. The automated creation of documentation artifacts or websites makes the current status of the documentation more clear to other stakeholders such as product owners or project managers.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'experiences-24',
      id: '_experiences_24',
      sectionType: 'section',
      index: 2,
      title: 'Experiences',
      titlePlain: 'Experiences',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>When documentation and source code are in the very same code repository, developers can be kind of forced to update the documentation when they write new features or update existing ones. With the help of pull requests and code review techniques, it can be checked very quickly if necessary documentation updates were made.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-30',
      id: '_applicability_30',
      sectionType: 'section',
      index: 3,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Apply this pattern when there is a clear lack of documentation. Start by defining the minimum required scope of documentation for new features (e. g. take some parts of the arc42 documentation template as a guidance if developers complain that they don&#8217;t know what to document).</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Show the documentation in sprint reviews to make non-technical developers aware of the newly created content.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'consequences-21',
      id: '_consequences_21',
      sectionType: 'section',
      index: 4,
      title: 'Consequences',
      titlePlain: 'Consequences',
      numeral: '5',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Can lead to grumbling at the beginning (at the latest when the first pull request is declined due to missing documentation).</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references-28',
      id: '_references_28',
      sectionType: 'section',
      index: 5,
      title: 'References',
      titlePlain: 'References',
      numeral: '6',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="https://docs-as-co.de/" class="bare">https://docs-as-co.de/</a></p>\n</li>\n<li>\n<p><a href="https://doctoolchain.github.io/docToolchain/" class="bare">https://doctoolchain.github.io/docToolchain/</a></p>\n</li>\n<li>\n<p><a href="http://www.writethedocs.org/guide/docs-as-code/" class="bare">http://www.writethedocs.org/guide/docs-as-code/</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
