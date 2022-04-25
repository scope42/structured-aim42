// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description34: Section = {
  type: 'section',
  slug: 'description-34',
  id: '_description_34',
  sectionType: 'section',
  index: 1,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '2',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The Database First approach (also called the Forward Migration Method) involves the initial\nmigration of legacy data to a modern, probably relational, Database Management System (DBMS) and\nthen incrementally migrating the legacy applications and interfaces.\nWhile legacy applications and interfaces are being redeveloped, the legacy system remains operable. This\nmethodology falls within a group of methodologies which allow for the interoperability between both the\nlegacy and target systems. This interoperability is provided by a module known as\nGateway: a software module introduced between components to mediate between them. Gateways\ncan play several roles in migration, insulating certain components from changes being made to others,\ntranslating requests and data between components or coordinating queries and updates between components.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The concrete gateway used by the Database First approach is called Forward Gateway. It enables the\nlegacy applications to access the database environment in the target side of the migration process, as shown in\nFig. 1.  This gateway translates and redirects these calls forward to the new database service.  Results returned\nby the new database service are similarly translated for used by legacy applications.</p>\n</div>'
    },
    {
      type: 'image',
      content:
        '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/databaseFirst.png" alt="Database-First-Approach">\n</div>\n<div class="title">Figure 22. Database-First-Approach</div>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The main advantage of this approach is that once the legacy data has been migrated, the latest programming\nlanguages and reporting tools can be used to access the data providing immediate productivity benefits. The legacy system can remain operational while legacy applications and interfaces are rebuilt and migrated to the target system one-by-one. When the migration is complete, the gateway will no longer be required and can be decommissioned as the old legacy system is shut down.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>There are several disadvantages to this approach, in particular, it is only applicable to fully decomposable\nlegacy systems where a clean interface to the legacy database service exists. Also, before migration can start, the new database structure must be defined. The major risk with this activity is that the structure of the legacy database may adversely influence the structure of the new database.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The Forward Gateway employed can be very difficult, and sometimes even impossible, to construct due to the differences between the source and the target in technology, in database structure, constraints etc..</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Overall this is a rather simplistic approach to legacy system migration. The migration of the legacy data may\ntake a significant amount of time during which the legacy system will be inaccessible.  When dealing with\nmission critical information systems this may be unacceptable.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>(taken from BISBAL, J. et.al.)</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The database first approach (also known as forward migration method) provides for legacy databases to be moved unchanged into a relational database management system (RDBMS) to incrementally develop the user interface and the applications on the target system. But there is a need for a gateway to accept database calls from the legacy system and to redirect them to the new database system.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>As BATEMAN and MURPHY say, there are a few problems and challenges:</p>\n</div>'
    },
    {
      type: 'ulist',
      content:
        '<div class="ulist">\n<ul>\n<li>\n<p>to develop a forward gateway can be complex or even impossible, because there can be big differences in technologies according to structure, constraints, query languages and semantic heterogeneity.</p>\n</li>\n<li>\n<p>usually reverse gateways are available on the market. Vendor tools often enable remote database access for example by sql. The purpose is that the legacy system becomes a big database server.</p>\n</li>\n<li>\n<p>a pre condition to develop a forward gateway is, that the legacy system has clearly specified interfaces to the database layer. If this is not the case, there have to be expensive modifications to the applications, which can be time and cost intensive.</p>\n</li>\n<li>\n<p>maybe there are a lot of external systems like reports, relying on the interaction with the legacy system. These systems have to be localized and analysed, so that they won&#8217;t crash after the migration.</p>\n</li>\n<li>\n<p>the new database structure has to be designed and the data mapping has to be implemented before the migration can start. A problem can be data structures, that can not be adopted to the new data structure.</p>\n</li>\n</ul>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The main advantage of the database first approach is, that after the big-bang migration of the database, new programming languages and\nreporting tools can be used with the new database system. New applications can be developed in parallel to the legacy system, step by step,\nmodule by module, without an influence on the legacy system. As the migration is finished, the gateway can be deactivated and the\nlegacy system can be shut down.</p>\n</div>'
    }
  ]
}
