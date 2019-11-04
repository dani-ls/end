var http=require('http')
// var fs=require('fs')
var url=require('url')
// console.log(url)
// var path=require('path')
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return
    } //只输出一次

res.writeHead(200,{'Content-type':'text/html;charset:utf-8'})
    //协议 主机/域名  端口号   ？search   # hash
   var result='http://localhost:3000/?username=223&password=223'
   var obj=url.parse(result,true)
//    var obj=url.format({
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:3000',
//     port: '3000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?username=223&password=223',
   
//    })  //把对象变为字符串
// var obj=url.resolve('http://localhost:3000','/new')//把两个字段拼接为一个完整的路径
console.log(obj)    
res.end()
    
}).listen(3000)