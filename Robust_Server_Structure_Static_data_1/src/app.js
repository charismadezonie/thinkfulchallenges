const express = require("express");
const app = express();

const users = require("./data/users-data");
const states = require("./data/states-data");

// TODO: return an array of users from /users in form of { data: Array }
app.use("/users", (req, res) => {
  res.json({ data: users });
});

// TODO: return a single user by id from /users/:userId in form of { data: Object }

// TODO: return all states from /states in the form of { data: Array }

// TODO: Return a single state from /states/:stateCode in the form of { data: { stateCode: String, name: String } }

// TODO: add not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// TODO: Add error handler
app.use((error, request, response, next) => {
  response.send(error);
});

module.exports = app;
