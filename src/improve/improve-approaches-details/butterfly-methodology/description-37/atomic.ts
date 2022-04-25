// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description37Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'description-37',
  id: '_description_37',
  sectionType: 'section',
  index: 1,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '2',
  content:
    '<div class="paragraph">\n<p>The Butterfly methodology focuses on data. There is no need for a gateway like in the Chicken-Little Strategy.\nAt the beginning there is an initial data migration, which can be used to develop the new application\nwithout an influence on the legacy system. When the migration process starts, the data of the legacy system\ngets freezed and set to read-only.\nFrom now on data changes will be stored in a temporarily store.\nA Data Access Allocator (DAA) decides, if a request has to be send to temp store (for already changed data) or to the original database.\nWith the help of a Chrysalizer (a data transformator), where transformation rules are implemented, all the data from the read-only database will be moved to the new system.\nNo data will be lost, because changes are written to the first temp store.\nWhen the initial migration is finished, the data of the temp-store will be migrated, changes will be written to a second temp store and the first one\nis set to read-only. This process will continue until the time period of the migration is so short, that there will be no change in between the two stores anymore.\nAt this moment, the legacy system can be shut down, the last temp store gets migrated and the new system is turned on.\nThis approach helps to migrate a productive system without downtime.\nAnother pro is, that the process can be canceled at any time by rolling back the temp stores. It is also possible to execute tests of the parallel\ndevelopment with actual data.\nA problem can be the amount of hardware that is needed to keep all the temp stores if you have a massive amount of data.\nAlso it can be very expensive to implement the DAA.</p>\n</div>\n<div class="imageblock">\n<div class="content">\n<img src="./images/improve-approaches/butterfly.png" alt="Butterfly-Methodology">\n</div>\n<div class="title">Figure 25. Butterfly-Methodology</div>\n</div>'
}
