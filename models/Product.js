//THe below variables define and utilizes the Sequelize library for object-relational mapping (ORM) to interact with a SQL database. 
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//The Product class extends the Model class provided by Sequelize.
class Product extends Model { }

Product.init(
  {  
    //Each attribute of the product model is defined with its data type, constraints(such as allowNull, primaryKey), and validations(such as isDecimal, isNumeric).
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,

      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        module: "category",
      },
    },
  },
  {
    //The sequelize object is passed to specify the connection to the database, options like timestamps, freezeTableName, underscored, and modelName are provided to configure the behavior of the model in Sequelize.
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);
//Below the module.exports statement exports the Product model, allowing it to be imported and used in other parts of the application.
module.exports = Product;