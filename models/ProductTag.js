//It imports the Model and DataTypes classes from the sequelize library.
const { Model, DataTypes } = require("sequelize");
//It imports the Sequelize instance sequelize from a configuration file.
const sequelize = require("../config/connection");

// It defines the ProductTag class that extends the Model class provided by Sequelize.
class ProductTag extends Model { }

ProductTag.init(
  {
    //It defines the columns of the ProductTag table, including id as the primary key and product_id as a foreign key referencing the product module.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    product_id: {
      type: DataTypes.INTEGER,
      references: {
        module: "product",
      },
    },

  },
  {
    //It specifies the configuration options for the model, such as the Sequelize instance (sequelize), disabling timestamps, freezing the table name, using underscores for column names, and setting the model name to "product_tag".
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

//Below exports the ProductTag model for use in other parts of the application
module.exports = ProductTag;