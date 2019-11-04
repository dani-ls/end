var http=require('http')
var fs=require('fs')
http.createServer((req,res)=>{
    //普通获取数据的方式
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    // fs.readFile('./1.txt',(err,data)=>{
    //     console.log(data.toString())
    //     res.end(data)
    // })
    //通过流的方式来获取数据
    // pipe  管道  createReadStream  创建可读流
    var readStream=fs.createReadStream('./1.txt')
    //设置编码格式/
    readStream.setEncoding('UTF8')
    //
    readStream.pipe(res)
}).listen(3000)