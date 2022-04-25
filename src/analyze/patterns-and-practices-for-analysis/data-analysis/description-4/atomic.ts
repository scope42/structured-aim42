// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description4Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'description-4',
  id: '_description_4',
  sectionType: 'section',
  index: 1,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '2',
  content:
    '<div class="paragraph">\n<p>In data analysis you could examine the following topics:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#_analyze_data_structures">Data Structure</a></p>\n</li>\n<li>\n<p><a href="#_analyze_data_access">Data Access</a></p>\n</li>\n<li>\n<p><a href="#_analyze_data_size">Data Size</a></p>\n</li>\n<li>\n<p><a href="#_analyze_data_validation">Data Validation</a></p>\n</li>\n<li>\n<p><a href="#_analyze_data_actuality_and_correctness">Data Actuality and Correctness</a> (which covers integrity issues as well)</p>\n</li>\n<li>\n<p><a href="#_analyze_data_access_protection">Data Access Protection</a></p>\n</li>\n<li>\n<p>Analyze Data Distribution, Replication and Syncing</p>\n</li>\n<li>\n<p><a href="#_analyze_backup">Backup</a></p>\n</li>\n</ul>\n</div>\n<div class="sect5">\n<h6 id="_analyze_data_structures">Analyze Data Structures</h6>\n<div class="paragraph">\n<p>Are data structures suited to represent the problem domain?</p>\n</div>\n<div class="paragraph">\n<p>At first, make the <em>structure</em> of the existing data explicit,\ne.g. by creating a rough sketch of a data model as either\ninformal diagrams, entity-relationship or class diagrams.\nFocus should be on overview: Where and how are which kinds of\ndata stored in which format. What are the relationships between\nthe data elements?</p>\n</div>\n<div class="paragraph">\n<p>Second, create an explicit model of the <em>required domain data structures</em>.</p>\n</div>\n<div class="paragraph">\n<p>Some typical questions might help in finding problems:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>structural differences between those two models?</p>\n</li>\n<li>\n<p>differences in data types?</p>\n</li>\n<li>\n<p>differences in plausibility or validity checking?</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect5">\n<h6 id="_analyze_data_access">Analyze Data Access</h6>\n<div class="paragraph">\n<p>Get an overview of data access paths: How is data read or written?\nDo the queries match their requirements, or are complex mappings\nor unsuitable indirections involved?</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>What queries or executed how often?</p>\n</li>\n<li>\n<p>How large are the results in number or volume?</p>\n</li>\n<li>\n<p>Do relationships between query results have to be computed or do appropriate indices exist?</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect5">\n<h6 id="_analyze_data_size">Analyze Data Size</h6>\n<div class="ulist">\n<ul>\n<li>\n<p>Are some parts of the data especially large?</p>\n</li>\n<li>\n<p>Is the relation between record-size (<em>how large is a single record</em>?)\nand record-volume (<em>how many records exists</em>?) plausible?</p>\n</li>\n<li>\n<p>Do critical queries involve especially large parts of data?</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect5">\n<h6 id="_analyze_data_validation">Analyze Data Validation</h6>\n<div class="ulist">\n<ul>\n<li>\n<p>How is data validated? (upon write, upon read, on client, on server, redundantly, uniformly)</p>\n</li>\n<li>\n<p>Is validation consistent with current business rules?</p>\n</li>\n<li>\n<p>Is validation overly complex?</p>\n</li>\n<li>\n<p>Is validation implemented with appropriate technical means?</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect5">\n<h6 id="_analyze_data_actuality_and_correctness">Analyze Data Actuality and Correctness</h6>\n<div class="paragraph">\n<p>Especially in data concerning dynamic entities like people, organizations,\nmarkets, commodities etc., facts are very likely to change over time.\nSuch data (<em>stored facts</em>) might become invalid sooner or later.\nOther types of information (like tax records, invoices or bookings on bank accounts) are created once and remain valid forever).</p>\n</div>\n<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="ulist">\n<ul>\n<li>\n<p>Peoples\' address typically changes something between 2-10 times during\ntheir lives.</p>\n</li>\n<li>\n<p>Empirical studies show that between 5 and 10% of business or job email addresses\nbecome invalid every year.</p>\n</li>\n</ul>\n</div>\n</td>\n</tr>\n</table>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>Which parts of the data are subject to (what kind of) changes?</p>\n</li>\n<li>\n<p>Are parts of the data known to be invalid or contain invalid portions?</p>\n</li>\n<li>\n<p>Does the System handle potentially wrong or invalid data appropriately?</p>\n</li>\n<li>\n<p>Are there (organizational or technical) processes in place that deal with\ndata inconsistencies or faults?</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect5">\n<h6 id="_analyze_data_access_protection">Analyze Data Access Protection</h6>\n<div class="ulist">\n<ul>\n<li>\n<p>Is there an overview what kinds of data need which level of (access) protection?</p>\n</li>\n<li>\n<p>Is there a security concept in place covering protection against unauthorized access?</p>\n<div class="ulist">\n<ul>\n<li>\n<p>How are users/roles/organizations <em>allowed</em> to access data managed?</p>\n</li>\n<li>\n<p>Is there a process in place to revoke access for outdated users/roles/organizations?</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>Is there a plan what shall happen in case of security breaches or data theft?</p>\n</li>\n<li>\n<p>How is data theft recognized?</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect5">\n<h6 id="_analyze_backup">Analyze Backup</h6>\n<div class="ulist">\n<ul>\n<li>\n<p>Is there a universal backup strategy in place, covering all areas of data storage?</p>\n</li>\n<li>\n<p>Does the backup strategy match the business criticality of the data?</p>\n</li>\n<li>\n<p>To what extend has the backup been verified?</p>\n</li>\n<li>\n<p>Does a fallback scenario exist in case of (partial or complete) data loss?</p>\n</li>\n</ul>\n</div>\n</div>'
}
