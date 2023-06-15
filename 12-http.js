const http = require('http'); // require http module

// these variables can be anything
// req = request
// res = response

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('Welcome to our homepage'); // ends request
        return; // stops loop
    }
    if(req.url === '/about') {
        res.end('Here is our short history'); // ends request
        return;
    }   
    // Below if is the url doesn't match either above, rendering plain html
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page that you are looking for</p>
    <a href="/">Back Home</a>
    `)   
})

// 5000 is the port

server.listen(5000)

// You can visit localhost:5000 in a browser to view this