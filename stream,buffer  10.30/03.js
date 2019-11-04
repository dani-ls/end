//监控日志   readline
var fs=require('fs')
var readline=require('readline')

var readStream=fs.createReadStream('./1.txt')
readStream.setEncoding('utf8')
// data  监听输入数据     end  完成数据的读取     line 监听事件
var r1=readline.createInterface({
    //监听输入数据
    input:readStream
})
//日志执行事件
r1.on('line',(lineData)=>{
    console.log(lineData)
})
//日志读取完成关闭
r1.on('close',()=>{
    console.log('监听数据完毕')

})