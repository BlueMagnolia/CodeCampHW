var express = require('express')
var router = express.Router()

// 7-9
router.get('/:id',function(req,res) {
    let a = parseInt(req.params.id)
   
    if (a % 2 == 0) { 
        res.status(200).send('Even')
    } else { 
        res.status(200).send('Odd')
    }
})
module.exports = router