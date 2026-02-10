const EventEmitter = require("events");
const http = require("http");

class sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new sales();

myEmitter.on("new sale", () => {
  console.log("There was a new sale! ");
});

myEmitter.on("new sale", () => {
  console.log("Name: John ");
});

myEmitter.on("new sale", (stock) => {
  console.log(`there are now ${stock} emitters on stock`);
});

myEmitter.emit("new sale", 9);

/////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request recieved");
  res.end("Request recieved");
});

server.on("request", (req, res) => {
  console.log("Another request :D ");
});

server.close("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for requests...");
});
