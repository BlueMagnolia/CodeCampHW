var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())

// 1
app.get('/static', function (req,res) {
    res.send("Hello World");
})

// 2
app.get('/staticJSON', function (req,res) {
    objJSON = { text: "Hello World" }
    res.send(objJSON.text);
} )

// 3
var echoRoute = require('./echoRoute')
app.use('/echo',echoRoute)


// 5
app.get('/plusByJSON', function (req, res) {
    obj = JSON.parse(req.query.jsonText) ;
    console.log(obj.a)
    var obj1 = parseInt(obj.a);
    var obj2 = parseInt(obj.b);
    var num = obj1 + obj2;
    res.send(`${num}`);
})

// 6
var expressHwRouter = require('./expressHwRouter')
app.use ('/plus',expressHwRouter)

// 7
var checkEvenNumberRouter = require('./checkEvenNumberRouter')
app.use('/checkEvenNumber', checkEvenNumberRouter)


// 10
var numberRouter = require('./numberRouter')
app.use('/number',numberRouter)

// 19
var countFieldsRouter = require('./countFieldsRouter')
app.use('/countFields', countFieldsRouter)

app.listen(4000)
