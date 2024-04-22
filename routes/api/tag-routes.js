//Require Dependencies - The file requires the necessary dependencies, including Express and models representing Tags, Products, and Product Tags.
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

//GET '/': Retrieves all tags from the database along with associated products. 
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ message: "Tags not found!" })
    console.log(err);
  }
});
// GET '/:id': Retrieves a specific tag by its ID from the database along with associated products.
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    })
    if (!tagData) {
      res.status(404).json({ message: "Tag is not found with this id." });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json({ message: "Tag is not found" });
  };
});
// POST '/': Creates a new tag based on the request body.
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json({ message: "Tag creation failed" });
  }
});
// PUT '/:id': Updates an existing tag with the specified ID based on the request body.
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json({ message: "The tag creation was failed " });
  }
});
//DELETE '/:id': Deletes a tag with the specified ID from the database.
//Each route uses asynchronous functions to handle requests. Inside the try block, the relevant operation (e.g., fetching, creating, updating, or deleting) is performed using Sequelize ORM methods. If successful, the server responds with the appropriate HTTP status code and JSON data. If an error occurs, the server responds with an error message and the corresponding HTTP status code.  
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });

    deleted
      ? res.status(200).json({ message: "Tag deleted successfully" })
      : res.status(404).json({ message: "No tag was found with this id" });
  } catch (err) {
    res.status(500).json({ message: "Tag deletion has failed" });
  }
});

//The router object containing all defined routes is exported to be used in the main Express application file.
module.exports = router;