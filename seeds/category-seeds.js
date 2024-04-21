//Importing the Category Model - The first line imports the Category model from the '../models' directory.This assumes that there's a file named 'Category.js' or similar in the 'models' directory exporting the Category model.
const { Category } = require('../models');
//Category Data - Next, an array named categoryData is defined. This array contains objects, each representing a category with a 'category_name' property. 
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];
//Seed Categories Function - Here the seedCategories function is defined.This function uses the Category model to bulk create categories based on the data provided in the categoryData array.The Category model's bulkCreate method is used to efficiently insert multiple records into the database at once.
const seedCategories = () => Category.bulkCreate(categoryData);

//This seedCategories function is exported from this file. This makes it accessible for use in other parts of the application, such as a script for seeding initial data into the database.
module.exports = seedCategories;