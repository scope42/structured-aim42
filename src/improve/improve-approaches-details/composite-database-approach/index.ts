// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const compositeDatabaseApproach: Section = {
  type: 'section',
  slug: 'composite-database-approach',
  id: 'composite-database-approach',
  sectionType: 'section',
  index: 4,
  title: '<span class="pattern">Composite Database Approach</span>',
  titlePlain: 'Composite Database Approach',
  numeral: '5',
  children: [
    {
      type: 'section',
      slug: 'intent-37',
      id: '_intent_37',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: []
    },
    {
      type: 'section',
      slug: 'description-36',
      id: '_description_36',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>In Composite Database approach, the legacy\ninformation system and its target information system are\noperated in parallel throughout the migration project.\nThe target applications are gradually rebuilt on the\ntarget platform using modern tools and technology.\nInitially the target system will be quite small but will\ngrow as the migration progresses. Eventually the target\nsystem should perform all the functionality of the\nlegacy system and the old legacy system can be retired.</p>\n</div>'
        },
        {
          type: 'image',
          content:
            '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/composite.png" alt="Composite-Database-Approach">\n</div>\n<div class="title">Figure 24. Composite-Database Approach</div>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>During the migration, the old legacy system and its\ntarget system form a composite information system, as\nshown in Fig. 1, employing a\ncombination of forward and reverse gateways.  The\napproach may involve data being duplicated across both\nthe legacy database and the target database.  To\nmaintain data integrity, a Transaction Coordinator is\nemployed which intercepts all update requests, from\nlegacy or target applications, and processes them to\nidentify whether they refer to data replicated in both\ndatabases. If they do, the update is propagated to both\ndatabases using a two-phase commit protocol as for\ndistributed database systems.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Analysing non-decomposable legacy components\ncan be very difficult.  In the worst case the component\nmust be treated as a black box. The best that can be\nachieved is to discover its functionality and try to elicit\nas much legacy data as possible. Sometimes using\nexisting legacy applications (e.g. database query,\nreport generation and access routines) are the only way\nto extract the legacy data. Once the functionality has\nbeen ascertained, the component can be redeveloped\nfrom scratch. It can often be very difficult to identify\nwhen legacy data or functions are independent. In many\ncases they may simply have to be replicated and target\ncopies coordinated until the entire legacy system can\nbe safely retired.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The Composite Database approach eliminates the\nneed for a single large migration of legacy data as\nrequired in the Database First and Database Last\napproaches. This is significant in a mission critical\nenvironment. However, this approach suffers from the\noverhead not only of the other two approaches but also\nthe added complexity introduced by the coordinator.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>(taken from BISBAL, J. et.al.)</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-17',
      id: '_applicability_17',
      sectionType: 'section',
      index: 2,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The Composite Database approach is\napplicable to fully decomposable, semi-decomposable\nand non-decomposable legacy systems.  In reality, few\nlegacy systems fit easily into a single category.  Most\nlegacy systems have some decomposable components,\nsome which are semi-decomposable and others which\nare non-decomposable, i.e. what is known as a Hybrid\nInformation System architecture.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'related-patterns-22',
      id: '_related_patterns_22',
      sectionType: 'section',
      index: 3,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '4',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Chicken-Little-Strategy">Section 4.7.2, &#8220;<span class="pattern">Chicken-Little Approach</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references-16',
      id: '_references_16',
      sectionType: 'section',
      index: 4,
      title: 'References',
      titlePlain: 'References',
      numeral: '5',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>BISBAL, J. et.al.; A Survey of Research into Legacy System Migration. Technical Report TCD-CS-1997-01, Computer Science Department, Trinity College Dublin, 1997. <a href="http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.50.9051" class="bare">http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.50.9051</a></p>\n</li>\n<li>\n<p>Praful Todkar wrote the blog article "How to extract a data-rich service from a monolith" on <a href="https://martinfowler.com/articles/extract-data-rich-service.html">martinfowler.com</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
