const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

// Route functions
const sayWelcome = (req, res) => {
  const phrase = "Welcome to the server";
  const name = req.query.name;
  const content = name ? `${phrase}, ${name}!` : `${phrase}!`;
  res.send(content);
};

const sayGoodbye = (req, res) => {
  const phrase = "We're sorry to see you go";
  const name = req.query.name;
  const content = name ? `${phrase}, ${name}!` : `${phrase}!`;
  res.send(content);
};

const saySomething = (req, res) => {
  const greeting = req.query.greeting;
  const name = req.params.name;

  const content = greeting && name ? `${greeting}, ${name}!` : `${greeting}!`;
  res.send(content);
};

// Routes
app.get("/say/:greeting", saySomething);
app.get("/say/goodbye", sayGoodbye);
app.get("/say/welcome", sayWelcome);

module.exports = app;
