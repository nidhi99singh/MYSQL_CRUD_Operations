const bodyParser = require('body-parser')
const express = require('express')
const con = require('../mysql')
const router = express.Router()

router.get('/', (req, res) => {
    res.json('successful API')
})

//get all students 

router.get('/allstudents', (req, res) => {
    var query = 'select * from studentsdetails'

    con.query(query, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
        }
        res.send(rows)

    })
})

//get student by id
router.get('/studentbyid/:id', (req, res) => {
    var query = 'select * from studentsdetails where id=' + req.params.id

    con.query(query, (err, rows, fields) => {
        if (err) {
            throw err
        } else {
            res.send(rows)
        }
    })
})

//add student

router.post('/addStudent', (req, res) => {

    const body = req.body
    let data = { id: body.id, name: body.name, course: body.course, age: body.age }
    let query = 'insert into studentsdetails set ?'
    con.query(query, data, (error, result) => {
        if (error)
            throw error

        res.json('record inserted')
    })

})

//delete student by id

router.delete('/delete/:id', (req, res) => {

    let query = 'delete from studentsdetails where id=' + req.params.id
    con.query(query, (err) => {

        if (err) {
            throw err
        }
        res.send('deleted record')
    })

})
module.exports = router

//update record

router.put('/updateCourse/:id', (req, res) => {
    const id = req.params.id
    const student = req.body

    let query = 'update studentsDetails set ? where id= ?'
    con.query(query, [{ course: student.course }, id], (err) => {
        if (err)
            res.send(err)
        res.send('record updated')

    })

})


