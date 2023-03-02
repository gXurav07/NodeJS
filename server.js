// implementing status code

const http = require('http')
const fs = require('fs')
const _ = require('lodash')

let base_path = './views'

const server = http.createServer((req, res)=> {

    //lodash
    let num = _.random(1, 50)
    console.log(num)

    console.log('url: ',req.url)
    let path = base_path
    res.statusCode = 200
    switch(req.url){
        case '/':
            path += '/index.html'
            break
        case '/style.css':
        case '/main.js':
        case '/station.jpg':
            path += req.url
            break
        case '/buttons':
            path += '/buttons.html'
            break
        case '/button-press':       // REDIRECTING
            res.statusCode = 301
            res.setHeader('Location', '/buttons')
            res.end()
            break
        default:
            res.statusCode = 404
            path += '/404.html'
    }
    
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            res.end();
        }
    });
    console.log('path; ',path)
})

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000 ......');
});
