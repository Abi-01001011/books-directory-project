const https=require('https');
const server=https.createServer((req,res)=>{
res.statusCode('200')
});
server.listen(8080,'127.0.0.1',()=>{
    console.log('server running on port 8080');
})