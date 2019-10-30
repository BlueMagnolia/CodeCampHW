var express = require('express')
var router = express.Router()

// 19-21
router.post('/', function(req,res) {
    let num = req.body
    let count = Object.keys(num).length
    console.log(count)
    res.send(`${count}`)
})

module.exports = router

