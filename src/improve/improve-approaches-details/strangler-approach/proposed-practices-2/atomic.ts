// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const proposedPractices2Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'proposed-practices-2',
  id: '_proposed_practices_2',
  sectionType: 'section',
  index: 6,
  title: 'Proposed practices',
  titlePlain: 'Proposed practices',
  numeral: '7',
  content:
    '<div class="paragraph">\n<p>Paul Hammant recommends the following practices [2]:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>You really should phase the strangulation. Keep your larger application in a continually deployable state while working on it.\nThe first go live after a month or so of work, then every two weeks after that at least or you&#8217;ll fail. That would\nprobably via project cancellation by a checkbook-holding sponsor.</p>\n</li>\n<li>\n<p>Do enhancements or new "business value" work concurrently with strangulation, while getting all to agree that both are\nhappening. As you work on the strangulation, a decent percentage of work should be enhancements too. This allows value\nto be associated with each release from the point of view of the people paying for it. ROI and all that isn&#8217;t just\nabandonment of costly end-of-life IT choices, it is about tangible changes for the better. From top to bottom, everyone\nneeds to agree that both are happening.</p>\n</li>\n<li>\n<p>The additional of integration and functional test suites as a safety net is key. This is particularly true for when the\nold technology did not have unit test coverage. The functional tests will be able to step between old and new (and back),\nto prevent surprises.</p>\n</li>\n<li>\n<p>Understand that Non-Functional Requirements (NFRs) that don&#8217;t directly cheapen the re-implementation may jeopardize the\ninitiative. Jeopardize in the "courting cancellation" territory again. Various authority figures may have pet technologies\nto include or things to exclude. The test is whether the dev team cranking stuff out agrees or not.</p>\n</li>\n<li>\n<p>Agile methodologies optimize everything for maximized developer throughput and phased deliveries to production. You\nwill not manage this with waterfall, unless you want glacially long intervals between production pushes.\nThe <a href="http://cdn.pols.co.uk/papers/agile-approach-to-legacy-systems.pdf">Pols/Stevenson white paper</a> drills much further into the Agile aspects.</p>\n</li>\n<li>\n<p>Lastly, you should always be aware that there could be functionality and context hidden within the old application\nthat people have forgotten about, and that a team of business analysts assigned to reverse engineering behaviors might\nalso miss. This is a risk for any "rewrite" though.</p>\n</li>\n</ul>\n</div>'
}
