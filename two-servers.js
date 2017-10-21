
var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT1, function() {
  console.log("You are just SO nice!!" + " Server listening on: http://localhost:" + PORT1);
});

server.listen(PORT2, function() {
    console.log("You are like, gross...bleh!" + " Server listening on: http://localhost:" + PORT2);
  });