const http = require("http");
const express = require("express");
const app = express();
const path = require("path");
const webSocket = require("ws");

const server = http.createServer(app);

const wss = new webSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("Connection established");
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
