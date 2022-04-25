// This file is generated. Please don't modify it directly.

import { Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description11: Section = {
  type: 'section',
  slug: 'description-11',
  id: '_description_11',
  sectionType: 'section',
  index: 1,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '2',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Work-in-progress: collecting ideas and currently doing research, therefore still chaotic document</p>\n</div>'
    },
    {
      type: 'section',
      slug: 'software-organizations-and-their-effect-on-systems',
      id: '_software_organizations_and_their_effect_on_systems',
      sectionType: 'section',
      index: 0,
      title: 'Software Organizations and their Effect on Systems',
      titlePlain: 'Software Organizations and their Effect on Systems',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>As Nagappan et al write: <em>From the historical perspective, Fred Brooks in his classic book "The Mythical Man Month"\nprovides an analogy in the chapter on "Why did the (mythical) Tower of Babel Fail?" The observation being that, the\npeople had (1) a clear mission; (2) manpower; (3) (raw) materials; (4) time and (5) technology. The project failed because\nof communication, and its consequent organization. Brooks further states that in software systems schedule\ndisasters, functional misfits and system bugs arise from a lack of communication between different teams. Quoting Brooks <strong>“The\npurpose of organization is to reduce the amount of communication and coordination necessary;</strong> hence organization is a radical\nattack on the communication problems…”.</em> What many organization like Amazon, SoundCloud, Otto or Google do these days is to\ncreate self-contained, cross-functional teams with a high cohesion inside the team and loose coupling between the teams.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Cohesion in programming refers to the degree to which the elements of a component belong together, all the related code\nshould be close to each other. For teams the same is true: all people with the necessary skills to create a feature should\nbe close together.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Coupling in programming refers to the degree to which the different components depend on each other. Preferably, components\nshould be independent from each other as much as possible. For teams the same should be true, different teams should communicate\nas little as possible. Adrian Cockcroft said regarding the independence between service teams that "<em>You don’t go and\nhave a deep discussion with the Google Maps team just to use their Maps API: it&#8217;s a reasonably stable\nAPI, you are isolated, it&#8217;s sort of versioned, occasionally it changes and you may want to do things. So basically you\nbuild your own service, you build a bounded context around the thing that your team, your 2 or 3 engineers, are building\nand you build a service or a group of services that interface with all the other things that your company is doing, as\nif they were separate companies. It’s a different bounded context. <strong>So you talk to them but you are not tightly coupled</em></strong>".</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>How can an organization be loosely or tightly coupled? What are those properties? MacCormack et al. answered this question\nin a Harvard Business School <a href="http://www.hbs.edu/faculty/Publication%20Files/08-039_1861e507-1dc1-4602-85b8-90d71559d85b.pdf">publication</a>:</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Table: Characterizing Different Organizational Forms</p>\n</div>'
        },
        {
          type: 'table',
          content:
            '<table class="tableblock frame-ends grid-all stretch">\n<colgroup>\n<col style="width: 33.3333%;">\n<col style="width: 33.3333%;">\n<col style="width: 33.3334%;">\n</colgroup>\n<thead>\n<tr>\n<th class="tableblock halign-left valign-top"></th>\n<th class="tableblock halign-left valign-top">Tightly-Coupled</th>\n<th class="tableblock halign-left valign-top">Loosely-Coupled</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Goals</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Shared, Explicit</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Diverse, Implicit</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Membership</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Closed, Contracted</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Open, Voluntary</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Authority</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Formal, Hierarchy</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Informal, Meritocracy</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Location</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Centralized, Collocated</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Decentralized, Distributed</p></td>\n</tr>\n<tr>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Behavior</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Planned, Coordinated</p></td>\n<td class="tableblock halign-left valign-top"><p class="tableblock">Emergent, Independent</p></td>\n</tr>\n</tbody>\n</table>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Of course this is not black and white, there&#8217;s always some place in between.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'conways-law-and-what-to-do-about-it',
      id: '_conways_law_and_what_to_do_about_it',
      sectionType: 'section',
      index: 1,
      title: 'Conway&#8217;s Law and what to do about it',
      titlePlain: 'Conway’s Law and what to do about it',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>In 1968 Conway observed that <em>"organizations produce designs which are copies of the communication\nstructures of these organizations (If you have four groups working on a compiler, you&#8217;ll get a 4-pass compiler)"</em>. Around\n2006 many companies had a frontend, backend and middleware department reflecting the three-tier architecture they were\nbuilding. Modern companies have individual deployable services built by cross-functional teams.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>James Coplien wrote in his book that <em>"If the parts of an organization (e.g. teams,\ndepartments, or subdivisions) do not closely reflect the essential parts of the product, or if the relationship between\norganizations do not reflect the relationships between product parts, then the project will be in trouble&#8230;&#8203; Therefore:\nMake sure the organization is compatible with the product architecture"</em>.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>David Parnas (1972, 1978) argued that it is easier to split development work across a\ngroup if people can work independently and in parallel. To support parallelism, Parnas encouraged\ndevelopers to avoid sharing assumptions and data. Specifically, he contended that every developer’s task\nassignment should lie within a product module that is “characterized by its knowledge of a design\ndecision that it hides from all others” (1972: p. 1056)</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>That means that the flexibility of an organization is important to effective design\nand operations. It also means that you first create your architecture and then form the organizational communication\naround it. This is not as crazy as it sounds, because existing departments can still exist, but the people inside those\ndepartments need to be insourced into the newly formed product teams representing end-to-end the individual services or\ncomponents of the system.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p><strong>If you want to improve your architecture you need to improve your organization as well</strong></p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>TODO: collect more examples of org transformation</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Since systems usually live longer than corporate structures, it is important that managers keep their organisation\nflexible. An example for organizational flexibility is Soundcloud.\nThey experimented with different organizational models to find the one that fit product development best. That\nexperimentation is possible is important to note - many organizations don&#8217;t do that. They moved over a couple of years\nfrom the classical approach of separate development and operation teams to a structure where teams can act autonomously\nand build and run their systems without handovers to other teams. Since there is still a need for centralized work they\ncreated a production engineering team which takes care of common infrastructure ("run the system that runs systems") and\ndo internal consulting in case a team needs help.\nFor some companies experimentation is really hard, e.g., a large insurance company has 800 people in an operations department and\nclaims because of that "You build it, you run it" is not possible, the company could still keep the departments, but in fact it\npractices insourcing operations people (or UX specialists or business analysts, etc.) into the product teams. That way the\ndepartments, which are hard to change, still exist, but there&#8217;s still a good chance to create a cohesive team structure.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>An example of a popular change of software producing organizations is the move from operations/development/business/testing\nsilos to functional silos (e.g. a cross functional team responsible for product search), because the optimized\nprocess-based organization is horizontally focused on outcomes, not vertically oriented around skills like testing,\ndevelopment and operations.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>TODO: provide more case studies, e.g. UK Government Digital Services, Google, Amazon, ING, Otto</p>\n</div>'
        }
      ]
    },
    {
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
    },
    {
      type: 'section',
      slug: 'value-stream-mapping',
      id: '_value_stream_mapping',
      sectionType: 'section',
      index: 3,
      title: 'Value Stream Mapping',
      titlePlain: 'Value Stream Mapping',
      numeral: '4',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Value stream mapping is a lean-management method for analyzing the current state of events that take a product or service\nfrom its beginning through to the customer. Examples in the software world would be all the steps needed from having an\nidea to implementing and deploying it (which usually requires a business case, putting it on a roadmap, write requirements,\ncreate UX prototypes, implementation, test in between).</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Two key metrics associated with value stream mapping are value adding times and non value adding times (=waste). If\nsomething does not directly add value as perceived by the customer, it is waste. If there is a way to do without it,\nit is waste. Mary Poppendieck <a href="https://books.google.de/books?id=UalKAgAAQBAJ&amp;pg=PA4&amp;lpg=PA4&amp;dq=If+something+does+not+directly+add+value+as+perceived+by+the+customer,+it+is+waste.+If+there+is+a+way+to+do+without+it,+it+is+waste.&amp;source=bl&amp;ots=eiQCoEpPVe&amp;sig=Hf75DmlIudz50XJlkSef0Vkw3KM&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwiv44Dj_b7QAhUoCsAKHYWnCA8Q6AEIHTAA#v=onepage&amp;q=If%20something%20does%20not%20directly%20add%20value%20as%20perceived%20by%20the%20customer%2C%20it%20is%20waste.%20If%20there%20is%20a%20way%20to%20do%20without%20it%2C%20it%20is%20waste.&amp;f=false">describes</a>\nseven types of waste in software development: waiting, partially done work, extra process, extra features, task switching,\ndefects and motion.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Often, the value stream is broken in a few places where small changes can bring large improvements. Those are the places\nyou need to find and where you can improve the architecture. A great example how value stream mapping led to a large architectural\nimprovement is Soundcloud&#8217;s move from monolith to Microservices and from low cohesion and strong coupling of Departments\nto high cohesion and loose coupling of Departments (<a href="http://philcalcado.com/2015/09/08/how_we_ended_up_with_microservices.html" class="bare">http://philcalcado.com/2015/09/08/how_we_ended_up_with_microservices.html</a>).</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>How to do a / examples of value stream mapping: TODO</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Old stuff -\nLook for:</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>violations of Conways\' law</p>\n</li>\n<li>\n<p>over or under-regulated processes</p>\n</li>\n<li>\n<p>organization with overly strict constraints</p>\n</li>\n<li>\n<p>organizations lacking constraints (anarchy)</p>\n</li>\n<li>\n<p>orga-problems leading to IT problems</p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
