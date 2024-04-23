const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving categories' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving category' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: 'Error creating category' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Category.update(req.body, { where: { id: req.params.id } });
    updated[0] ? res.status(200).json(updated) : res.status(404).json({ message: 'Category not found' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating category' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });
    deleted ? res.status(200).json(deleted) : res.status(404).json({ message: 'Category not found' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting category' });
  }
});

module.exports = router;