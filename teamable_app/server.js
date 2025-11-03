const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url);
const dbName = 'company_db'
const collName = 'employees'
const { isInvalidEmail, isEmptyPayload } = require('./validator')


app.use(bodyParser.json())
app.use('/', express.static (__dirname + '/dist'))

app.get('/get-profile', async function(req, res) {
   
    // connecting to database
    await client.connect()
    console.log('Connected successfully to server');

    //initiate or get the db & collection
    const db = client.db(dbName)
    const collection = db.collection(collName)

    // get data from database
    const result = await collection.findOne({id: 1})
    console.log(result)
    client.close()

    response = {}
    if (result !== null) {
        response = {
            name: result.name,
            email: result.email,
            interests: result.interests
            }
    }

    res.send(response)
})

app.post('/update-profile', async function(req, res){
    const payload = req.body
    console.log(payload)

    // saving files into a database
    if (isEmptyPayload(payload) || isInvalidEmail(payload)) {
        res.status(404).send({error: "Invalid Payload. Couldn't update user data."})
    } else {
        await client.connect()
        console.log('Connected successfully to database server');
        //initiate or get the db & collection
        const db = client.db(dbName)
        const collection = db.collection(collName)
        // save payload to database
        payload['id'] = 1
        const updatedValues = { $set: payload }
        await collection.updateOne({id: 1}, updatedValues, {upsert: true})
        client.close()
        res.status(200).send({
        //updating user profile
        info: "User updated data successfully."
    })
    }
})

const server = app.listen(3000, function () {
    console.log("app is listening on port 3000.")
    // 
})

module.exports = {
    app,
    server
}