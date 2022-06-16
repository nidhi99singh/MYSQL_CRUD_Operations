const express = require('express')
const mysql = require('./mysql')
const con = require('./mysql')
const app = express()

con.connect((err) => {
    if (err)
        throw err
    console.log('Mysql connected')
})

app.listen(8080, () => {
    console.log('server connected')
})
app.use(express.json())

var studentRoutes = require('./routes/student')
app.use('/', studentRoutes)