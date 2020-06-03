const http = require('http');
const port = '8088'

// Returns content-type = text/plain
const server = http.createServer((req, res) => {
    console.log('request received');
    console.log(req.headers);

    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'bar');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('ok');
});

server.listen('8088')
console.log(`server-started-linsten:${port}`);