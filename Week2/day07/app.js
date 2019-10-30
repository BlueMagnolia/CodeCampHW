var express = require('express')
var bodyParser = require('body-parser')
var dataRoute = require('./route/dataRoute')
// var listRoute = require('./listRoute')

var app = express()

app.use(express.static('pubilc'))
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
app.use(bodyParser.json())
// app.use('/list',listRoute)
app.use('/data',dataRoute)


app.listen(3000)