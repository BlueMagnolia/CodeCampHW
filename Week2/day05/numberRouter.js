var express = require('express')
var router = express.Router()

let arr = [];

// 11-13
router.post('/:id',function(req,res) {
    // console.log(req.params)
    arr.push(req.params.id);
    res.send(arr)
})

// 14-16
router.delete('/:id',function (req,res) {
    num = req.params.id;
    if (arr.includes(num)) {
        arr.splice((arr.indexOf(num)),1)
    }
    res.send(arr)
})

// 17-18
router.put('/:id1/:id2',function (req,res) {
    num1 = req.params.id1;
    num2 = req.params.id2;
    arr[arr.indexOf(num1)] = num2;
    res.send(arr)
})

module.exports = router         