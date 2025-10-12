const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use('/', express.static (__dirname + '/'))

app.post('/save-task', function(req, res) {
    const taskObj = req.body
    // connect database
    //saves new task in database
    console.log("saved-task: ", taskObj.task);
    res.send({savedTask: taskObj.task})
})

app.get('/get-tasks', function(req, res) {
    const tasks = [
        "Write JS Code",
        "Go to the gym",
        "Read 10 Pages"
    ]
    res.send({tasks: tasks})
})

app.listen(3000, function () {
    console.log("app is listening on port 3000.")
    // 
})