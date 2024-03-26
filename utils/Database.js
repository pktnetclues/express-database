const Sequelize = require("sequelize");

const sequelize = new Sequelize("users", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const Databse = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database");
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = Databse;
