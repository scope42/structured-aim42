// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const contextAnalysisAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'context-analysis',
  id: 'Context-Analysis',
  sectionType: 'section',
  index: 2,
  title: '<span class="pattern">Context-Analysis</span>',
  titlePlain: 'Context-Analysis',
  numeral: '3',
  content:
    '<div class="sect4">\n<h5 id="_intent_3">Intent</h5>\n<div class="ulist">\n<ul>\n<li>\n<p>Analyse external interfaces for risk, technology, business value and other factors.</p>\n</li>\n<li>\n<p>Use the context to gain <em>overview</em> of the System within its business or\ntechnical environment.</p>\n</li>\n<li>\n<p>Identify risks or problems in the immediate vicinity of the System.</p>\n</li>\n</ul>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_terminology">Terminology</h5>\n<div class="paragraph">\n<p>We distinguish the following terms in context analysis:</p>\n</div>\n<div class="dlist">\n<dl>\n<dt class="hdlist1">Business Context</dt>\n<dd>\n<p>Adjacent organizations, applications, users or interfaces either requiring or providing services or data from or to the System. The business context can be used to describe the overall business process(es) the System is involved in.</p>\n</dd>\n<dt class="hdlist1">Technical Context</dt>\n<dd>\n<p>Adjacent hardware or technical infrastructure, either required by the System or providing data or events to it. When the System can be used or operated in different hardware infrastructures, there might exist several different technical contexts.</p>\n</dd>\n</dl>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_description_3">Description</h5>\n<div class="paragraph">\n<p>Context analysis shall help identify issues associated with <em>external interfaces</em>, e.g. interfaces that:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>influence critical quality requirements of the system (e.g. reliability, security, throughput, runtime performance, operation cost)</p>\n</li>\n<li>\n<p>are overly complex</p>\n</li>\n<li>\n<p>are brittle or fragile</p>\n</li>\n<li>\n<p>are implemented with unsuitable technology</p>\n</li>\n<li>\n<p>are underdocumented or poorly understood</p>\n</li>\n<li>\n<p>transport critical data (important, sensitive, insecure)</p>\n</li>\n<li>\n<p>transport especially huge amounts of data</p>\n</li>\n<li>\n<p>have high operational effort</p>\n</li>\n<li>\n<p>have high usage cost (e.g. cost-per-request or similar)</p>\n</li>\n<li>\n<p>have high cost-of-change or high maintenance costs</p>\n</li>\n<li>\n<p>are difficult or impossible to modify/enhance/change</p>\n</li>\n<li>\n<p>suffer from operational failures or production issues</p>\n</li>\n</ul>\n</div>\n<div class="paragraph">\n<p>Note that <em>user</em> interfaces often belong to the context, especially with\nrespect to the kind of data or events exchanged with users or user groups. Due to the\nimportance of this topic, aim42 devotes an <a href="#User-Analysis">own section</a> to it.</p>\n</div>\n</div>\n<div class="sect4">\n<h5 id="_example">Example</h5>\n<div class="paragraph">\n<p>In the context diagram example of fig. <a href="#context-view-example">Figure 10, &#8220;Example of Context View&#8221;</a> you see some user roles and some external systems. The context diagram is accompanied by a tabular description of the elements and/or relationships.\n<span class="small">Example taken from the <a href="https://github.com/aim42/htmlSanityCheck">HtmlSanityCheck (HtmlSC)</a> open source project.</span></p>\n</div>\n<div id="context-view-example" class="imageblock">\n<div class="content">\n<img src="./images/context-view-example.png" alt="Example of Context View">\n</div>\n<div class="title">Figure 10. Example of Context View</div>\n</div>\n<table class="tableblock frame-all grid-all stretch">\n<caption class="title">Table 1. Business Context</caption>\n<colgroup>\n<col style="width: 20%;">\n<col style="width: 80%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top">Neighbor</th>\n<th class="tableblock halign-left valign-top">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">user</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">documents software with toolchain that generates HTML. Wants to ensure that\nlinks within this HTML are valid.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">build system</p></td>\n<td class="tableblock halign-left valign-top"></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">local HTML files</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">HtmlSC reads and parses local HTML files and\nperforms sanity checks within those.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">local image files</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">HtmlSC checks if linked images exist as (local) files.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">external web resources</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">HtmlSC can be configured to optionally check for the existence\nof external web resources. Due to the nature of web systems, this check might need a significant\namount of time and might yield invalid results due to network and latency issues.</p></td>\n</tr>\n</tbody>\n</table>\n<div class="paragraph">\n<p>In this example, the complete check has to be completed within 5 seconds (a quality requirement). As access to external websites or resources might be hindered by network latency or even failures, the external interface\nresponsible for this requirement will likely contain risks.</p>\n</div>\n</div>'
}
