var express = require('express')
var app = express()
//路由中间件
var router = express.Router()
app.use(router)
//验证码借口
router.get('/', (req, res) => {
    res.send()
})
router.get('/code',(req,res)=>{
    /**
     * 随机数  Math.random
     * 
     */
    var randomNum=function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)//加上min防止随机数没有意义
    }
    var str='ABCDEFGGHUYG#%$#$#678564756kjuyigyu987uygiuygf'
    var result='';
    for(var i=0;i<4;i++){
        result+=str[randomNum(0,str.length-1)]
    }
    // res.send({'data':result})
    res.jsonp({'data':result})
})
app.listen(3000)