var http = require('http')
var foo = require('foo')
//node_modules   项目依赖
console.log(foo)
var sd=require('silly-datetime')
//时间戳  1572331749
var time=sd.format(1572331749,'YYYY-MM-DD')
console.log(time)