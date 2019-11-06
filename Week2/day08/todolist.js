var express = require('express')

var app = express()

let toDoList = 

app.get('/getTodolist', (req,res) => {
    res.send('Get list')
})

app.get('/getCompletedList', (req, res) => {
    res.send('Get list completed')
})

app.post('/addTodoList', (req,res) => {
    res.send('Add todo list')
})

app.post('/addCompletedList', (req,res) => {
    res.send('Add completed')
})

app.delete('/deleteTodoList', (req,res) => {
    res.send('Deleted todo list')
})

app.delete('/deleteCompletedList', (req,res) => {
    res.send('Deleted completed list')
})

app.listen(3000, () => {
    console.log(`server is running`)
})


