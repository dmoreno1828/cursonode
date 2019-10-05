const http=require('http')
const port=5000
const hostname="localhost"

const server=http.createServer(function(req,res){
 res.statusCode=200
 res.setHeader('Content-type','text/plain')
 res.end('Hola mundo')
});

server.listen(port,hostname,function(){
console.log("servidor corriendo")
})
