var http = require('http');
var dt=require('./myfirstmodule')
http.createServer(function(req,res)
                 {
   res.writeHead(200,{'content-type':'text/html'});
//    res.write("the date is "+dt.myDateTime());
//    res.end('Hello world');
    res.write(req.url);
    res.end();
}).listen(8080);