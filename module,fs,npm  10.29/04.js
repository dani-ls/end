var http = require('http')
var fs = require('fs')
http.createServer((req, res) => {
    //读文件
    //异步读取
    //    fs.readFile("./1.txt",(err,data)=>{
    //        res.end(data)
    //    })
    //同步读取
    // var a=fs.readFileSync('./1.txt')
    // res.end(a)
    //写入内容
    // fs.writeFile('./1.txt','jsdhbdivywierbvbcsb',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.writeHead(200,{'Content-type':'text/html;charset=utf-8'})
    //     res.end('写入成功')
    // })
    //追加内容  {flag:a}  append
    // fs.appendFile('./1.txt','加我们',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success')
    // })
    //创建目录
    // fs.mkdir('./aa', (err) => {
    //     if (err) {
    //         throw err
    //     }
    //     res.end('success')
    // })
    //创建文件    fs.writeFile  写入文件(文件不存在就创建,但不能创建目录)
    // fs.writeFile('./2.txt','bhgvgviwuefhweb',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success')
    // })
    //删除文件   fs.unlink 删除文件 
    // fs.unlink('./2.txt',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success')
    // })
    //删除目录    fs.rmdir  删除目录
    // fs.rmdir('./aa',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success')
    // })
    //判断文件状态   fs.stat  检测是文件还是目录(目录 文件是否存在) 
    // fs.stat('./aa',(err,stats)=>{

    //     res.end(stats.isDirectory())
    //     res.end(stats.isFile())
    //     res.end('22')
    // })
    //改名称
    // fs.rename('./1.txt','./3.txt',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success')
    // })
    //复制文件  copyFile   先读取文件 在写入
    //打开文件  
    // fs.open('./1.txt',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success')
    // })
    // //关闭文件
    // fs.close('./1.txt',(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end('success')
    // })
    //  作业：判断当前目录里面的内容是文件还是目录
    //        如果是目录把目录输出
    fs.readdir('./xw', (err, data) => {
        data.forEach((item,index)=>{
            var s='./xw/'+item
            fs.stat(s,(err,stats)=>{
                if(stats.isDirectory()){
                    console.log(item)
                }
            })
        })
        if (err) {
            throw err
        }
        res.end('success')
    })

}).listen(3000)