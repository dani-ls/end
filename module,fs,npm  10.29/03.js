var http = require('http')
var fs = require('fs')
var rooter = require('./rooter')
http.createServer((req, res) => {
    if (req.url == '/') {
        console.log(rooter)
        rooter.home(req, res)
    } else if (req.url == '/about') {

        rooter.about(req, res)
    } else if (req.url == '/news') {
        rooter.news(req, res)

    }else{
        res.end('404')
    }
}).listen(3000)