var http = require("http")

http.createServer(function(request,response){
response.writeHead(200, {"content-type":"text/plain"})
response.end("welcome to Web API for Games")
}).listen(3000)

console.log("Connected to port 3000")