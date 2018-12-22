var http = require('http');
var file=require('fs');
http.createServer(function(req,res)
                 {
    file.readFile('htmlfile1.html',function(err,data)
                  {
         res.writeHead(200,{'content-type':'text/html'});
         res.write(data);
    res.end();
    });
   
}).listen(8080);