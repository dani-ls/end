//接受post传输数据
//中间件   bode-parser
var express=require('express')
var bodyparser=require('body-parser')
var app=express()
//使用中间件
//处理json数据
app.use(bodyparser.json())
// 处理字符串
app.use(bodyparser.urlencoded({extended:false}))
app.get('/',(req,res)=>{
res.send('请求')//传字符串、对象
})
app.post('/dopost',(req,res)=>{
    res.send({'data':req.body.username})
})
app.listen(3000)