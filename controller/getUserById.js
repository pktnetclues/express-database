const { QueryTypes } = require("sequelize");
const Databse = require("../utils/Database");

const getUserById = async (req, res) => {
  const { id } = req.body;
  try {
    const sequelize = await Databse();
    const result = await sequelize.query(
      `SELECT * FROM users WHERE id = ${id}`,
      {
        type: QueryTypes.SELECT,
      }
    );

    res.json(result);
  } catch (error) {
    console.log("Error Detected", error);
  }
};

module.exports = getUserById;
