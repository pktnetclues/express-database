const express = require("express");
const Databse = require("./utils/Database");
const getUsers = require("./controller/getUsers");
const addUser = require("./controller/addUser");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/users", getUsers);

app.post("/addUser", addUser);

Databse();
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
