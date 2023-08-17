const EventEmitter = require("events");
const http = require("http");

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

// const myEmitter = new EventEmitter();
const myEmitter = new Sales();


myEmitter.on('newSale', () => {
    console.log('there is a new sales');
});

myEmitter.on('newSale', () => {
    console.log('customer name: j');
});
myEmitter.on('newSale', (item) => {
    console.log("🚀 ~ file: events.js:15 ~ myEmitter.on ~ item:", item)
});

myEmitter.emit('newSale', { stock: 9, name: 'item' });






const server = http.createServer();

server.on("request", (req, res) => {
    console.log("Request received!");
    console.log(req.url);
    res.end("Request received");
});

server.on("request", (req, res) => {
    console.log("Another request 😀");
});

server.on("close", () => {
    console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Waiting for requests...");
});
