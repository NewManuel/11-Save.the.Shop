//The require function is used to import necessary modules.sequelize is imported from '../config/connection', which contains the Sequelize instance configured to connect to the database.

//Model and DataTypes are imported from the 'sequelize' package.Model is a base class for all models defined using Sequelize, and DataTypes provides various data types that can be used for defining model attributes.
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Below the class Category extends Model { }: This line defines a JavaScript class Category that extends the Model class imported from Sequelize.This allows the Category class to inherit various methods and functionalities provided by Sequelize for interacting with the database.
class Category extends Model { }

//The below Category.init(): This method initializes the Category model with the provided configuration.
Category.init(
  {
    //id - An auto-incrementing integer field that serves as the primary key for the Category table.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //category_name - A string field to store the name of the category.It cannot be null.
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  //sequelize - Specifies the Sequelize instance to use for this model, which is the sequelize instance imported earlier.
  {
    sequelize,
    //timestamps - false: Disables automatic timestamps (createdAt and updatedAt) for this model.
    timestamps: false,
    //freezeTableName - true: Prevents Sequelize from pluralizing the table name.The table name will be 'category'(singular) instead of 'categories'.
    freezeTableName: true,
    //underscored - true: Uses snake_case for column names (e.g., category_name) instead of camelCase.
    underscored: true,
    //modelName - 'category': Specifies the model name to be used in Sequelize.This is used for associations and other operations.
    modelName: 'category',
  }
);

//module.exports = Category; - This line exports the Category model so that it can be imported and used in other files/modules.
module.exports = Category;

