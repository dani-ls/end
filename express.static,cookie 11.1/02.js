var express = require('express')
var cookieParser = require('cookie-parser')
var path = require('path')
var app = express()
express.static('./public')
//让express与cookie-parser建立联系
app.use(cookieParser('securt'))//设置签名需传参数

//获取public文件夹路径   __dirname 当前路径
var static = path.resolve(__dirname, 'public')
//express.static  静态资源中间件
app.use(express.static(static))
app.get('/', async (req, res) => {
    res.send({'data':req.cookies})
})
//设置cookie
app.get('/login', async (req, res) => {
    //获取url地址栏中的username
    var obj=req.query.username
    //设置cookie   maxAge 过期时长   httpOnly  为true是只允许在服务端修改cookie值
    // signed 是否生成签名   domain  域名   Secure
    // req.cookies.cookiename=obj
    //以键值对的形式传进去
    res.cookie('username',obj,{maxAge:10000,httpOnly:true})
    res.send({ 'data': obj })
})
//获取cookie
app.get('/list', async (req, res) => {
    var obj=req.query.username
    res.send({ 'data': obj })
    req.cookies=obj

})
app.listen(3000)
