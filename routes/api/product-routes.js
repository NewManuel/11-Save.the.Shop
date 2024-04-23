const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Category, Tag],
    });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Products not found!", error });
  }
});

// Get a single product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [Category, Tag],
    });
    if (!product) {
      res.status(404).json({ message: "Product not found!" });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Product not found!", error });
  }
});

// Create a new product
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (req.body.tagIds && req.body.tagIds.length > 0) {
      await ProductTag.bulkCreate(
        req.body.tagIds.map((tag_id) => ({
          product_id: product.id,
          tag_id,
        }))
      );
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: "Creation failed", error });
  }
});

// Update a product by ID
router.put("/:id", async (req, res) => {
  try {
    await Product.update(req.body, { where: { id: req.params.id } });
    if (req.body.tags && req.body.tags.length > 0) {
      await ProductTag.destroy({ where: { product_id: req.params.id } });
      await ProductTag.bulkCreate(
        req.body.tags.map((tag_id) => ({
          product_id: req.params.id,
          tag_id,
        }))
      );
    }
    const product = await Product.findByPk(req.params.id, { include: [Tag] });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Update failed", error });
  }
});

// Delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      res.status(404).json({ message: "Product not found!" });
      return;
    }
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ message: "Product not deleted!", error });
  }
});

module.exports = router;
