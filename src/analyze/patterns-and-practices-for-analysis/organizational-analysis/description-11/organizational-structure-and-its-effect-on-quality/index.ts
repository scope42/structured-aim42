// This file is generated. Please don't modify it directly.

import { Section } from '../../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const organizationalStructureAndItsEffectOnQuality: Section = {
  type: 'section',
  slug: 'organizational-structure-and-its-effect-on-quality',
  id: '_organizational_structure_and_its_effect_on_quality',
  sectionType: 'section',
  index: 2,
  title: 'Organizational Structure and its Effect on Quality',
  titlePlain: 'Organizational Structure and its Effect on Quality',
  numeral: '3',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Microsoft did a large <a href="https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr-2008-11.pdf">study</a> on how\norganizational structure affects software quality. The effect of organizational structure on quality is higher than code\nchurn, code complexity, code coverage or bugs found before releasing the software.\nMicrosoft looked at a few organisational metrics:</p>\n</div>'
    },
    {
      type: 'olist',
      content:
        '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Number of Engineers (NOE): The more people who touch the code the lower the quality. This is of course something you need to balance. Of course if\nthere is only one person who works on a component, the likelihood of conceptual integrity and few bugs is high (if the\npersons work quality is also good). If 300 people change the component it is much harder to keep conceptual integrity.\nHowever, a company doesn&#8217;t want knowledge islands, depending on the knowledge of one single person, therefore the company\nshould find the right balance here. Netflix recommends 2-3 people per component, Amazon has the "Two pizza team" rule\n(only so many people should work on a component or service who can be fed by two pizzas)</p>\n</li>\n<li>\n<p>Number of Ex-Engineers (NOEE): A large loss of team members affects the knowledge retention and thus quality. A similar\n<a href="http://www.se-radio.net/2014/10/episode-212-randy-shoup-on-company-culture/">study</a> at eBay found out that\na resource pool (a pool of developers where projects can take people out) led to very bad quality</p>\n</li>\n<li>\n<p>Edit Frequency (EF): The more source code edits to components the higher the instability and lower the quality (sure, if I never touch code\nwhich works I won&#8217;t introduce new bugs. But we know that we need to test (heavily) changed source code with a greater\nintensity than less changed parts of the code)</p>\n</li>\n<li>\n<p>Depth of Master Ownership (DMO): The lower the level of ownership the better the quality. What they mean with that is\nthat a component should have only one clear owner and that owner (can be a team) needs to report to only one leader and not many.</p>\n</li>\n<li>\n<p>Percentage of Org contributing to development (PO): The more cohesive the contributors organizationally the higher the\nquality. Means that it is important to create a team where its members share a common culture, focus and social cohesion.</p>\n</li>\n<li>\n<p>Level of Organizational Code Ownership (OCO): The more cohesive the contributors (edits) the higher is the quality.\nMeans that it is important to create a team where its members share a common culture on how to write and design a system.</p>\n</li>\n<li>\n<p>Overall Organization Ownership (OOW): People who change often the same source code should sit together closely or at\nleast know each other well and have an unproblematic way to communicate. E.g. working on a particular piece of source\ncode with a person in another timezone lowers quality, pair programming leads to higher quality.</p>\n</li>\n<li>\n<p>Organization Intersection Factor (OIF): The more diffused the different organizations contributing code, the lower the\nquality. If totally unrelated teams contribute to the source code of a component and those changes are small (&lt; 10% of\nall changed lines) your quality declines. Try to not have too many contributors who only contribute little.</p>\n</li>\n</ol>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Statistical existence and empirical evidence stemming from organizations research and social-network analysis reveals that low organisational quality connected to software can be found in the relationships across the following\ncombinations (combined org metrics appear in brackets): TODO: still a bit unclear</p>\n</div>'
    },
    {
      type: 'ulist',
      content:
        '<div class="ulist">\n<ul>\n<li>\n<p>Low quality: Code is often changed AND the number of developers changing that code is high (EF ↔ NOE)</p>\n</li>\n<li>\n<p>Low quality: Code is often changed AND the number of developers who changed that code left the team/organization is high (EF↔ NOEE)</p>\n</li>\n<li>\n<p>High quality: The team is cohesive and shares a common culture/focus/social cohesion AND they own their code completely\nand make their own decisions (OCO ↔ DMO)</p>\n</li>\n<li>\n<p>High quality: The team shares a common culture/focus/social cohesion AND shares a common coding culture (OCO ↔ PO)</p>\n</li>\n<li>\n<p>High quality: The team sits together (or low distance or can easily interact) AND shares a common coding culture (OOW ↔ PO)</p>\n</li>\n<li>\n<p>High quality: The team sits together (or low distance or can easily interact) AND they share a common culture/focus/social cohesion (OOW ↔ OCO)</p>\n</li>\n</ul>\n</div>'
    }
  ]
}
