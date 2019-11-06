const express = require('express')
const app = express ()
const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '12345678',
    database : 'boatrental',
})

db.connect()

app.listen(3001, () => {
    console.log("Start server at port 3001")
})