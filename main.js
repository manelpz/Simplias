
const port = 3000
const http = require('http');





const server = http.createServer((req, res) => {
    res.write('hello word')
    res.end()
   
})

server.listen(port, '127.0.0.1', ()=>{
    console.log('Listening for request now');
});
