const jwt = require("jsonwebtoken");
const { QueryTypes } = require("sequelize");

const sequelize = require("../utils/Database");
const { log } = require("console");

const JWT_SECRET = "uisdw782783dfjkf";

const authenticateUser = async (req, res, next) => {
  // Extract token from the request header
  const token = req.headers.authorization.split(" ")[1];

  log(token);

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: Missing token" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Check if the user exists in the database
    const existingEmployee = await sequelize.query(
      `SELECT email FROM employees WHERE email = '${decoded.email}'`,
      { type: QueryTypes.SELECT }
    );

    if (existingEmployee.length === 0) {
      return res.status(401).json({ error: "Unauthorized: Invalid token" });
    }

    // Attach user information to the request object
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

module.exports = authenticateUser;
