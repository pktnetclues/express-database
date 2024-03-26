const { QueryTypes } = require("sequelize");
const Database = require("../utils/Database");

const addUser = async (req, res) => {
  const { id, name, email, age, gender } = req.body;

  const user = {
    id,
    name,
    email,
    age,
    gender,
  };

  try {
    const sequelize = await Database();

    const result = await sequelize.query(
      "INSERT INTO `users` (id, name, email, age, gender) VALUES (:id, :name, :email, :age, :gender)",
      {
        replacements: user,
        type: QueryTypes.INSERT,
      }
    );

    res.json(result);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

module.exports = addUser;
