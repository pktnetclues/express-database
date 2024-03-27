const { QueryTypes } = require("sequelize");
const Database = require("../utils/Database");

const resgisterEmployee = async (req, res) => {
  const {
    id,
    firstName,
    lastName,
    email,
    password,
    gender,
    hobbies,
    department_id,
  } = req.body;

  try {
    const sequelize = await Database();

    const result = await sequelize.query(
      `INSERT INTO employees (
        id,
        firstName,
        lastName,
        email,
        password,
        gender,
        hobbies,
        department_id,)
        VALUES (${id}, '${firstName}','${lastName}' '${email}', '${password}', '${gender}', '${hobbies}', ${department_id})`,
      {
        type: QueryTypes.INSERT,
      }
    );

    res.json(result);
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

module.exports = resgisterEmployee;
