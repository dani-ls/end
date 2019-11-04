var express=require('express')
var fs=require('fs')
var app=express();
app.get('/',(req,res)=>{
   var json={'name':req.query.username,'pass':req.query.pass}
   var arr=JSON.stringify(json)
   var arr1=[]
   arr1.push(arr)
   var append=fs.writeFile('./1.json',[],function(err,data){
    if(err) throw err
    arr1.push(data)
    console.log(arr1)
   })
    res.send()
})
app.listen(3000)