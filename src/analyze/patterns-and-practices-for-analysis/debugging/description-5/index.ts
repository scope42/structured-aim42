// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description5: Section = {
  type: 'section',
  slug: 'description-5',
  id: '_description_5',
  sectionType: 'section',
  index: 1,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '2',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Debuggers are well-known and important tools for most software developers. Yet finding bugs is often more difficult than expected - despite powerful tool support.</p>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Approach the search for bugs, errors in the following order:</p>\n</div>'
    },
    {
      type: 'olist',
      content:
        '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Get a clear and precise <strong>description</strong> of the error, the detailed wording of all error messages, log messages, stacktraces or similar information.</p>\n</li>\n<li>\n<p>Know the <strong>context</strong> of the error: the exact version of the system, the operating system, involved middleware, hardware settings and so on. Have knowledge of the input data which leads to the error.</p>\n</li>\n<li>\n<p><strong>Minimize external disturbance</strong> while searching for errors, you need to concentrate and observe details. Shut off chat and twitter clients, notifications and your phone. Send away your boss to an important management mission and lean back to reflect the error. Perhaps a colleague can support you.</p>\n</li>\n<li>\n<p><strong>Reproduce the error</strong> in the live system. Don&#8217;t rely on the assumption you can reproduce it - make sure you can reliably <em>really</em> reproduce it.</p>\n</li>\n<li>\n<p><strong>Obtain the exact version</strong> of all required source code and all involved data.</p>\n</li>\n<li>\n<p><strong>Reproduce the error in development environment</strong>: This ensures your development environment is consistent to the live system.</p>\n</li>\n<li>\n<p><strong>Rephrase your error assumption into a question</strong>: Distinguish symptoms from the cause of the error by asking "why?" a few times.</p>\n</li>\n<li>\n<p><strong>Identify the building blocks</strong> which are involved in the error path.</p>\n</li>\n<li>\n<p><strong>Understand the error scenario</strong>: You need to know the business or technical scenario (aka the process or activity flow) of the error: Which steps within the system or its external interfaces precede the error? This step is an example of <a href="#View-Based-Understanding">Section 2.3.28, &#8220;<span class="pattern">View Based Understanding</span>&#8221;</a>.</p>\n<div class="olist loweralpha">\n<ol class="loweralpha" type="a">\n<li>\n<p>Make this scenario <strong>explicit</strong> - draw or scribble a diagram. See the diagram "Divide and conquer" below as an example. Here the error arises in building block 1. You suppose the processing within the system is spanned by the blue marked data path in which the building blocks 2 to 6 are involved. Cut the path in half and check your assumption at the transition of one half to the other (here between building block 4 and 3). If no error is observable here then the error occurs after the considered transition. Otherwise you have to look for the error before the transition.</p>\n<div class="imageblock">\n<div class="content">\n<img src="./images/debugging-divide-and-conquer.jpg" alt="Divide and conquer">\n</div>\n<div class="title">Figure 11. Divide and conquer debugging tactics</div>\n</div>\n</li>\n<li>\n<p><strong>Plan your debugging strategy</strong>: Think of the expected outcome of every part of\nyour scenario.</p>\n</li>\n<li>\n<p>If you know you&#8217;re traveling to Pisa (Italy), you won&#8217;t confuse the Leaning Tower with an error.</p>\n</li>\n</ol>\n</div>\n</li>\n<li>\n<p><strong>Look, don&#8217;t imagine</strong>: Sherlock Holmes, the successful detective has formulated the golden rule of debugging: "<em>It&#8217;s a capital mistake to theorize before one has data</em>". Instrument the system or use step debugging. Look <em>exactly</em> what the messages are, read carefully.</p>\n</li>\n<li>\n<p><strong>Change only one thing at a time</strong> and test if the error disappears: Aim for errors with a sniper rifle, not with a shotgun.</p>\n</li>\n<li>\n<p>Apply the <strong>4-Eye-Principle</strong>: Describe the problem and your state of debugging to somebody else. Especially clarify all your assumptions.</p>\n</li>\n</ol>\n</div>'
    }
  ]
}
