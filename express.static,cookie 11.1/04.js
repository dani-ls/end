var express=require('express')
var art=require('express-art-template')
var app=express()
//在express中设置模板引擎  叫ejs
// app.set('view engine','ejs')
//app.engine() 用于 html
app.engine('html',art)
app.get('/',(req,res)=>{
    var list=['tom','rose','linda']
    res.render('home.html',{a:list})
    res.send()
})
app.listen(3000)