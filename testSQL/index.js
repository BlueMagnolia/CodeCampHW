const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '856636',
    database: 'boatrental',
})

db.connect()

app.get('/boats',(req,res) => {
    let query = "SELECT * FROM boats"
    db.query(query,(err,results) => {
        res.json(results)
    })
})

app.get('/addboat',(req,res) => {
    // Add path string in json by get
    let query = `INSERT INTO boats(bid,bname,color) values (${req.query.bid},\"${req.query.bname}\",\"${req.query.color}\")`
    db.query(query, (err, results) => {
        if (err) {
            console.log("something wrong!")
            console.log(err)
        } else {
            // return "Success"
            res.send('Success')
        }
    })
})

app.get('/deleteboatbyid',(req,res) => {
    let query = `DELETE FROM boats WHERE bid = ${req.query.deleteboatid}`
    db.query(query, (err, results) => {
        if (err) {
            console.log("something wrong!")
            console.log(err)
        } else {
            // return "Success"
            res.send(`deleted boat id: ${req.query.deleteboatid} already.`)
        }
    })
})

app.get('/updateboatbyid', (req,res) => {
    let query = `UPDATE boats SET bname = \"${req.query.bname}\", color = \"${req.query.color} \" WHERE bid = \"${req.query.bid} \" `
    db.query(query, (err, results) => {
        if (err) {
            console.log("something wrong!")
            console.log(err)
        } else {
            // return "Success"
            res.send(`update boat id: ${req.query.bid} already.`)
        }
    })
})

app.listen(3001, () => {
    console.log("Start server at port 3001")
})