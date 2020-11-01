var express = require("express");
var server =  express();
var router = require("./router");

server.use(express.static("public"));
server.use("/",router);

server.listen(3000);

 