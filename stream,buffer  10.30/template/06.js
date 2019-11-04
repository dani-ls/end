var http=require('http')
var ejs=require('ejs')
var fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return
    }
    fs.readFile('./view/index.ejs',(err,data)=>{
    var list=['vue','react','node']
        var template=data.toString()
        console.log(template)
        //render  渲染
        var result= ejs.render(template,{list:list})
        //响应前端请求
        res.end(result)
    })

}).listen(3000)