const { QueryTypes } = require("sequelize");
const Database = require("../utils/Database");

const getUsers = async (req, res) => {
  try {
    const sequelize = await Database();

    const users = await sequelize.query("SELECT * FROM `users`", {
      type: QueryTypes.SELECT,
    });

    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

module.exports = getUsers;
