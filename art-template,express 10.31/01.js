var http=require('http')
var fs=require('fs')
var art=require('art-template')
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return
    }
    fs.readFile('./index.art',(err,data)=>{
        var template=data.toString()
        // console.log(template)
        var list=['vue','react','node']
        //render  渲染
        var result= art.render(template,{a:list})
        //响应前端请求
        res.end(result)
    })

}).listen(3000)