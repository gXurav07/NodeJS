
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('Request received');
    console.log(req.url, req.method);

    // res.setHeader('Content-Type', 'text/plain');
    // res.write('My name is Gaurav Malakar');

    res.setHeader('Content-Type', 'text/html');
    // res.write('<h1>Hello World</h1>');
    path = './views'+req.url;
    if (path == './views/') {
        path = './views/index.html';
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    });
});

// port no. , ip address, callback function
server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000');
});

