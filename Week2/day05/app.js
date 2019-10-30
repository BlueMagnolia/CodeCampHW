var express = require('express')
var bodyParser = require('body-parser')

var userRoute = require('./userRoute')

var app = express()

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({
    extended: true
}))

// app.get('/bye',function (req,res) {
//     res.send('Good bye')
// })


app.use('/user',userRoute)

// var dogRoute = require('./dogRoute')
// app.use('/dog', dogRoute)

// var catRoute = require('./catRoute')
// app.use('/cat', catRoute)




// console.log(test);


// app.use('/user', function (req, res) {
    // res.send('404 User Not Found')
// });

// app.use('', function (req, res) {
//     res.send('404 Not Found')
// });

app.listen(3000)

