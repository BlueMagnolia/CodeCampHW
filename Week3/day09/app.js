const express = require('express')
const mysql = require('mysql')
const db = mysql.createConnection( {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'expressmysql'
})
db.connect()
const app = express()

app.get('/user', (req,res) => {
    let sql = 'SELECT * FROM users'
    let query = db.query(sql, (err,results) => {
        if (err) throw err
        console.log(results)
        res.json(results)
    })
    app.listen('3000', () => {
        console.log('start port 3000')
    })
})