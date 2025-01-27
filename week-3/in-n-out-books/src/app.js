/* Steve Culmer
27 jan 25
app.js
build web Server

node: executes your code => like a kitchen with all tools (cooker, knives) that you cook where or in which your instructions will be executed
javascript: (code) / ingredients and instruction/recipe you follow to make your meal
*/
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
