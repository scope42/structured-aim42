// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const exampleAtomic: Atomic<Section> = {
  type: 'section',
  slug: 'example',
  id: '_example',
  sectionType: 'section',
  index: 3,
  title: 'Example',
  titlePlain: 'Example',
  numeral: '4',
  content:
    '<div class="paragraph">\n<p>In the context diagram example of fig. <a href="#context-view-example">Figure 10, &#8220;Example of Context View&#8221;</a> you see some user roles and some external systems. The context diagram is accompanied by a tabular description of the elements and/or relationships.\n<span class="small">Example taken from the <a href="https://github.com/aim42/htmlSanityCheck">HtmlSanityCheck (HtmlSC)</a> open source project.</span></p>\n</div>\n<div id="context-view-example" class="imageblock">\n<div class="content">\n<img src="./images/context-view-example.png" alt="Example of Context View">\n</div>\n<div class="title">Figure 10. Example of Context View</div>\n</div>\n<table class="tableblock frame-all grid-all stretch">\n<caption class="title">Table 1. Business Context</caption>\n<colgroup>\n<col style="width: 20%;">\n<col style="width: 80%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top">Neighbor</th>\n<th class="tableblock halign-left valign-top">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">user</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">documents software with toolchain that generates HTML. Wants to ensure that\nlinks within this HTML are valid.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">build system</p></td>\n<td class="tableblock halign-left valign-top"></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">local HTML files</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">HtmlSC reads and parses local HTML files and\nperforms sanity checks within those.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">local image files</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">HtmlSC checks if linked images exist as (local) files.</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">external web resources</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">HtmlSC can be configured to optionally check for the existence\nof external web resources. Due to the nature of web systems, this check might need a significant\namount of time and might yield invalid results due to network and latency issues.</p></td>\n</tr>\n</tbody>\n</table>\n<div class="paragraph">\n<p>In this example, the complete check has to be completed within 5 seconds (a quality requirement). As access to external websites or resources might be hindered by network latency or even failures, the external interface\nresponsible for this requirement will likely contain risks.</p>\n</div>'
}
