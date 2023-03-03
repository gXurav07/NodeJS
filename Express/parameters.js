const express = require('express');

const app = express();

// middleware function. [ helps to convert received data to json ]
app.use(express.json());

app.listen(3000);

let users = [
    {
        Id: 1,
        Name: "Gaurav"
    },
    {
        Id: 2,
        Name: "Guddu"
    },
    {
        Id: 3,
        Name: "Gobinda"
    }
]

// get all users
app.get('/users', (req, res)=>{
    res.send(users);
})


// param
app.get('/users/:id', (req, res)=>{  // here id is a parameter
    let req_user = null;
    console.log(req.params)
    for(let i in users){
        if(users[i].Id==req.params.id){
            req_user = users[i];
        }
    }

    if(req_user!=null){
        res.send(req_user);
    }
    else{
        res.send('<h2> Invalid user ID !! </h2>');
    }

})

// url to call the parameter is of the form:- localhost:3000/users/<id_value>


