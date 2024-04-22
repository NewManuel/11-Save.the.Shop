//Import Dependencies - The file imports the necessary modules, including Express.js and models representing products, categories, tags, and product - tag associations.
const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

//GET '/' - This route below retrieves all products from the database, including their associated categories and tags.If successful, it responds with a JSON array of products.If an error occurs, it returns a 500 status code with an error message.
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag }],
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Products not found!" });
  }
});
//GET '/:' id: The route below retrieves a specific product by its ID from the database, including its associated category and tags.If the product is found, it responds with the product object.If not found, it returns a 404 status code with a message.
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });
    !product
      ? res.status(404).json({ message: "Product not found!" })
      : res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Product not found!" });
  }
});
//POST '/:' The route below creates a new product in the database based on the request body.It also associates any provided tags with the product.If successful, it responds with the created product object.If there's an error, it returns a 400 status code with an error message.
router.post("/", (req, res) => {
  Product.create(req.body)
    .then((product) => {
      if (req.body.tagIds.length) {
        const productTagIds = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIds);
      }
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      res.status(400).json({ message: "Creation failed", error: err });
    });
});
//PUT '/:' id: This route updates an existing product with the provided ID in the database based on the request body.It also updates the associated tags.If successful, it responds with the updated product object.If there's an error, it returns a 500 status code with an error message.
router.put("/:id", async (req, res) => {
  try {
    await Product.update(req.body, { where: { id: req.params.id } });
    if (req.body.tags && req.body.tags.length > 0) {
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id },
      });
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tags
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tags.includes(tag_id))
        .map(({ id }) => id);
      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Tag }],
    });
    return res.json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});
//DELETE '/:' id: This route deletes a product with the provided ID from the database.If the product is deleted successfully, it responds with a success message.If the product doesn't exist, it returns a 404 status code with a message. If there's an error, it returns a 500 status code with an error message.
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    !deleted
      ? res.status(404).json({ message: "id not found" })
      : res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json({ message: "Product not deleted!", error: err });
  }
});

//This line below exports the router object, which contains all the defined routes, so it can be used in other parts of the application. 
module.exports = router;