var express=require('express')
var app=express()
app.get('/',(req,res)=>{
res.send('默认请求')//传字符串、对象
})
app.get('/list',(req,res)=>{
    res.send({'data':req.query})
})
app.get('/getid/:id',(req,res)=>{
    res.send({'data':req.params.id})
})
//all代表所有
app.all((req,res)=>{
    
})
app.listen(3000)