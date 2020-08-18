const http = require('http');
const querystring = require('querystring');
const postData = querystring.stringify({
    'content': 'Hello World!202020'
});
const fs =  require('fs');

let filename = './publish/publish-tool/cat.jpg';
fs.stat(filename,(error,stats)=>{
    console.log(stats);
    const options = {
        host: 'localhost',
        port: 8081,
        method: 'POST',
        path: '/?filename=cat.jpg',
        headers: {
            'Content-Type': 'application/octet-stream',
            'Content-Length': stats.size
        }
    };
    const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log(`HEADERS: ${JSON.stringify(res.headers)}`); 
    });
    
    req.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    // Write data to request body
    let rs = fs.createReadStream(filename);
    rs.pipe(req);
    rs.on('end',()=>{
        req.end();
    })
})
