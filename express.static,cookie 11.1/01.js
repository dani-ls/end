var express = require('express')
var path = require('path')
var app = express()
express.static('./public')
var static = path.resolve(__dirname, 'public')
app.use(express.static(static))
app.get('/', async (req, res) => {
    res.send()
})
app.listen(3000)