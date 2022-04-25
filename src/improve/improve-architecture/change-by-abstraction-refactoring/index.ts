// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const changeByAbstractionRefactoring: Section = {
  type: 'section',
  slug: 'change-by-abstraction-refactoring',
  id: 'change-by-abstraction-refactoring',
  sectionType: 'section',
  index: 2,
  title: '<span class="pattern">Change-by-Abstraction Refactoring</span>',
  titlePlain: 'Change-by-Abstraction Refactoring',
  numeral: '3',
  children: [
    {
      type: 'section',
      slug: 'prerequisites-2',
      id: '_prerequisites_2',
      sectionType: 'section',
      index: 0,
      title: 'Prerequisites',
      titlePlain: 'Prerequisites',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Intention to change or replace a cohesive piece of code with a lot of incoming\n(afferent) dependencies. A common example is replacing homegrown ORM or plain SQL with\na standard tool or exchanging a logging library for another with incompatible interfaces.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'intent-42',
      id: '_intent_42',
      sectionType: 'section',
      index: 1,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Incrementally replace part of the system with a new implementation.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-41',
      id: '_description_41',
      sectionType: 'section',
      index: 2,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '3',
      children: [
        {
          type: 'olist',
          content:
            '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Mark the Method or Class you would like to replace as deprecated.</p>\n</li>\n<li>\n<p>Introduce an abstraction that is implemented by the old implementation. If the\nAPI of the new solution differs, consider the Adapter Pattern to perform<br>\n<span class="image"><img src="./images/change-by-abstraction-1.png" alt="Change by abstraction" width="step 1"></span></p>\n</li>\n<li>\n<p>Incrementally move all the calls where the deprecated Class/Method is still\nbeing used to use the new API instead.<br>\n<span class="image"><img src="./images/change-by-abstraction-2.png" alt="Change by abstraction" width="step 2"></span></p>\n</li>\n<li>\n<p>You can now implement and start testing the new functionality by deriving\nit from the abstraction you introduced in step 2.<br>\n<span class="image"><img src="./images/change-by-abstraction-3.png" alt="Change by abstraction" width="step 3"></span></p>\n</li>\n<li>\n<p>When all the places where the deprecated Class/Method is called directly\nare moved to the abstraction, you can use a feature toggle in a proxy class that implements\nthe common abstraction to toggle between the old and the new implementation.<br>\n<span class="image"><img src="./images/change-by-abstraction-3.png" alt="Change by abstraction" width="step 4"></span></p>\n</li>\n<li>\n<p>If you made sure the new functionality performs well enough, you can remove\nthe deprecated implementation and possibly the abstraction.</p>\n</li>\n</ol>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'related-patternsnames',
      id: '_related_patternsnames',
      sectionType: 'section',
      index: 3,
      title: 'Related patterns/names',
      titlePlain: 'Related patterns/names',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>This method is also known as "Branch by Abstraction" and a smiliar technique that\ngoes under the names "Parallel Change" or "Expand and Contract" exists, where the\nabstraction step is skipped and callers are migrated to a new method/object\nimmediately.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>This approach works best when it is used in combination with <a href="#Introduce-Boy-Scout-Rule">Section 4.10.6, &#8220;<span class="pattern">Introduce Boy Scout Rule</span>&#8221;</a>.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'experiences-17',
      id: '_experiences_17',
      sectionType: 'section',
      index: 4,
      title: 'Experiences',
      titlePlain: 'Experiences',
      numeral: '5',
      children: []
    },
    {
      type: 'section',
      slug: 'risks-6',
      id: '_risks_6',
      sectionType: 'section',
      index: 5,
      title: 'Risks',
      titlePlain: 'Risks',
      numeral: '6',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Too many of these half-performed incremental refactorings will leave your code base in a mess.\nYou still need to finish, what you start.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-22',
      id: '_applicability_22',
      sectionType: 'section',
      index: 6,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '7',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Your team is familiar with and embraces Trunk-Based development.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'consequences-13',
      id: '_consequences_13',
      sectionType: 'section',
      index: 7,
      title: 'Consequences',
      titlePlain: 'Consequences',
      numeral: '8',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Teams can collaboratively move code towards a new implementation by replacing\ncalls to deprecated methods/classes with calls to the abstraction, even in parallel.</p>\n</li>\n<li>\n<p>The refactoring can be made incrementally.</p>\n</li>\n<li>\n<p>The build will remain "green", even when the refactoring is unfinished.</p>\n</li>\n<li>\n<p>The abstraction enables comparison of the behaviour of the old to the new implementation in production\nor testing environments to make sure that the new implementation matches the old behaviour.</p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references-20',
      id: '_references_20',
      sectionType: 'section',
      index: 8,
      title: 'References',
      titlePlain: 'References',
      numeral: '9',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p><a href="http://continuousdelivery.com/2011/05/make-large-scale-changes-incrementally-with-branch-by-abstraction/" class="bare">http://continuousdelivery.com/2011/05/make-large-scale-changes-incrementally-with-branch-by-abstraction/</a><br>\n<a href="http://paulhammant.com/blog/branch_by_abstraction.html" class="bare">http://paulhammant.com/blog/branch_by_abstraction.html</a><br>\n<a href="http://www.alwaysagileconsulting.com/application-pattern-verify-branch-by-abstraction/" class="bare">http://www.alwaysagileconsulting.com/application-pattern-verify-branch-by-abstraction/</a><br>\n<a href="http://martinfowler.com/bliki/BranchByAbstraction.html" class="bare">http://martinfowler.com/bliki/BranchByAbstraction.html</a><br>\n<a href="https://printhelloworld.de/posts/refactoring-in-baby-steps/" class="bare">https://printhelloworld.de/posts/refactoring-in-baby-steps/</a><br>\n<a href="https://www.branchbyabstraction.com/" class="bare">https://www.branchbyabstraction.com/</a></p>\n</div>'
        }
      ]
    }
  ]
}
