const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
    'content': 'Hello World!202020'
});

const options = {
    host: 'localhost',
    port: 8081,
    method: 'POST',
    path: '/?filename=z.html',
    headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    // res.setEncoding('utf8');
    // res.on('data', (chunk) => {
    //     console.log(`BODY: ${chunk}`);
    // });
    // res.on('end', () => {
    //     console.log('No more data in response.');
    // });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();