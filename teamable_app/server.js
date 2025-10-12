const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/', express.static (__dirname + '/dist'))

app.get('/get-profile', function(req, res){
    const response = {
        name: "Anna Smith",
        email: "anna.smith@example.com",
        interests: "coding"
    }
    res.send(response)
})

app.post('/update-profile', function(req, res){
    const payload = req.body
    console.log(payload)
    // saving files into a database
    if (Object.keys(payload).length === 0) {
        res.status(404).send({error: "payload empty. Couldn't update user data."})
    } else {
    res.status(200).send({
        //updating user profile
        info: "User updated data successfully."
    })
    }
})

app.listen(3000, function () {
    console.log("app is listening on port 3000.")
    // 
})