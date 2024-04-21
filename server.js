//Importing Dependencies
//express - The line of code below imports the Express.js framework, which simplifies the process of building web servers and APIs in Node.js.
const express = require('express');
//routes - The variable below imports the routes defined for the application. Routes handle incoming HTTP requests and define how the server should respond to them.
const routes = require('./routes');
//sequelize - The variable below imports Sequelize, an ORM (Object-Relational Mapping) library for Node.js, which simplifies interacting with databases.
const sequelize = require('./config/connection');
//Creating the Express App
//app - the line of code below creates an instance of the Express application, which will be used to define routes and configure middleware.
const app = express();
//PORT - This sets the port number for the server. It either uses the value of the PORT environment variable or defaults to port 3001.
const PORT = process.env.PORT || 3001;

// Middleware Setup
//express.json() This middleware parses incoming JSON requests and makes the JSON data available on req.body property of the request object.
app.use(express.json());
//express.urlencoded({ extended: true }) - This middleware parses incoming URL - encoded data(form data) and makes it available on req.body.
app.use(express.urlencoded({ extended: true }));
//app.use(routes) - This sets up the application to use the routes defined in the imported routes file.
app.use(routes);
// Starting the Server
//app.listen() - This starts the server and makes it listen for incoming connections on the specified port.The callback function passed to app.listen() logs a message to the console indicating that the server is listening on the specified port.
app.listen(PORT, () => {
  console.log(`Application listening on port' ${PORT}!`);
});