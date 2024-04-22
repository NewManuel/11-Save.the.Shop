//These below variables are setting up routes for an Express.js application.It imports route handlers for categories, products, and tags from separate files(category - routes.js, product - routes.js, and tag - routes.js, respectively).
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

//The router.use() method is then used to define middleware functions for each route. Each route is mounted under a specific base URL: /categories, /products, and /tags. 
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

//The router object, which contains all the defined routes, is exported to be used by the main Express application. 
module.exports = router;