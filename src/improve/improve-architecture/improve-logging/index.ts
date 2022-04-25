// This file is generated. Please don't modify it directly.

import { Section } from '../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const improveLogging: Section = {
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
}
