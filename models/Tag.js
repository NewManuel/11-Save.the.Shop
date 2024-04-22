//Below lines of code imports the necessary modules from Sequelize and the connection configuration file.
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

// The Tag class extends the Sequelize Model class.
class Tag extends Model { }

//Inside the Tag class definition, the init() method is used to define the columns of the Tag model.
Tag.init(
  {
    //Two columns are defined: "id" and "tag_name".The "id" column is of type INTEGER, is not allowed to be null, is the primary key, and auto- increments.The "tag_name" column is of type STRING.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    tag_name: {
      type: DataTypes.STRING,
  },
  {
    //The init() method also receives an options object where the sequelize property is set to the sequelize instance, indicating the database connection. Other options like timestamps, freezeTableName, underscored, and modelName are also provided.
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

//the Tag model is exported from the file for use in other parts of the application.
module.exports = Tag;