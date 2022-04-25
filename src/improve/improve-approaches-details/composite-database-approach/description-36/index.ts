// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description36: Section = {
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
}
