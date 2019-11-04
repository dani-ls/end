//初识服务器
// node 模块
//加载http模块

var http=require("http")
//创建服务器
var server=http.createServer(function(req,res){
    //req request  请求  res response  响应
    //设置请求响应头
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})//解决乱码
    //end 结束响应  ==》响应客户端
    res.end('hello node')
})
//监听端口  端口不要写本机端口/默认端口8080
server.listen(3000,function(){
    console.log('已挂起')
})