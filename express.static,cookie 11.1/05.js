var express=require('express')
var art=require('express-art-template')
var session=require('express-session')
var app=express()

app.use(session({
    secret:'safe',  //加密字符串
    name:new Date,  //客户端的id
    cookie:{maxAge:9999999,httpOnly:true},
    resave:true,//强制初始化
    saveUninitialized:true,  //保持未初始化的session
    
}))
//获取session
app.get('/',(req,res)=>{
  if(req.session.username){
    res.send('欢迎'+req.session.username)
  }else{
      res.send('未保存')
  }
})
//设置session
app.get('/send',(req,res)=>{
    var obj=req.query.username
    req.session.username=obj
    res.send()
})
app.get('/delet',(req,res)=>{
    res.cookie({maxAge: new Date(0)});
    // res.send()
})
app.listen(3000)