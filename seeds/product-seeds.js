//Importing Dependencies
//The first construct imports the Product model from the '../models' directory.
const { Product } = require('../models');
// Defining Product Data - The productData array contains objects, each representing a product. Each product object has properties such as product_name, price, stock, and category_id. These properties correspond to the columns in the product table.
const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];
// Defining the seedProducts Function - Here the seedProducts function is defined to bulk-create products in the database using the Product.bulkCreate method provided by Sequelize. This function calls Product.bulkCreate with the productData array as its argument.This method asynchronously creates multiple instances of the Product model based on the data provided.
const seedProducts = () => Product.bulkCreate(productData);
// const seedProducts = () => Product.bulkCreate(productData); seedProducts function is exported from the module.This allows other parts of the application to import and execute this function to seed the database with product data.
module.exports = seedProducts;