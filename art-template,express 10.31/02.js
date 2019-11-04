var express=require('express')
var app=express()
app.get('/',(req,res)=>{
res.send()//传字符串、对象
})
app.post('/list',(req,res)=>{
    res.send()
})
//all代表所有
app.all((req,res)=>{
    
})
app.listen(3000)