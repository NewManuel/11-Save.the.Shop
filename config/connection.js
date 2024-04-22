//require("dotenv").config();: This line loads the dotenv module and configures it to read environment variables from a .env file in the root directory of the project. This allows sensitive configuration data to be stored in environment variables rather than hardcoding them into the code.
require("dotenv").config();

//const Sequelize = require("sequelize");: This line imports the Sequelize library, which is an Object-Relational Mapping (ORM) tool for Node.js, used for interacting with SQL databases.
const Sequelize = require("sequelize");
//const sequelize = process.env.JAWSDB_URL ? ... : ...;: This line initializes a Sequelize instance named sequelize.It checks if the JAWSDB_URL environment variable is set.If it is set, it uses the provided URL to connect to the database.If not, it falls back to using other environment variables (DB_NAME, DB_USER, and DB_PW) to connect to a local MySQL database.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: "localhost",
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true,
    },
  });

//module.exports = sequelize; - This line exports the configured Sequelize instance(sequelize) so that it can be imported and used in other files within the project.
module.exports = sequelize;
