//Imports - This file is importing functions from other files(category - seeds.js, product - seeds.js, tag - seeds.js, and product - tag - seeds.js) that are responsible for seeding categories, products, tags, and product tags into the database, respectively.It also imports sequelize, which is an ORM(Object - Relational Mapping) for Node.js that provides easy access to databases like MySQL, PostgreSQL, SQLite, etc.
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');
const sequelize = require('../config/connection');
const seedAll = async () => {
  //Database Synchronization - This script uses sequelize.sync({ force: true }) to synchronize the database schema.The { force: true } option means that it will drop all tables in the database and re - create them based on the models defined in the Sequelize ORM.This effectively clears the database and resets it to its initial state.
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  //Seeding Data - After synchronizing the database, the script sequentially calls functions to seed categories, products, tags, and product tags into the database using the imported functions.
  //Logging - The script logs messages to the console to indicate the progress of the seeding process.
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');
  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');
  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  //This script exits the Node.js process with a status code of 0, indicating successful execution.
  process.exit(0);
};

//The seedAll() function is invoked at the end of the script to start the seeding process.
seedAll();