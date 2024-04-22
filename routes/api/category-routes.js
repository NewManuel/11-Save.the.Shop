
const router = require('express').Router();
const { Category, Product } = require('../../models');

//GET '/': Retrieves all categories from the database along with their associated products.Responds with a JSON object containing the categories.If an error occurs, it responds with a status code of 500 and a message indicating the error.
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'not found!' });
  }
});
//GET '/:id': Retrieves a specific category by its ID from the database along with its associated products.If the category with the provided ID does not exist, it responds with a status code of 404 and a message indicating that the ID was not found.If an error occurs, it responds with a status code of 500 and a message indicating the error.
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
    if (!category) {
      res.status(404).json({ message: 'id not found' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'not found!' });
  }
});
//POST '/': Creates a new category using the data provided in the request body. Responds with a JSON object containing the newly created category. If the creation fails, it responds with a status code of 400 and a message indicating the failure.
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: 'creation failed' });
  }
});
//PUT '/:id': Updates an existing category with the provided ID using the data provided in the request body. If the update is successful, it responds with a JSON object containing the updated category. If the category with the provided ID does not exist, it responds with a status code of 404 and a message indicating that the ID was not found. If an error occurs, it responds with a status code of 500 and a message indicating the error. 
router.put('/:id', async (req, res) => {
  try {
    const updated = await Category.update(req.body, { where: { id: req.params.id } });
    !updated[0] ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'update failed' });
  }
});
//DELETE '/:id': Deletes a category with the provided ID from the database. If the deletion is successful, it responds with a JSON object containing the number of deleted rows. If the category with the provided ID does not exist, it responds with a status code of 404 and a message indicating that the ID was not found. If an error occurs, it responds with a status code of 500 and a message indicating the error.
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });
    !deleted ? res.status(404).json({ message: 'id not found' }) : res.status(200).json(deleted);
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

//This the router is exported to be used in other parts of the application.
module.exports = router;