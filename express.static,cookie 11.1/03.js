var express=require('express')
// var ejs=require('ejs')
var app=express()
//在express中设置模板引擎  叫ejs
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    var list=['tom','rose','linda']
    res.render('index.ejs',{a:list})
    res.send()
})
app.listen(3000)