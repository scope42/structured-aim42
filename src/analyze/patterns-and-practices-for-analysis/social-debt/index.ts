// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const socialDebt: Section = {
  type: 'section',
  slug: 'social-debt',
  id: 'Social-Debt',
  sectionType: 'section',
  index: 12,
  title: '<span class="pattern">Social Debt</span>',
  titlePlain: 'Social Debt',
  numeral: '13',
  children: [
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>Social debt amounts to additional project cost connected to sub-optimal organisational and socio-technical decisions</p>\n</div>'
    },
    {
      type: 'section',
      slug: 'intent-13',
      id: '_intent_13',
      sectionType: 'section',
      index: 0,
      title: 'Intent',
      titlePlain: 'Intent',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Evaluate and track the welfare and health of a software development and operation organization or community such that additional project cost can be avoided or somehow managed.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'description-12',
      id: '_description_12',
      sectionType: 'section',
      index: 1,
      title: 'Description',
      titlePlain: 'Description',
      numeral: '2',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Organization, coordination and cooperation are critical forces behind software development and operation. Through well-thought protocols and cooperation guidelines, software architects, developers as much as entire organizations try to orchestrate proper coordination and cooperation but many times such attempts are burdened by sub-optimal organisational decisions, e.g., the adoption of a process model that is not compatible with developers and operators’ background and mindset or even collaborating with an organization that does not and cannot share the same values of the organization in question. These circumstances often result in additional project cost in the form of recurrent delays, condescending behaviour or worse.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Evaluating these circumstances together, trying to minimise their impact on software development and the quality of resulting software products is currently object of intensive study.</p>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The goal for social debt in the next few years of research is that of reaching a crisp definition that contains the essential traits of social debt which can be refined into practical operationalizations for use by software engineering professionals in need of knowing more about their organizational structure and the properties/cost trade-off that structure currently reflects.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'experiences-5',
      id: '_experiences_5',
      sectionType: 'section',
      index: 2,
      title: 'Experiences',
      titlePlain: 'Experiences',
      numeral: '3',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>As previously mentioned, we found three recurrent series of circumstances in which architecture decisions and the process of architecting reportedly generated social debt.</p>\n</div>'
        },
        {
          type: 'olist',
          content:
            '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p><strong>Lonesome Architecting:</strong> we observed this pattern manifesting when non-architects are forced to make decisions while actual architects are "too few and far apart".\nOne of the software architects reporting this condition in industry also complained that he and his colleagues had [&#8230;&#8203;] not enough time to dedicate to decision-making (and related changes) as well as properly disseminating architecture decisions.\nSome of the most common consequences we found resulting from this\npattern are: (a) decision unawareness; (b) misalignment between\nproduct version and architecture; (c) lack of awareness on the\nproduct&#8217;s needs; (d) overly fast decision-making to "patch-up". The\ndebt in this case is associated to delays needed to find out about\ndecisions and apply the necessary modifications, possibly rewriting\ncode with considerable waste. Also, from a social point of view, this\ncircumstance results in loss of project vision (i.e., frequent quotes\nwere "what are we doing? what does the product need for its\nimprovement?") with resulting frustration and mistrust.</p>\n</li>\n<li>\n<p><strong>Obfuscated Architecting:</strong> Obfuscated architecting takes place when multiple sub-groups emerge in a development network without a harmonised organisational and socio-technical vision necessary to operate in the network. We observed this pattern manifesting when new or changed architecture decisions imply implementation changes that necessitate new people to be included in the development network (e.g., different skills are needed). we observed this pattern in presence of multiple products (both legacy and new) being operated together but in the process of being integrated. New people to be included in the development network lacked the frame of mind and vision needed to understand and cope with the legacy product. This obfuscates the communication of architecture decisions. Some of the most common consequences we found resulting from this pattern are: (a) single communication points for architecture decisions - many developers eventually felt left out of the development network when it came to software architecture, since they could not reach architects properly, this led to time waste and resulting  developers\' frustration; (b) circumstances indicating socio-technical code-churn.</p>\n</li>\n<li>\n<p><strong>Architecting by Osmosis:</strong> In layman&#8217;s terms, osmosis refers to the process of permeating a solvent through a semi-permeable (series of) membrane(s). By comparison, architecting by osmosis means making architecture decisions using knowledge that is filtered through many semi-permeable communication links. we observed architecting by osmosis manifesting when the following sequence of events occurs: (1) the effects of certain decisions reach clients and product operators but result in inoperable software; (2) operators, pushed by clients, share malcontent with developers and suggest technical changes; (3) developers evaluate (and sometimes partially implement) possible technical changes and suggest change to architecture decisions; (4) architects make necessary changes in decisions with knowledge that was partially filtered by all communication layers in the development network.</p>\n</li>\n</ol>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'applicability-5',
      id: '_applicability_5',
      sectionType: 'section',
      index: 3,
      title: 'Applicability',
      titlePlain: 'Applicability',
      numeral: '4',
      children: []
    },
    {
      type: 'section',
      slug: 'related-patterns-6',
      id: '_related_patterns_6',
      sectionType: 'section',
      index: 4,
      title: 'Related Patterns',
      titlePlain: 'Related Patterns',
      numeral: '5',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>All Cross-cutting patterns relate to the circumstances defined above.</p>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'references-2',
      id: '_references_2',
      sectionType: 'section',
      index: 5,
      title: 'References',
      titlePlain: 'References',
      numeral: '6',
      children: [
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p>Damian Tamburri, Philippe Kruchten, Patricia Lago, Hans van Vliet: What is social debt in software engineering? In: Cooperative and Human Aspects of Software Engineering (CHASE), p. 93–96, 2013, Washington, DC. <a href="https://jisajournal.springeropen.com/articles/10.1186/s13174-015-0024-6" class="bare">https://jisajournal.springeropen.com/articles/10.1186/s13174-015-0024-6</a></p>\n</li>\n<li>\n<p>Tamburri, D. A. &amp; Nitto, E. D. (2015), When Software Architecture Leads to Social Debt., in Len Bass; Patricia Lago &amp; Philippe Kruchten, ed., \'WICSA\' , IEEE Computer Society, , pp. 61-64 .</p>\n</li>\n</ul>\n</div>'
        }
      ]
    }
  ]
}
