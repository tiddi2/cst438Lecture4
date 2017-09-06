var http = require('http');

var server = http.createServer(function (request, response) {
    console.log("got a request");
    response.write("hurray");
    response.end();
});

server.listen(8080);


