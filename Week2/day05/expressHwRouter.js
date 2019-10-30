var express = require('express')
var router = express.Router()

// 4
router.get('/plus', function (req, res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.send(String(a + b));
})

// 6
router.get('/:a/:b',function(req,res) {
    var a = parseInt(req.params.a);
    var b = parseInt(req.params.b);
    res.send(String(a + b));
})
module.exports = router