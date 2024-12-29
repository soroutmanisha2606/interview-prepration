const http = require('https');
const fs = require('fs')
const server = http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain' });
    res.end('hello world')
});
server.listen(3000, ()=>{
    console.log('server is running')
})


// async call with call back 
function fetchData(callback){
setTimeout(()=>{
    callback(null ,' fetched ')
})
}
fs.readFile('./index.js','utf-8',(err,data)=>{
    console.log('dtaa',data)
})