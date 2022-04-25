// This file is generated. Please don't modify it directly.

import { Section } from '../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const improveArchitecture: Section = {
  type: 'section',
  slug: 'improve-architecture',
  id: 'improve-architecture',
  sectionType: 'section',
  index: 9,
  title: 'Improve Architecture and Code Structure',
  titlePlain: 'Improve Architecture and Code Structure',
  numeral: '10',
  children: [
    {
      type: 'admonition',
      content:
        '<div class="admonitionblock note">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Note</div>\n</td>\n<td class="content">\nThis category contains a fairly large number of practices.\n</td>\n</tr>\n</table>\n</div>'
    },
    {
      type: 'image',
      content:
        '<div id="fig-improve-architecture" class="imageblock">\n<div class="content">\n<img src="./images/improve-practice-architecture.png" alt="Practices to Improve Architecture">\n</div>\n<div class="title">Figure 33. Practices to improve architecture and code structure</div>\n</div>'
    },
    {
      type: 'paragraph',
      content:
        '<div class="paragraph">\n<p>For an overview of other improvement practices,\nsee <a href="#improve-practices-overview">Section 4.5, &#8220;Improvement Practices (Overview)&#8221;</a>.</p>\n</div>'
    },
    {
      type: 'section',
      slug: 'architecture-and-code-practices-in-detail',
      id: '_architecture_and_code_practices_in_detail',
      sectionType: 'section',
      index: 0,
      title: 'Architecture and Code Practices in Detail',
      titlePlain: 'Architecture and Code Practices in Detail',
      numeral: '1',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>(given in alphabetical order)</p>\n</div>'
        },
        {
          type: 'ulist',
          content:
            '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Anticorruption-Layer">Section 4.10.2, &#8220;<span class="pattern">Anticorruption Layer</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Assertions">[Assertions]</a></p>\n</li>\n<li>\n<p><a href="#Automated-Tests">[Automated-Tests]</a></p>\n</li>\n<li>\n<p><a href="#Branch-For-Improvement">[Branch-For-Improvement]</a></p>\n</li>\n<li>\n<p><a href="#Change-by-Abstraction Refactoring">[Change-by-Abstraction Refactoring]</a></p>\n</li>\n<li>\n<p><a href="#Extract-Reusable-Component">[Extract-Reusable-Component]</a></p>\n</li>\n<li>\n<p><a href="#Front-End-Switch">[Front-End-Switch]</a></p>\n</li>\n<li>\n<p><a href="#Group-Improvement-Actions">[Group-Improvement-Actions]</a></p>\n</li>\n<li>\n<p><a href="#Handle-If-Else-Chains">[Handle-If-Else-Chains]</a></p>\n</li>\n<li>\n<p><a href="#Improve-Code-Layout">[Improve-Code-Layout]</a></p>\n</li>\n<li>\n<p><a href="#Improve-feedback-from-and-for-stakeholders">Section 4.10.10, &#8220;<span class="pattern">Improve Feedback From And For Stakeholders</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Improve-Logging">Section 4.10.4, &#8220;<span class="pattern">Improve Logging</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Interface-Segregation-Principle">Section 4.10.5, &#8220;<span class="pattern">Interface Segregation Principle</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Introduce-Boy-Scout-Rule">Section 4.10.6, &#8220;<span class="pattern">Introduce Boy Scout Rule</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Introduce-Layering">[Introduce-Layering]</a></p>\n</li>\n<li>\n<p><a href="#Isolate-Changes">[Isolate-Changes]</a></p>\n</li>\n<li>\n<p><a href="#Keep-Data-Toss-Code">[Keep-Data-Toss-Code]</a></p>\n</li>\n<li>\n<p><a href="#Manage-Complex-Client-Dependencies-With-Facade">Section 4.10.7, &#8220;<span class="pattern">Manage Complex Client Dependencies With Facade</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Measure">Section 4.10.8, &#8220;<span class="pattern">Measure</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Never-Change-Running-System">[Never-Change-Running-System]</a></p>\n</li>\n<li>\n<p><a href="#Never-Rewrite-Running-System">[Never-Rewrite-Running-System]</a></p>\n</li>\n<li>\n<p><a href="#Quality-Driven-Software-Architecture">[Quality-Driven-Software-Architecture]</a></p>\n</li>\n<li>\n<p><a href="#Refactoring">[Refactoring]</a></p>\n</li>\n<li>\n<p><a href="#Refactoring-Plan">[Refactoring-Plan]</a></p>\n</li>\n<li>\n<p><a href="#Remove-Nested-Control-Structures">[Remove-Nested-Control-Structures]</a></p>\n</li>\n<li>\n<p><a href="#Sample-For-Improvement">[Sample-For-Improvement]</a></p>\n</li>\n<li>\n<p><a href="#Schedule-Work">[Schedule-Work]</a></p>\n</li>\n<li>\n<p><a href="#Untangle-Code">[Untangle-Code]</a></p>\n</li>\n<li>\n<p><a href="#Use-Invariants-To-Kill-Zombies">Section 4.10.9, &#8220;<span class="pattern">Use Invariants To Kill Zombies</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
        }
      ]
    },
    {
      type: 'section',
      slug: 'anticorruption-layer',
      id: 'Anticorruption-Layer',
      sectionType: 'section',
      index: 1,
      title: '<span class="pattern">Anticorruption Layer</span>',
      titlePlain: 'Anticorruption Layer',
      numeral: '2',
      children: [
        {
          type: 'section',
          slug: 'intent-41',
          id: '_intent_41',
          sectionType: 'section',
          index: 0,
          title: 'Intent',
          titlePlain: 'Intent',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>An anticorruption layer is a logical layer that provides a stable interface to (potentially) volatile software components. As long as this interface remains untouched developers can implement changes or even replace their own or third-party software without affecting the clients of this interface.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'description-40',
          id: '_description_40',
          sectionType: 'section',
          index: 1,
          title: 'Description',
          titlePlain: 'Description',
          numeral: '2',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>The original definition <a href="#Evans03">[Evans03, p. 365]</a>:</p>\n</div>'
            },
            {
              type: 'quote',
              content:
                '<div class="quoteblock">\n<blockquote>\n""\nCreate an isolating layer to provide clients with functionality in terms of their own domain model. The layer talks to the other system through its existing interface, requiring little or no modification to the other system. Internally, the layer translates in both directions as necessary between the two models.\n""\n</blockquote>\n<div class="attribution">\n&#8212; Eric Evans<br>\n<cite>Domain Driven Design</cite>\n</div>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'experiences-16',
          id: '_experiences_16',
          sectionType: 'section',
          index: 2,
          title: 'Experiences',
          titlePlain: 'Experiences',
          numeral: '3',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Here are some real-life experiences:</p>\n</div>'
            },
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Anticorruption layer for a search-index to defer the decision if the best performance can be achieved with Elastic Search, Solr or a self-developed Lucene index.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'applicability-21',
          id: '_applicability_21',
          sectionType: 'section',
          index: 3,
          title: 'Applicability',
          titlePlain: 'Applicability',
          numeral: '4',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Apply this pattern when clients shall be protected from internal changes in a module or subsystem.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'consequences-12',
          id: '_consequences_12',
          sectionType: 'section',
          index: 4,
          title: 'Consequences',
          titlePlain: 'Consequences',
          numeral: '5',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Allows to (ex)change software elements without affecting depending components</p>\n</li>\n<li>\n<p>Introduces one more level of indirection and thus may increase complexity</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'also-known-as-12',
          id: '_also_known_as_12',
          sectionType: 'section',
          index: 5,
          title: 'Also Known As',
          titlePlain: 'Also Known As',
          numeral: '6',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Isolation layer</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'related-patterns-25',
          id: '_related_patterns_25',
          sectionType: 'section',
          index: 6,
          title: 'Related Patterns',
          titlePlain: 'Related Patterns',
          numeral: '7',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Isolate-Changes">[Isolate-Changes]</a>, as an alternative or complimenting approach</p>\n</li>\n<li>\n<p><a href="#Bulkhead">[Bulkhead]</a>, introduces stability boundaries within applications or systems by segmenting runtime resources.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'references-19',
          id: '_references_19',
          sectionType: 'section',
          index: 7,
          title: 'References',
          titlePlain: 'References',
          numeral: '8',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Evans03">[Evans03]</a> p. 364ff.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      slug: 'change-by-abstraction-refactoring',
      id: 'change-by-abstraction-refactoring',
      sectionType: 'section',
      index: 2,
      title: '<span class="pattern">Change-by-Abstraction Refactoring</span>',
      titlePlain: 'Change-by-Abstraction Refactoring',
      numeral: '3',
      children: [
        {
          type: 'section',
          slug: 'prerequisites-2',
          id: '_prerequisites_2',
          sectionType: 'section',
          index: 0,
          title: 'Prerequisites',
          titlePlain: 'Prerequisites',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Intention to change or replace a cohesive piece of code with a lot of incoming\n(afferent) dependencies. A common example is replacing homegrown ORM or plain SQL with\na standard tool or exchanging a logging library for another with incompatible interfaces.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'intent-42',
          id: '_intent_42',
          sectionType: 'section',
          index: 1,
          title: 'Intent',
          titlePlain: 'Intent',
          numeral: '2',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Incrementally replace part of the system with a new implementation.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'description-41',
          id: '_description_41',
          sectionType: 'section',
          index: 2,
          title: 'Description',
          titlePlain: 'Description',
          numeral: '3',
          children: [
            {
              type: 'olist',
              content:
                '<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Mark the Method or Class you would like to replace as deprecated.</p>\n</li>\n<li>\n<p>Introduce an abstraction that is implemented by the old implementation. If the\nAPI of the new solution differs, consider the Adapter Pattern to perform<br>\n<span class="image"><img src="./images/change-by-abstraction-1.png" alt="Change by abstraction" width="step 1"></span></p>\n</li>\n<li>\n<p>Incrementally move all the calls where the deprecated Class/Method is still\nbeing used to use the new API instead.<br>\n<span class="image"><img src="./images/change-by-abstraction-2.png" alt="Change by abstraction" width="step 2"></span></p>\n</li>\n<li>\n<p>You can now implement and start testing the new functionality by deriving\nit from the abstraction you introduced in step 2.<br>\n<span class="image"><img src="./images/change-by-abstraction-3.png" alt="Change by abstraction" width="step 3"></span></p>\n</li>\n<li>\n<p>When all the places where the deprecated Class/Method is called directly\nare moved to the abstraction, you can use a feature toggle in a proxy class that implements\nthe common abstraction to toggle between the old and the new implementation.<br>\n<span class="image"><img src="./images/change-by-abstraction-3.png" alt="Change by abstraction" width="step 4"></span></p>\n</li>\n<li>\n<p>If you made sure the new functionality performs well enough, you can remove\nthe deprecated implementation and possibly the abstraction.</p>\n</li>\n</ol>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'related-patternsnames',
          id: '_related_patternsnames',
          sectionType: 'section',
          index: 3,
          title: 'Related patterns/names',
          titlePlain: 'Related patterns/names',
          numeral: '4',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>This method is also known as "Branch by Abstraction" and a smiliar technique that\ngoes under the names "Parallel Change" or "Expand and Contract" exists, where the\nabstraction step is skipped and callers are migrated to a new method/object\nimmediately.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>This approach works best when it is used in combination with <a href="#Introduce-Boy-Scout-Rule">Section 4.10.6, &#8220;<span class="pattern">Introduce Boy Scout Rule</span>&#8221;</a>.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'experiences-17',
          id: '_experiences_17',
          sectionType: 'section',
          index: 4,
          title: 'Experiences',
          titlePlain: 'Experiences',
          numeral: '5',
          children: []
        },
        {
          type: 'section',
          slug: 'risks-6',
          id: '_risks_6',
          sectionType: 'section',
          index: 5,
          title: 'Risks',
          titlePlain: 'Risks',
          numeral: '6',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Too many of these half-performed incremental refactorings will leave your code base in a mess.\nYou still need to finish, what you start.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'applicability-22',
          id: '_applicability_22',
          sectionType: 'section',
          index: 6,
          title: 'Applicability',
          titlePlain: 'Applicability',
          numeral: '7',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Your team is familiar with and embraces Trunk-Based development.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'consequences-13',
          id: '_consequences_13',
          sectionType: 'section',
          index: 7,
          title: 'Consequences',
          titlePlain: 'Consequences',
          numeral: '8',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Teams can collaboratively move code towards a new implementation by replacing\ncalls to deprecated methods/classes with calls to the abstraction, even in parallel.</p>\n</li>\n<li>\n<p>The refactoring can be made incrementally.</p>\n</li>\n<li>\n<p>The build will remain "green", even when the refactoring is unfinished.</p>\n</li>\n<li>\n<p>The abstraction enables comparison of the behaviour of the old to the new implementation in production\nor testing environments to make sure that the new implementation matches the old behaviour.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'references-20',
          id: '_references_20',
          sectionType: 'section',
          index: 8,
          title: 'References',
          titlePlain: 'References',
          numeral: '9',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p><a href="http://continuousdelivery.com/2011/05/make-large-scale-changes-incrementally-with-branch-by-abstraction/" class="bare">http://continuousdelivery.com/2011/05/make-large-scale-changes-incrementally-with-branch-by-abstraction/</a><br>\n<a href="http://paulhammant.com/blog/branch_by_abstraction.html" class="bare">http://paulhammant.com/blog/branch_by_abstraction.html</a><br>\n<a href="http://www.alwaysagileconsulting.com/application-pattern-verify-branch-by-abstraction/" class="bare">http://www.alwaysagileconsulting.com/application-pattern-verify-branch-by-abstraction/</a><br>\n<a href="http://martinfowler.com/bliki/BranchByAbstraction.html" class="bare">http://martinfowler.com/bliki/BranchByAbstraction.html</a><br>\n<a href="https://printhelloworld.de/posts/refactoring-in-baby-steps/" class="bare">https://printhelloworld.de/posts/refactoring-in-baby-steps/</a><br>\n<a href="https://www.branchbyabstraction.com/" class="bare">https://www.branchbyabstraction.com/</a></p>\n</div>'
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      slug: 'improve-logging',
      id: 'Improve-Logging',
      sectionType: 'section',
      index: 3,
      title: '<span class="pattern">Improve Logging</span>',
      titlePlain: 'Improve Logging',
      numeral: '4',
      children: [
        {
          type: 'section',
          slug: 'intent-43',
          id: '_intent_43',
          sectionType: 'section',
          index: 0,
          title: 'Intent',
          titlePlain: 'Intent',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Employ sophisticated logging mechanisms such as modern logging frameworks,\ndistributed log collection and visualization tools in order to gain more\ndetailed information about the system during runtime with a minimal or\npredictable performance impact.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'description-42',
          id: '_description_42',
          sectionType: 'section',
          index: 1,
          title: 'Description',
          titlePlain: 'Description',
          numeral: '2',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>While some time ago it was quite common to output log statements to standard out,\npeople usually use logging frameworks nowadays that give more control about what should\nbe logged and where the log entries should go.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>However, it turns out that such logging frameworks have some feature gems\nthat are not widely known or used. To name a few:</p>\n</div>'
            },
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Diagnostics Contexts (also known as Mapped Diagnostics Context (MDC) or Nested Diagnostics Context (NDC)) help to store additional context information for all succeeding log statements. Usage examples for such contexts are the login name of the current user, correlation IDs in order to enable cross-application log tracing or transaction IDs to have the possibility to filter all log entries that belong together.</p>\n</li>\n<li>\n<p>Additional log levels or markers help to make it easier to filter the log stream. It is a good advice to think about the marker and log design at the beginning of the project and try to agree on a common way to phrase log statements.</p>\n</li>\n<li>\n<p>Asynchronous appenders (i.e. log emitter) allow high-throughput logging, which lower impact on the application&#8217;s performance.</p>\n</li>\n<li>\n<p>Structured log formats produce a machine-readable output. Usually, log files are written using a more or less standardized text output. Log files in XML or JSON can be parsed and digested easily and allow for better filtering since more information, like diagnostics contexts, is always available in these formats.</p>\n</li>\n<li>\n<p>Filters enable context-based logging and can dispatch log entries to different log appenders. For instance it is possible to log warnings only but switch to debug logging for a specific user.</p>\n</li>\n</ul>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>In some environments it turns out to be problematic to rely on a single logging API. This could be the case if the application runs within a container or container-like framework that already employs a configured logging framework. In order to be independent of conrete logging frameworks, logging facades like <a href="http://slf4j.org">SLF4J</a> should be preferred over using the framework&#8217;s API directly.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Despite the focus on the software development, logging is also an operations topic. Often it turns out to be difficult to get recent log files from the operations team. Another pain point is that useful log information is scattered across multiple log files, stored at different locations on different systems. Log aggregation tools such as Splunk, <a href="http://www.logstash.net">Logstash</a>, Apache Flume or fluentd can consume and unify log data from different sources (e.g. files, syslog, network), can trigger alerts or index the log stream in order to make them searchable. Now, with tools like Kibana, log data of a system of systems can be easily analyzed and visualized. Correlation IDs contained in the logs can be used to trace certain business-related requests across multiple distributed systems easily.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Using such features makes the problem analysis easier and more data is available in a standardized fashion.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'experiences-18',
          id: '_experiences_18',
          sectionType: 'section',
          index: 2,
          title: 'Experiences',
          titlePlain: 'Experiences',
          numeral: '3',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Most projects write log files in a more or less sophisticated fashion, in many\ncases log messages are phrased in a rather unstructured way. It turns out that\na well-designed logging concept helps to make the log stream easier to understand.\nThis concept should provide some guidelines regarding which log level should be\nused in which situation, how the wording of log messages could be unified and\nwhich additional log levels or markers shall be used for what purpose.</p>\n</div>'
            },
            {
              type: 'admonition',
              content:
                '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="paragraph">\n<p>In a customer project we used an object-relational-mapping (ORM) tool for a\ndatabase independent access layer. The data access was inherently transactional\nand created a lot of database traffic so that deadlock situations on the database\nwere expected and properly handled with a delayed retry mechanism.</p>\n</div>\n<div class="paragraph">\n<p>While this approach worked quite well, we got frequently complaints from the\noperations team, which reported a number of ERROR log messages along with longish\nstacktraces that set their alarm bells off. These log messages were written by\nthe ORM tool whenever a DB deadlock was experienced. Since the application could\nperfectly deal with this situation this was not an error anymore and should have\nbeen logged as WARN or INFO at best. The problem was that a third-party\nframework used the wrong log level and was thus causing a lot of confusion.\nBear this in mind when working on a framework-like codebase and thinking about\nlog levels.</p>\n</div>\n</td>\n</tr>\n</table>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'risks-7',
          id: '_risks_7',
          sectionType: 'section',
          index: 3,
          title: 'Risks',
          titlePlain: 'Risks',
          numeral: '4',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>An excessive amount of log statements is likely to have negative impact on the\napplication&#8217;s performance. The impact is however manageable by using</p>\n<div class="ulist">\n<ul>\n<li>\n<p>guarded log statements that will only be constructed if a certain log level\nis enabled,</p>\n</li>\n<li>\n<p>asynchronous appenders (like the disruptor-based approach used by <a href="http://logging.apache.org/log4j/2.x/">Log4J 2</a>),</p>\n</li>\n<li>\n<p>context-sensitive logging (e.g. to enable debug logs only for a certain scenario or user).</p>\n</li>\n</ul>\n</div>\n</li>\n<li>\n<p>Collecting and indexing a huge amount of log data requires additional storage,\napprox. by factor 10. Think of retention policies in order to make the data\nstream manageable.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'applicability-23',
          id: '_applicability_23',
          sectionType: 'section',
          index: 4,
          title: 'Applicability',
          titlePlain: 'Applicability',
          numeral: '5',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>This pattern should always be considered.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'consequences-14',
          id: '_consequences_14',
          sectionType: 'section',
          index: 5,
          title: 'Consequences',
          titlePlain: 'Consequences',
          numeral: '6',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Improved understanding of the runtime behavior of an application or a\nsystem of systems.</p>\n</li>\n<li>\n<p>Log messages are well-structured and more meaningful as they carry more\ncontext information (in case MDCs are used).</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'also-known-as-13',
          id: '_also_known_as_13',
          sectionType: 'section',
          index: 6,
          title: 'Also Known As',
          titlePlain: 'Also Known As',
          numeral: '7',
          children: []
        },
        {
          type: 'section',
          slug: 'related-patterns-26',
          id: '_related_patterns_26',
          sectionType: 'section',
          index: 7,
          title: 'Related Patterns',
          titlePlain: 'Related Patterns',
          numeral: '8',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>This pattern is an important enabler for a successful <a href="#Runtime-Artifact-Analysis">[Runtime-Artifact-Analysis]</a>.</p>\n</li>\n<li>\n<p><a href="#Instrument-System">Section 2.3.10, &#8220;<span class="pattern">Instrument System</span>&#8221;</a> is very similar to this pattern, however it is limited to\na temporary instrumentation that is needed during the Analysis phase to identify or scope a certain problem\nthat cannot be isolated without modifying the code.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'references-21',
          id: '_references_21',
          sectionType: 'section',
          index: 8,
          title: 'References',
          titlePlain: 'References',
          numeral: '9',
          children: []
        }
      ]
    },
    {
      type: 'section',
      slug: 'interface-segregation-principle',
      id: 'Interface-Segregation-Principle',
      sectionType: 'section',
      index: 4,
      title: '<span class="pattern">Interface Segregation Principle</span>',
      titlePlain: 'Interface Segregation Principle',
      numeral: '5',
      children: [
        {
          type: 'section',
          slug: 'intent-44',
          id: '_intent_44',
          sectionType: 'section',
          index: 0,
          title: 'Intent',
          titlePlain: 'Intent',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Reduce coupling between clients and service providers.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'description-43',
          id: '_description_43',
          sectionType: 'section',
          index: 1,
          title: 'Description',
          titlePlain: 'Description',
          numeral: '2',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Service components may provide more functionality than required by one client.\nTo remove the client&#8217;s dependency from functionality not required introduce interfaces that are tailored\nto the client&#8217;s needs.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'applicability-24',
          id: '_applicability_24',
          sectionType: 'section',
          index: 2,
          title: 'Applicability',
          titlePlain: 'Applicability',
          numeral: '3',
          children: [
            {
              type: 'paragraph',
              content: '<div class="paragraph">\n<p>Apply when</p>\n</div>'
            },
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>clients only require a restricted functionality from a complex service,</p>\n</li>\n<li>\n<p>you have to deal with low cohesion components you cannot change</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'consequences-15',
          id: '_consequences_15',
          sectionType: 'section',
          index: 3,
          title: 'Consequences',
          titlePlain: 'Consequences',
          numeral: '4',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Reduces coupling between client and service providers. Changing the service provider interface will affect fewer clients.</p>\n</li>\n<li>\n<p>Introduces additional interfaces that must be maintained.</p>\n</li>\n<li>\n<p>You have to find a good compromise between "good client fit" and the number of interfaces.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'also-known-as-14',
          id: '_also_known_as_14',
          sectionType: 'section',
          index: 4,
          title: 'Also Known As',
          titlePlain: 'Also Known As',
          numeral: '5',
          children: []
        },
        {
          type: 'section',
          slug: 'related-practices-5',
          id: '_related_practices_5',
          sectionType: 'section',
          index: 5,
          title: 'Related Practices',
          titlePlain: 'Related Practices',
          numeral: '6',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>If <a href="#Never-Change-Running-System">[Never-Change-Running-System]</a> is a must meaning a service component or its API must not be changed, consider using</p>\n<div class="ulist">\n<ul>\n<li>\n<p><a href="#Manage-Complex-Client-Dependencies-With-Facade">Section 4.10.7, &#8220;<span class="pattern">Manage Complex Client Dependencies With Facade</span>&#8221;</a> and</p>\n</li>\n<li>\n<p><a href="#Front-End-Switch">[Front-End-Switch]</a></p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'references-22',
          id: '_references_22',
          sectionType: 'section',
          index: 6,
          title: 'References',
          titlePlain: 'References',
          numeral: '7',
          children: []
        }
      ]
    },
    {
      type: 'section',
      slug: 'introduce-boy-scout-rule',
      id: 'Introduce-Boy-Scout-Rule',
      sectionType: 'section',
      index: 5,
      title: '<span class="pattern">Introduce Boy Scout Rule</span>',
      titlePlain: 'Introduce Boy Scout Rule',
      numeral: '6',
      children: [
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>The &#8220;Boy Scout Rule&#8221; for software development basically states that we</p>\n</div>'
        },
        {
          type: 'quote',
          content:
            '<div class="quoteblock">\n<blockquote>\n&#8220;Always check a module in cleaner than when you checked it out.&#8221;.\n</blockquote>\n<div class="attribution">\n&#8212; Robert C. Martin\n</div>\n</div>'
        },
        {
          type: 'paragraph',
          content:
            '<div class="paragraph">\n<p>Uncle Bob (Robert C. Martin) proposed this adoption of the rule from the boy\nscout rulebook which reads &#8220;Try and leave this world a little better than you\nfound it.&#8221; for the software development world in an article in Kevlin Henney&#8217;s\n&#8220;97 Things a Programmer Should Know&#8221; <a href="#Henney">[Henney]</a>.</p>\n</div>'
        },
        {
          type: 'section',
          slug: 'intent-45',
          id: '_intent_45',
          sectionType: 'section',
          index: 0,
          title: 'Intent',
          titlePlain: 'Intent',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Enable cross-cutting architectural improvement even if it is not feasible to change the whole codebase.</p>\n</div>'
            },
            {
              type: 'admonition',
              content:
                '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\nOften the introduction of concepts like layering is deemed <em>“impossible”</em> due to the huge codebase that would be affected. In these cases the Boy Scout Rule approach is a lightweight way to enhance the code quality one day at a time.\n</td>\n</tr>\n</table>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'description-44',
          id: '_description_44',
          sectionType: 'section',
          index: 1,
          title: 'Description',
          titlePlain: 'Description',
          numeral: '2',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Drafting from an <a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a>, define a specific rule set\non how to improve the contents of specific file types.</p>\n</li>\n<li>\n<p>Specify how much effort should be allowed to perform each specific\nclean-up operation</p>\n</li>\n<li>\n<p>Specify how to proceed if the cleanup takes up too much time</p>\n</li>\n<li>\n<p>Revisit the rule set regularly</p>\n</li>\n<li>\n<p>Install a mechanism to ensure that the things that where too big to\nbe cleaned up while visiting the file will end up in the\n<a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a>.</p>\n</li>\n</ul>\n</div>'
            },
            {
              type: 'admonition',
              content:
                '<div class="admonitionblock tip">\n<table>\n<tr>\n<td class="icon">\n<div class="title">Tip</div>\n</td>\n<td class="content">\n<div class="title">Example Boy Scout Rule agreement</div>\n<div class="paragraph">\n<p>This is a very concrete agreement from a specific project - yours\nshould look rather different.</p>\n</div>\n<div class="paragraph">\n<p><strong>Boy Scout Rule agreement for project X from 2014-02-19 onwards:</strong>\n. Apply defined source code formatting (via IDE) to adhere to coding style<br>\nIf the formatting introduces errors and those errors can not be fixed within 10\nMinutes revert changes and add the file to the "redo formatting list" (e.g. add\nan TODO REFORMAT comment, if such a comment already exist add an exclamation mark\neach time you handle the file)</p>\n</div>\n<div class="olist arabic">\n<ol class="arabic">\n<li>\n<p>Move SQL strings to the db-encapsulation layer and replace the former\ndirect database calls by appropriate calls to the correct architecture elements<br>\nIf this takes longer than 20 minutes revert changes and add file to the list\n"difficulties with database extraction" (e.g. add an TODO DB-EXTRACT comment,\nif such a comment already exist add an exclamation mark each time you handle\nthe file)</p>\n</li>\n<li>\n<p>Remove magic numbers from source code and replace them with\n  constants (e.g. replace if (item.id &gt; 99) with if (item.id &gt;\nItem.COMPOUND_ITEMS_THRESHHOLD).</p>\n</li>\n<li>\n<p>If time allows replace the former "magic number conditionals" with a\n  function on a business logic level (e.g. replace if (item.id &gt;\nItem.COMPOUND_ITEMS_THRESHHOLD)\n  with if (item.is_compound())</p>\n</li>\n</ol>\n</div>\n</td>\n</tr>\n</table>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'experiences-19',
          id: '_experiences_19',
          sectionType: 'section',
          index: 2,
          title: 'Experiences',
          titlePlain: 'Experiences',
          numeral: '3',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Introducing the Boy Scout Rule on a heavily deteriorated code base\ninduces heavy payback on <a href="https://en.wikipedia.org/wiki/Technical_debt">technical debt</a> and often gets challenged\nby team members and senior management. It is important to point out\nthat the extended time spent on fixing the artifacts "as the teams\ngoes" actually is the <em>explicit</em> payment of the technical debt interest rate.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'risks-8',
          id: '_risks_8',
          sectionType: 'section',
          index: 3,
          title: 'Risks',
          titlePlain: 'Risks',
          numeral: '4',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Sometimes the Boy Scout Rule can be taken as a means by itself. In\nthese cases the higher goals tend to be forgotten and thus</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'applicability-25',
          id: '_applicability_25',
          sectionType: 'section',
          index: 4,
          title: 'Applicability',
          titlePlain: 'Applicability',
          numeral: '5',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>The pattern &#8220;Introduce Boy Scout Rule&#8221; can always be applied.<br>\nSome of the most effective uses are</p>\n</div>'
            },
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>unstructured code (no layers, no separation of concerns etc.)</p>\n</li>\n<li>\n<p>systematic weaknesses (insecure logging, insecure handling of\ndatabase inserts etc.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'consequences-16',
          id: '_consequences_16',
          sectionType: 'section',
          index: 5,
          title: 'Consequences',
          titlePlain: 'Consequences',
          numeral: '6',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>The introduction the Boy Scout Rule often proved to enable structural\nimprovements as a prerequisite for higher level architectural\nimprovements. Also it heightens the team&#8217;s awareness of good practices\nin their code base.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>The introduction of the Boy Scout Rule leads to a dramatic shift in\nthe distribution of the code quality because those parts of the system\nthat get changed the most also get the most care. For more stable\nparts of the system other approaches have to be utilized.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'also-known-as-15',
          id: '_also_known_as_15',
          sectionType: 'section',
          index: 6,
          title: 'Also Known As',
          titlePlain: 'Also Known As',
          numeral: '7',
          children: []
        },
        {
          type: 'section',
          slug: 'related-patterns-27',
          id: '_related_patterns_27',
          sectionType: 'section',
          index: 7,
          title: 'Related Patterns',
          titlePlain: 'Related Patterns',
          numeral: '8',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Refactoring-Plan">[Refactoring-Plan]</a>, as an alternative or complimenting approach</p>\n</li>\n<li>\n<p><a href="#Introduce-Layering">[Introduce-Layering]</a> can be performed using the Boy Scout Rule</p>\n</li>\n<li>\n<p><a href="#Anticorruption-Layer">Section 4.10.2, &#8220;<span class="pattern">Anticorruption Layer</span>&#8221;</a> can be performed using the Boy Scout Rule</p>\n</li>\n<li>\n<p>An <a href="#Improvement-Backlog">Section 5.14, &#8220;<span class="pattern">Improvement Backlog</span>&#8221;</a> should be the basis for the tasks\nperformed when applying the Boy Scout Rule</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'references-23',
          id: '_references_23',
          sectionType: 'section',
          index: 8,
          title: 'References',
          titlePlain: 'References',
          numeral: '9',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>The original description of the boy scout rule can be found online at <a href="#Boy-Scout-Rule-article">[Boy-Scout-Rule-article]</a>.</p>\n</div>'
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      slug: 'manage-complex-client-dependencies-with-facade',
      id: 'Manage-Complex-Client-Dependencies-With-Facade',
      sectionType: 'section',
      index: 6,
      title:
        '<span class="pattern">Manage Complex Client Dependencies With Facade</span>',
      titlePlain: 'Manage Complex Client Dependencies With Facade',
      numeral: '7',
      children: [
        {
          type: 'section',
          slug: 'intent-46',
          id: '_intent_46',
          sectionType: 'section',
          index: 0,
          title: 'Intent',
          titlePlain: 'Intent',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Simplify the interaction of a client with a set of service components.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'description-45',
          id: '_description_45',
          sectionType: 'section',
          index: 1,
          title: 'Description',
          titlePlain: 'Description',
          numeral: '2',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>When clients use a set of components with repeating patterns these\ninteraction patterns are implemented in a Facade component.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>The interface the Facade provides to the client is tailored to the client&#8217;s\nneed. Technical details that are specific for the service component implementations\nare handled inside the facade.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'experiences-20',
          id: '_experiences_20',
          sectionType: 'section',
          index: 2,
          title: 'Experiences',
          titlePlain: 'Experiences',
          numeral: '3',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Consider a Facade if you must use generic frameworks or systems you cannot modify\ne.g. legacy systems.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'applicability-26',
          id: '_applicability_26',
          sectionType: 'section',
          index: 3,
          title: 'Applicability',
          titlePlain: 'Applicability',
          numeral: '4',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Apply this pattern when clients use a set of components in stereotypcial fashion.\nThings that can be handled by a facade:</p>\n</div>'
            },
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>recurring control flows</p>\n</li>\n<li>\n<p>technical details</p>\n<div class="ulist">\n<ul>\n<li>\n<p>configuration of components</p>\n</li>\n<li>\n<p>resource lookup</p>\n</li>\n<li>\n<p>error handling</p>\n</li>\n</ul>\n</div>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'consequences-17',
          id: '_consequences_17',
          sectionType: 'section',
          index: 4,
          title: 'Consequences',
          titlePlain: 'Consequences',
          numeral: '5',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Enhances Information Hiding. Clients do not need information about the components\' technical detail.</p>\n</li>\n<li>\n<p>Supports DRY principle: complex interactions are implemented in one place. No need to reimplement this in different clients.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'also-known-as-16',
          id: '_also_known_as_16',
          sectionType: 'section',
          index: 5,
          title: 'Also Known As',
          titlePlain: 'Also Known As',
          numeral: '6',
          children: []
        },
        {
          type: 'section',
          slug: 'related-patterns-28',
          id: '_related_patterns_28',
          sectionType: 'section',
          index: 6,
          title: 'Related Patterns',
          titlePlain: 'Related Patterns',
          numeral: '7',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Interface-Segregation-Principle">Section 4.10.5, &#8220;<span class="pattern">Interface Segregation Principle</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'references-24',
          id: '_references_24',
          sectionType: 'section',
          index: 7,
          title: 'References',
          titlePlain: 'References',
          numeral: '8',
          children: []
        }
      ]
    },
    {
      type: 'section',
      slug: 'measure',
      id: 'Measure',
      sectionType: 'section',
      index: 7,
      title: '<span class="pattern">Measure</span>',
      titlePlain: 'Measure',
      numeral: '8',
      children: [
        {
          type: 'section',
          slug: 'intent-47',
          id: '_intent_47',
          sectionType: 'section',
          index: 0,
          title: 'Intent',
          titlePlain: 'Intent',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>If you don’t measure it, you can’t optimize it.&#8201;&#8212;&#8201;Coda Hale</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'description-46',
          id: '_description_46',
          sectionType: 'section',
          index: 1,
          title: 'Description',
          titlePlain: 'Description',
          numeral: '2',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>TODO: explain different kind of metrics (static-code, runtime, organisational&#8230;&#8203;)</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'experiences-21',
          id: '_experiences_21',
          sectionType: 'section',
          index: 2,
          title: 'Experiences',
          titlePlain: 'Experiences',
          numeral: '3',
          children: []
        },
        {
          type: 'section',
          slug: 'risks-9',
          id: '_risks_9',
          sectionType: 'section',
          index: 3,
          title: 'Risks',
          titlePlain: 'Risks',
          numeral: '4',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>If you measure too many different parameters or attributes, you might get drown in numbers.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'applicability-27',
          id: '_applicability_27',
          sectionType: 'section',
          index: 4,
          title: 'Applicability',
          titlePlain: 'Applicability',
          numeral: '5',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>This pattern should always be considered.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'consequences-18',
          id: '_consequences_18',
          sectionType: 'section',
          index: 5,
          title: 'Consequences',
          titlePlain: 'Consequences',
          numeral: '6',
          children: []
        },
        {
          type: 'section',
          slug: 'also-known-as-17',
          id: '_also_known_as_17',
          sectionType: 'section',
          index: 6,
          title: 'Also Known As',
          titlePlain: 'Also Known As',
          numeral: '7',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>quantitative analysis</p>\n</li>\n<li>\n<p>quantitative runtime analysis</p>\n</li>\n<li>\n<p>profiling</p>\n</li>\n<li>\n<p>organisational metrics</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'related-patterns-29',
          id: '_related_patterns_29',
          sectionType: 'section',
          index: 7,
          title: 'Related Patterns',
          titlePlain: 'Related Patterns',
          numeral: '8',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>This pattern is an important enabler for a successful <a href="#Runtime-Artifact-Analysis">[Runtime-Artifact-Analysis]</a> or performance analysis.</p>\n</li>\n<li>\n<p><a href="#Instrument-System">Section 2.3.10, &#8220;<span class="pattern">Instrument System</span>&#8221;</a> and <a href="https://en.wikipedia.org/wiki/Profiling_(computer_programming)">profiling</a> are very similar to this pattern, however they are limited to a temporary instrumentation that is needed during the Analysis phase to identify or scope a certain problem that cannot be isolated without modifying the code.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'references-25',
          id: '_references_25',
          sectionType: 'section',
          index: 8,
          title: 'References',
          titlePlain: 'References',
          numeral: '9',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p><a href="https://www.youtube.com/watch?v=czes-oa0yik">Coda Hale Talk on "Metrics-Everywhere"</a></p>\n</li>\n</ul>\n</div>'
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      slug: 'use-invariants-to-kill-zombies',
      id: 'Use-Invariants-To-Kill-Zombies',
      sectionType: 'section',
      index: 8,
      title: '<span class="pattern">Use Invariants To Kill Zombies</span>',
      titlePlain: 'Use Invariants To Kill Zombies',
      numeral: '9',
      children: [
        {
          type: 'section',
          slug: 'intent-48',
          id: '_intent_48',
          sectionType: 'section',
          index: 0,
          title: 'Intent',
          titlePlain: 'Intent',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Provide a safe approach in situations where it seems to dangerous to delete\ncode or whole modules from a huge system because <a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a> can&#8217;t\nrecognize whether the code is still in use or not.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'description-47',
          id: '_description_47',
          sectionType: 'section',
          index: 1,
          title: 'Description',
          titlePlain: 'Description',
          numeral: '2',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Oftentimes old systems contain lots of code that probably is no longer in use\nbut still has to be tended to. Such code puts a burden on every cross-cutting\nchange - from the year-2000 efforts of the late nineties to the upcoming\nend-of-unix-system date rewrites. New processor architectures, new versions of\noperating systems with a different handling of the byte-order and all kinds of\nexternal regulations are just some examples for things that make it necessary to\nmake changes to <strong>all</strong> existing code&#8201;&#8212;&#8201;whether it is still in use or not. This\ncode is deemed dead, but like the proverbial zombie it still goes around and\nmunches on everybody&#8217;s brain when it is time for the next system-wide change.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>This kind of zombie can be killed more safely by employing invariants.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>An invariant&#8201;&#8212;&#8201;as described by Bertrand Meyer in\n<a href="#Object-Oriented-Software-Construction">[Object-Oriented-Software-Construction]</a>&#8201;&#8212;&#8201;is a logical expression that always\nis true for a given set of circumstances. He proposes to actually verify those\ninvariants <em>in the code itself</em>. What happens if the invariant does not hold\ntrue is open to discussion - in some circumstances it&#8217;s best to <a href="#Fail-Fast">fail-fast</a>\nbut when improving legacy software with hundreds or thousand of users this often\nis not an option.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>So if we want to make sure we can delete this code our invariant is simple:</p>\n</div>'
            },
            {
              type: 'listing',
              content:
                '<div class="listingblock">\n<div class="title">Pseudo-Code</div>\n<div class="content">\n<pre class="highlight"><code class="language-java" data-lang="java">assertTrue(false, "We should not be here" + __FILE__ + __LINE__ );</code></pre>\n</div>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>How to implement assertTrue() for this case is hard, though.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>As just pointed out, the simple “let the program die” approach might not be\nappropriate.<br>\nJust logging the fact might not have a sufficient effect.<br>\nSending an e-mail requires at least some infrastructure (and infrastructure\ncode)<br>\nSending an SNMP-Trap might not be feasible in the environment.<br></p>\n</div>'
            },
            {
              type: 'paragraph',
              content: '<div class="paragraph">\n<p>And so on.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>This is a classical situation that calls for trade-off decisions, but since this\npiece of code should never be called anyway things like sending an e-mail or\ncalling some web services are not so far out of the question.</p>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>If a huge number of deployments is possible without problems it can also be\nfeasible to deescalate slowly and use more and more intrusive ways to handle\nthe failed invariant&#8201;&#8212;&#8201;write a log entry in the first two weeks, send an SNMP\ntrap in the next four weeks and after that send an e-mail (although it doesn&#8217;t\nhurt to keep the logging turned on).</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'experiences-22',
          id: '_experiences_22',
          sectionType: 'section',
          index: 2,
          title: 'Experiences',
          titlePlain: 'Experiences',
          numeral: '3',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>In several cases this approach helped to delete up to 50% of the code base.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'risks-10',
          id: '_risks_10',
          sectionType: 'section',
          index: 3,
          title: 'Risks',
          titlePlain: 'Risks',
          numeral: '4',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Sometimes the Zombie is buried to early&#8201;&#8212;&#8201;to be on the safe side the\npresumably dead code should live through at least each season. For huge\nsystems that really means 366 days.</p>\n</li>\n<li>\n<p>The presumably dead code might be called <em>much</em> more often than anticipated -\nin these cases a highly invasive reaction, like sending an e-mail, can lead to\nside-effects that are close to a denial-of-service attack.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'applicability-28',
          id: '_applicability_28',
          sectionType: 'section',
          index: 4,
          title: 'Applicability',
          titlePlain: 'Applicability',
          numeral: '5',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>This pattern can be applied whenever the code-base has gotten too big and there\nare parts of the system that are perhaps unused (e.g. dead) but still add to the\nweight of the system.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'consequences-19',
          id: '_consequences_19',
          sectionType: 'section',
          index: 5,
          title: 'Consequences',
          titlePlain: 'Consequences',
          numeral: '6',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Dead code can be safely deleted</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'also-known-as-18',
          id: '_also_known_as_18',
          sectionType: 'section',
          index: 6,
          title: 'Also Known As',
          titlePlain: 'Also Known As',
          numeral: '7',
          children: []
        },
        {
          type: 'section',
          slug: 'related-patterns-30',
          id: '_related_patterns_30',
          sectionType: 'section',
          index: 7,
          title: 'Related Patterns',
          titlePlain: 'Related Patterns',
          numeral: '8',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Use <a href="#Static-Code-Analysis">Section 2.3.25, &#8220;<span class="pattern">Static Code Analysis</span>&#8221;</a> to find candidates, entry points and exit points.</p>\n</li>\n<li>\n<p>Using invariants to kill zombies is a special case of <a href="#Assertions">[Assertions]</a> in the\ncontext of architecture improvement.</p>\n</li>\n<li>\n<p>Introducing invariants to verify that the code is really dead is a specific\nway to make <a href="#Explicit-Assumption">Section 5.9, &#8220;<span class="pattern">Explicit Assumption</span>&#8221;</a>s</p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'references-26',
          id: '_references_26',
          sectionType: 'section',
          index: 8,
          title: 'References',
          titlePlain: 'References',
          numeral: '9',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p>Invariants (and other <a href="#Assertions">[Assertions]</a>) have been made popular by Bertrand Meyer\nin his seminal book <a href="#Object-Oriented-Software-Construction">[Object-Oriented-Software-Construction]</a></p>\n</li>\n<li>\n<p>Brian Foote references Zombie code in <a href="#Big-Ball-Of-Mud">[Big-Ball-Of-Mud]</a></p>\n</li>\n<li>\n<p>Dead code is an alternate name for the lava-flow anti pattern <a href="#Brown">[Brown]</a>.</p>\n</li>\n</ul>\n</div>'
            }
          ]
        }
      ]
    },
    {
      type: 'section',
      slug: 'improve-feedback-from-and-for-stakeholders',
      id: 'Improve-feedback-from-and-for-stakeholders',
      sectionType: 'section',
      index: 9,
      title:
        '<span class="pattern">Improve Feedback From And For Stakeholders</span>',
      titlePlain: 'Improve Feedback From And For Stakeholders',
      numeral: '10',
      children: [
        {
          type: 'section',
          slug: 'intent-49',
          id: '_intent_49',
          sectionType: 'section',
          index: 0,
          title: 'Intent',
          titlePlain: 'Intent',
          numeral: '1',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Effectively collect feedback from various stakeholders.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'description-48',
          id: '_description_48',
          sectionType: 'section',
          index: 1,
          title: 'Description',
          titlePlain: 'Description',
          numeral: '2',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>It is expensive to collect information (problems, opinions etc.) from stakeholders (customers, support staff, developers, backoffice etc.) via surveys, interviews or meetings (e.g. <a id="atam"></a>). There are possibilities to offer low-threshold services for involved people to give feedback. Possibilities e.g. are:</p>\n</div>'
            },
            {
              type: 'olist',
              content:
                '<div class="olist loweralpha">\n<ol class="loweralpha" type="a" start="1">\n<li>\n<p>Tracking systems in the user interface</p>\n</li>\n<li>\n<p>Easy-to-use contact possibilities in the system&#8217;s user interface</p>\n</li>\n<li>\n<p>Ticketing/issue management software</p>\n</li>\n<li>\n<p>Wikis</p>\n</li>\n<li>\n<p>System-supported surveys</p>\n</li>\n</ol>\n</div>'
            },
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>This information might help in finding issues, calculate their costs and prioritize it. Additionally to quantitative analysis, qualitative analysis might give improvement hints.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'experiences-23',
          id: '_experiences_23',
          sectionType: 'section',
          index: 2,
          title: 'Experiences',
          titlePlain: 'Experiences',
          numeral: '3',
          children: []
        },
        {
          type: 'section',
          slug: 'risks-11',
          id: '_risks_11',
          sectionType: 'section',
          index: 3,
          title: 'Risks',
          titlePlain: 'Risks',
          numeral: '4',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Since most improvements are based on voluntariness (all examples except a), the information might be biased.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'applicability-29',
          id: '_applicability_29',
          sectionType: 'section',
          index: 4,
          title: 'Applicability',
          titlePlain: 'Applicability',
          numeral: '5',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Many of the tools supporting this use case are used for a group of stakeholders and can possibly be used for others as well (e.g. ticketing systems or Wikis for developers in open source projects).</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'consequences-20',
          id: '_consequences_20',
          sectionType: 'section',
          index: 5,
          title: 'Consequences',
          titlePlain: 'Consequences',
          numeral: '6',
          children: [
            {
              type: 'paragraph',
              content:
                '<div class="paragraph">\n<p>Stakeholders give valuable information, their satisfaction with the system increases.</p>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'also-known-as-19',
          id: '_also_known_as_19',
          sectionType: 'section',
          index: 6,
          title: 'Also Known As',
          titlePlain: 'Also Known As',
          numeral: '7',
          children: []
        },
        {
          type: 'section',
          slug: 'related-patterns-31',
          id: '_related_patterns_31',
          sectionType: 'section',
          index: 7,
          title: 'Related Patterns',
          titlePlain: 'Related Patterns',
          numeral: '8',
          children: [
            {
              type: 'ulist',
              content:
                '<div class="ulist">\n<ul>\n<li>\n<p><a href="#Context-Analysis">Section 2.3.3, &#8220;<span class="pattern">Context-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Issue-Tracker-Analysis">Section 2.3.11, &#8220;<span class="pattern">Issue-Tracker-Analysis</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Pre-Interview-Questionnaire">Section 2.3.16, &#8220;<span class="pattern">Pre Interview Questionnaire</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Stakeholder-Interview">Section 2.3.24, &#8220;<span class="pattern">Stakeholder Interview</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#Questionnaire">Section 2.3.18, &#8220;<span class="pattern">Questionnaire</span>&#8221;</a></p>\n</li>\n<li>\n<p><a href="#User-Analysis">Section 2.3.27, &#8220;<span class="pattern">User-Analysis</span>&#8221;</a></p>\n</li>\n</ul>\n</div>'
            }
          ]
        },
        {
          type: 'section',
          slug: 'references-27',
          id: '_references_27',
          sectionType: 'section',
          index: 8,
          title: 'References',
          titlePlain: 'References',
          numeral: '9',
          children: []
        }
      ]
    }
  ]
}
