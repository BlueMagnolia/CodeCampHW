var express = require('express')
var router = express.Router()

// router.get('/first', function (req,res) {
//     res.send('first on user')
// })

// router.get('/second', function (req,res) {
//     res.send('second on user')
// })

router.get('/',function (req,res) {
    res.send("Hello")
})

// router.get('/:id', function (req, res) {
//     res.send(req.params.id)
// })

// router.get('/add/:a/:b', function(req,res) {
//     var a = parseInt(req.params.a)
//     var b = parseInt(req.params.b)
//     res.send(String(a+b)) // 3 without string 12
// })

// router.post('/add', function (req, res) {
//     var a = parseInt(req.body.a)
//     var b = parseInt(req.body.b)
//     res.send(String(a + b)) // 3 without string 12
// })

module.exports = router