const { QueryTypes } = require("sequelize");
const Database = require("../utils/Database");

const getUsers = async (req, res) => {
  try {
    const sequelize = await Database();

    const users = await sequelize.query(
      `SELECT id, firstName, lastName, email, password, gender, department.department_name FROM employees LEFT JOIN department ON employees.department_id = department.department_id;`,
      {
        type: QueryTypes.SELECT,
      }
    );

    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

module.exports = getUsers;
