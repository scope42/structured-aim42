// This file is generated. Please don't modify it directly.

import { Atomic, Section } from '../../../../types'

/**
 * This is content from the [aim42 Method Reference](https://aim42.github.io/)
 * by [Gernot Starke](https://www.gernotstarke.de/) and [community
 * contributors](https://github.com/aim42/aim42/graphs/contributors), used under
 * [CC BY-SA](https://creativecommons.org/licenses/by-sa/4.0/). If you distribute
 * it, make sure to attribute the original authors.
 */
export const description42Atomic: Atomic<Section> = {
  type: 'section',
  slug: 'description-42',
  id: '_description_42',
  sectionType: 'section',
  index: 1,
  title: 'Description',
  titlePlain: 'Description',
  numeral: '2',
  content:
    '<div class="paragraph">\n<p>While some time ago it was quite common to output log statements to standard out,\npeople usually use logging frameworks nowadays that give more control about what should\nbe logged and where the log entries should go.</p>\n</div>\n<div class="paragraph">\n<p>However, it turns out that such logging frameworks have some feature gems\nthat are not widely known or used. To name a few:</p>\n</div>\n<div class="ulist">\n<ul>\n<li>\n<p>Diagnostics Contexts (also known as Mapped Diagnostics Context (MDC) or Nested Diagnostics Context (NDC)) help to store additional context information for all succeeding log statements. Usage examples for such contexts are the login name of the current user, correlation IDs in order to enable cross-application log tracing or transaction IDs to have the possibility to filter all log entries that belong together.</p>\n</li>\n<li>\n<p>Additional log levels or markers help to make it easier to filter the log stream. It is a good advice to think about the marker and log design at the beginning of the project and try to agree on a common way to phrase log statements.</p>\n</li>\n<li>\n<p>Asynchronous appenders (i.e. log emitter) allow high-throughput logging, which lower impact on the application&#8217;s performance.</p>\n</li>\n<li>\n<p>Structured log formats produce a machine-readable output. Usually, log files are written using a more or less standardized text output. Log files in XML or JSON can be parsed and digested easily and allow for better filtering since more information, like diagnostics contexts, is always available in these formats.</p>\n</li>\n<li>\n<p>Filters enable context-based logging and can dispatch log entries to different log appenders. For instance it is possible to log warnings only but switch to debug logging for a specific user.</p>\n</li>\n</ul>\n</div>\n<div class="paragraph">\n<p>In some environments it turns out to be problematic to rely on a single logging API. This could be the case if the application runs within a container or container-like framework that already employs a configured logging framework. In order to be independent of conrete logging frameworks, logging facades like <a href="http://slf4j.org">SLF4J</a> should be preferred over using the framework&#8217;s API directly.</p>\n</div>\n<div class="paragraph">\n<p>Despite the focus on the software development, logging is also an operations topic. Often it turns out to be difficult to get recent log files from the operations team. Another pain point is that useful log information is scattered across multiple log files, stored at different locations on different systems. Log aggregation tools such as Splunk, <a href="http://www.logstash.net">Logstash</a>, Apache Flume or fluentd can consume and unify log data from different sources (e.g. files, syslog, network), can trigger alerts or index the log stream in order to make them searchable. Now, with tools like Kibana, log data of a system of systems can be easily analyzed and visualized. Correlation IDs contained in the logs can be used to trace certain business-related requests across multiple distributed systems easily.</p>\n</div>\n<div class="paragraph">\n<p>Using such features makes the problem analysis easier and more data is available in a standardized fashion.</p>\n</div>'
}
