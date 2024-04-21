//Importing Required Module
//This line below imports the Tag model from the../ models directory.This model likely represents a table in the database where tags are stored.
const { Tag } = require('../models');
//Defining Tag Data
//The array  below for tagData contains objects, each representing a tag that needs to be seeded into the database. Each object has a tag_name property representing the name of the tag.
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];
//Seeding Function
//This function below for seedTags uses Sequelize's bulkCreate method to insert multiple records into the Tag table in the database. It takes the tagData array as its argument, which contains the data to be inserted.
const seedTags = () => Tag.bulkCreate(tagData);

//Exporting the Seeding Function
//The seedTags function is exported from this module, presumably to be used elsewhere in the application, such as in a script for seeding the database with initial data.
module.exports = seedTags;
