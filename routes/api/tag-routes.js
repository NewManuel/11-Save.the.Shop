const router = require('express').Router();
const { Tag } = require('../../models');

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll();
    res.status(200).json(tagData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve tags" });
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(201).json(tagData);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Failed to create tag" });
  }
});

// PUT update a tag by id
router.put('/:id', async (req, res) => {
  try {
    const [rowsAffected] = await Tag.update(req.body, { where: { id: req.params.id } });
    if (rowsAffected > 0) {
      res.status(200).json({ message: "Tag updated successfully" });
    } else {
      res.status(404).json({ message: "No tag found with this id" });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Failed to update tag" });
  }
});

// DELETE a tag by id
router.delete('/:id', async (req, res) => {
  try {
    const rowsAffected = await Tag.destroy({ where: { id: req.params.id } });
    if (rowsAffected > 0) {
      res.status(200).json({ message: "Tag deleted successfully" });
    } else {
      res.status(404).json({ message: "No tag found with this id" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete tag" });
  }
});

module.exports = router;