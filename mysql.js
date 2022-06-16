const mysql = require('mysql')

var con = mysql.createConnection({
    host: 'localhost',
    port: '3030',
    user: 'Nidhi',
    password: 'nidhi09$',
    database: 'student',
    table: 'studentsdetails'


})

//create database

// con.query('create database student', (err) => {

//     if (err) {
//         console.log(err)
//     }
//     console.log('database created')
// })

//create table
// var query = 'create table studentsDetails(id int, name varchar(30), age int, course varchar(30))'

// con.query(query, (err) => {
//     if (err)
//         throw err
//     console.log('table created')

// })
module.exports = mysql
module.exports = con