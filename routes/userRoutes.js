const express = require("express");
const getUsers = require("../controller/getUsers");
const resgisterEmployee = require("../controller/resgisterEmployee");
const updateUser = require("../controller/updateUser");
const getUserById = require("../controller/getUserById");

const userRoutes = express.Router();

//To add a new user into databse
userRoutes.post("/register", resgisterEmployee);

//To get all the users from database
userRoutes.get("/getUsers", getUsers);

//To get the user from database by id
userRoutes.post("/getUserById", getUserById);

//To Update the existing user form database
userRoutes.post("/updateUser", updateUser);

module.exports = userRoutes;
