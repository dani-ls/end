var http = require('http')
var form = require('formidable')
var path = require('path')
var fs = require('fs')
var sd=require('silly-datetime')
http.createServer((req, res) => { 
  if(req.url=='/dopost'){
    var fm=form.IncomingForm()
    console.log(fm)
    fm.uploadDir='./uploads'
    fm.parse(req,function(err,fields,files){
       var low =files.pic.path
       console.log(low)
       var extname=path.extname(files.pic.name)
    //    console.log(extname)
       var time=sd.format(new Date(),'HHmmss')
       console.log(time)
       var newf='./uploads/'+time +extname
       console.log(newf)
       fs.rename(low,newf,(err)=>{
           if(err){
            throw err
           }
       })
        res.end('success')
    })
  }
}).listen(3000)