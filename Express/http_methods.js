const express = require('express');

const app = express();

// middleware function. [ helps to convert received data to json ]
app.use(express.json());

app.listen(3000);

let users = {};

// get
app.get('/users', (req, res)=>{
    res.send(users);
})

// post    ---   [generally used for creating something new in server]
app.post('/users', (req, res) => {
    users = req.body;
    res.json({
        message: "Data Received successfully!",
        data: req.body
    })

})

// patch    ---  [ used for updating]
app.patch('/users', (req, res) => {
    let receivedData = req.body;
    for(key in receivedData){
        users[key] = receivedData[key];
    }
    res.json({
        message: "Data updated successfully!",
        data: receivedData
    })

})


// delete    
app.delete('/users', (req, res) => {
    users = {};
    res.json({
        message: "Data deleted successfully!"
    })

})

