const express = require('express');

const app = express();

// middleware function. [ helps to convert received data to json ]
app.use(express.json());

app.listen(5000);

let user = {};

// get
app.get('/user', getUser);

// post    ---   [generally used for creating something new in server]
app.post('/user', postUser);

// patch    ---  [ used for updating]
app.patch('/user', patchUser);


// delete    
app.delete('/user', deleteUser);


function getUser(req, res){
    res.send(user);
}

function postUser(req, res){
    user = req.body;
    res.json({
        message: "Data Received successfully!",
        data: req.body
    })
}

function patchUser(req, res){
    let receivedData = req.body;
    for(key in receivedData){
        user[key] = receivedData[key];
    }
    res.json({
        message: "Data updated successfully!",
        data: receivedData
    })
}

function deleteUser(req, res){
    user = {};
    res.json({
        message: "Data deleted successfully!"
    })

}