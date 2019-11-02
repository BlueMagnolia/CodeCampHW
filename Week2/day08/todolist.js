var express = require('express')

var app = express()

let toDoList = 

app.get('/getTodolist', (req,res) => {
    res.send(toDoList)
})

app.listen(3000, () => {
    console.log(`server is running`)
})

$(li).append(`<li> ${} </li>`)
