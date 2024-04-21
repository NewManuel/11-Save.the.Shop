//Require Dependencies - Here the requires brings in the express module and sets up a router using express.Router().This router will handle the incoming HTTP requests and direct them to the appropriate route handlers.
const router = require('express').Router();
//Require API Routes - this line of code requires the API routes from another file or directory named api /.These API routes likely contain the logic for handling various API endpoints.
const apiRoutes = require('./api/');

//Below the line of code uses the router.use() method to mount the API routes at a specific path, in this case, /api. This means that any requests to paths starting with /api will be forwarded to the apiRoutes handler.
router.use('/api', apiRoutes);
//Then this line sets up a default route handler using router.use() without specifying a path. This means that for any request that doesn't match the /api path, Express will execute this handler. In this case, it sends back a simple HTML response indicating that the route is incorrect.
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

//Below this line exports the configured router so that it can be imported and used in other parts of the application. 
module.exports = router;