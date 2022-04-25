// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description35: Section = {
  type: 'section',
  slug: 'description-35',
  id: '_description_35',
  sectionType: 'section',
  index: 1,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '2',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The Database Last approach, also called the\nReverse Migration Method, is based on a similar\nconcept to the Database First approach and is also\nsuitable only for fully decomposable legacy systems.\nLegacy applications are gradually migrated to the target\nplatform while the legacy database remains on the\noriginal platform. The legacy database migration is the\nfinal step of the migration process.  As with the\nDatabase First approach, a gateway is used to allow for\nthe interoperability of both information systems. In this\ncase a Reverse Gateway enables target applications to\naccess the legacy data management environment. It is\nemployed to convert calls from the newly created\napplications and redirect them to the legacy database\nservice, as shown in Fig. 1.</p>\n</div>'
    },
    {
      type: 'image',
      content:
        '<div class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/databaseLast.png" alt="Database-Last-Approach">\n</div>\n<div class="title">Figure 23. Database-Last-Approach</div>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>If the legacy database service is to be migrated to a\nrelational database management service, then the target\napplications will be developed completely with SQL\ncalls to the data service.  It is these calls that are\ncaptured by the Reverse Gateway and converted to the\nequivalent legacy calls.  The Database Last approach\nhas a lot in common with the client/server paradigm.\nThe legacy database takes on the role of a database\nserver with the  target applications operating as clients.\nThere are commercial products available which\neffectively act as reverse gateways.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>The Database Last approach is not without its\nproblems however. Performance issues can be raised\nwith regard to the gateway.  The Reverse Gateway will\nbe responsible for mapping the target database schema\nto the legacy database.  This mapping can be complex\nand slow which will affect the new applications. Also\nmany of the complex features found in relational\ndatabases (integrity, consistency constraints, triggers\netc.), may not be found in the archaic legacy database,\nand hence cannot be exploited by the new application.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>This approach is probably more commercially\nacceptable than the Database First approach as legacy\napplications can continue to operate normally while\nbeing redeveloped.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>However, the migration of the\nlegacy data will still require that the legacy system be\ninaccessible for a significant amount of time.  When\ndealing with mission critical information systems, this\nmay be unacceptable</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>(taken from BISBAL, J. et.al.)</p>\n</div>'
    }
  ]
}
