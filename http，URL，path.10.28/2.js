var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    if(req.url=='/favicon.ico'){
        return
    } //只输出一次
    fs.readFile('./1.txt',(err,data)=>{
        console.log(data.toString())//把二进制转换为字符串
        res.end(data)
    })
    
}).listen(3000)