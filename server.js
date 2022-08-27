const express = require("express");
const app = express();
const path = require("path");

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/login", (request, response) => {
  response.send("login");
});

app.listen(3000);
console.log("server is running!!");
