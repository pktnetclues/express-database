const express = require("express");
const employeesRoutes = express.Router();

const resgisterEmployee = require("../controllers/resgisterEmployee");
const getEmployeeById = require("../controllers/getEmployeeById");
const updateEmployee = require("../controllers/updateEmployee");
const deleteEmployee = require("../controllers/deleteEmployee");
const loginEmployee = require("../controllers/loginEmployee");
const getEmployees = require("../controllers/getEmployees");
const authenticateUser = require("../middleware/authMiddleware");
const profilePicUploadMiddleware = require("../middleware/profilePicUploadMiddleware");

employeesRoutes.post(
  "/register",
  profilePicUploadMiddleware,
  resgisterEmployee
);
employeesRoutes.post("/login", loginEmployee);

employeesRoutes.get("/getEmployees", authenticateUser, getEmployees);
employeesRoutes.post("/getEmployeeById", authenticateUser, getEmployeeById);

employeesRoutes.post("/updateEmployee", authenticateUser, updateEmployee);
employeesRoutes.post("/deleteEmployee", authenticateUser, deleteEmployee);

module.exports = employeesRoutes;
