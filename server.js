const express = require('express');
const app = express();
const POST = 5000;

let students = [
    {
        id: 1,
        name: "Bill"
    },
    {
        id: 2,
        name: "Sara"
    },
    {
        id: 3,
        name: "Abdul"
    },
    {
        id: 4,
        name: "Chuck"
    },
]


function getStudentById(id){
   return students.find((student) => student.id === id)
}

function removeStudent(id){
    students = students.filter((student) => student.id != id)
    return students
}


app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/students', (req, res) => {
    res.send(students)
})

app.get('/student/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const st = getStudentById(id)
    res.send(st)
})


app.delete('/student/:id', (req, res) => {
    const id = req.params.id
    const sts = removeStudent(+id)
    res.send(sts)
})


app.listen(POST, () => {
    console.log(`listening on localhost ${POST}`)
})
