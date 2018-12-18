var express = require('express');
var path = require('path');
var open = require('open');

var port=3000;
var app=express();
app.get('/',function(req,res){
res.sendFile(path.join(__dirname, '../SOURCE/index.html'));
});
app.listen(port,function(err)
{
if(err){
    console.log(err);
}

    open('http://localhost:'+port);

});