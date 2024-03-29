const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const sequelize = require("./utils/Database");
const employeesRoutes = require("./routes/employeesRoutes");

const app = express();

// Replace bodyParser with specific middleware functions

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/public/assets",
  express.static(path.join(__dirname, "public", "assets"))
);

app.use(employeesRoutes);

sequelize;
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
