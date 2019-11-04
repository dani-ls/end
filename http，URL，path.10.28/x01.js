var http=require('http')
// var fs=require('fs')
var url=require('url')
// console.log(url)
// var path=require('path')
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return
    } //只输出一次
//    console.log(url)
res.writeHead(200,{'Content-type':'text/html;charset:utf-8'})
//url.parse().query //可以处理get请求
//    console.log(url.parse(req.url))
    var obj=url.parse(req.url,true).query//转换成对象  加一个true  获取地址栏?后面的
    res.end(obj.username)
    
}).listen(3000)