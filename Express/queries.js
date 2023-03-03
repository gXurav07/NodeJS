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
    },
    {
        Id: 5,
        Name: "Gaurav"
    }
]

// queries
app.get('/users', (req, res)=>{
    console.log(req.query);
    let sat_users = []; // users satisfying the query

    for(let i in users){
        let flag = 1;
        let usr = users[i];
        for(let j in req.query){
            if(usr[j]!=req.query[j]){
                flag = 0;
            }
        }
        if(flag==1){
            sat_users.push(usr);
        }
    }
    res.send(sat_users);
})

