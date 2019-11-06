const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    let query = `UPDATE boats SET bname = \"${req.query.bname}\",`
})