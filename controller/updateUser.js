const { QueryTypes } = require("sequelize");
const Database = require("../utils/Database");

const updateUser = async (req, res) => {
  const { id, name, email, age, gender } = req.body;

  try {
    const sequelize = await Database();

    const result = await sequelize.query(
      `UPDATE users SET name = '${name}', email = '${email}', age = ${age}, gender = '${gender}' WHERE id = ${id}`,
      { type: QueryTypes.UPDATE }
    );

    res.json(result);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

module.exports = updateUser;
