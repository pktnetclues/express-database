const express = require("express");
const bodyParser = require("body-parser");

const Databse = require("./utils/Database");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use(userRoutes);

async function server() {
  await Databse();
  app.listen(4000, () => {
    console.log("Server is running on port 4000");
  });
}

server();
