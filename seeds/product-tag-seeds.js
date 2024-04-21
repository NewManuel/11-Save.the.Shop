//Importing Dependencies
//This line imports the ProductTag model from the../ models directory.The ProductTag model likely represents the association table between products and tags in your database.
const { ProductTag } = require('../models');
//Product Tag Data - The line below, productTagData is an array containing objects, each representing an association between a product and a tag.Each object has two properties: product_id and tag_id, which specify the IDs of the associated product and tag in the database.
const productTagData = [
  {
    product_id: 1,
    tag_id: 6,
  },
  {
    product_id: 1,
    tag_id: 7,
  },
  {
    product_id: 1,
    tag_id: 8,
  },
  {
    product_id: 2,
    tag_id: 6,
  },
  {
    product_id: 3,
    tag_id: 1,
  },
  {
    product_id: 3,
    tag_id: 3,
  },
  {
    product_id: 3,
    tag_id: 4,
  },
  {
    product_id: 3,
    tag_id: 5,
  },
  {
    product_id: 4,
    tag_id: 1,
  },
  {
    product_id: 4,
    tag_id: 2,
  },
  {
    product_id: 4,
    tag_id: 8,
  },
  {
    product_id: 5,
    tag_id: 3,
  },
];
//Seed Function - The below function seedProductTags uses Sequelize's bulkCreate method to insert multiple rows of data into the ProductTag table (or its equivalent) in the database. It takes the productTagData array as input and creates records in the database based on the objects in the array.
const seedProductTags = () => ProductTag.bulkCreate(productTagData);

//Exporting the Seed Function - The seedProductTags function is exported from this file, making it accessible for use in other parts of your application, such as a script that populates the database with initial data.
module.exports = seedProductTags;
