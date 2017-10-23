/**
 * Created by wenbo.kuang on 2017/10/20.
 */
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
// zone 为异步任务提供hook支持，主要应用于提高脏检查效率和降低性能损耗
import 'zone.js/dist/zone';

if (process.env.ENV === 'production') {
  // Production
} else {
  // Development and test
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}