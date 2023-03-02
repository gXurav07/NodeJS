const express = require('express');

const app = express();

app.listen(3000);


// Routes
app.get('/', (req, res)=>{
    // needs absolute path incase second argument is not given
    res.sendFile('./views/index.html', {root:__dirname}); 
})

app.get('/style.css', (req, res)=>{
    res.sendFile('./views/style.css', {root:__dirname}); 
})

app.get('/main.js', (req, res)=>{
    res.sendFile('./views/main.js', {root:__dirname}); 
})

app.get('/station.jpg', (req, res)=>{
    res.sendFile('./views/station.jpg', {root:__dirname}); 
})

app.get('/buttons', (req, res)=>{
    res.sendFile('./views/buttons.html', {root:__dirname}); 
})

app.get('/', (req, res)=>{
    res.sendFile('./views/style.css', {root:__dirname}); 
})

// direct string send
app.get('/greet', (req, res) => {
    res.send('<h1>Hello There</h1>');
})

// redirects
app.get('/button-press', (req, res) => {
    res.redirect('/buttons');
})


// 404 page
app.use((req, res) => {  // this must be kept at very bottom. [.use() is like a default route ]
    res.status(404).sendFile('./views/404.html', {root:__dirname});   // functions can be chained
})

