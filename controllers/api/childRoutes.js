const router = require('express').Router();
const Child = require('../../models/Child');

// GET all children
router.get('/', async (req, res) => {
  try {
    const childData = await Child.findAll();
    res.status(200).json(childData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new child
router.post('/', async (req, res) => {
  try {
    const childData = await Child.create({
      child_name: req.body.child_name,
      diet_restrictions: req.body.diet_restrictions,
      medications: req.body.medications,
      other: req.body.other,
      user_id: req.body.user_id,
    });
    res.status(200).json(childData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET one child
router.get('/:id', async (req, res) => {
  try {
    const childData = await Child.findByPk(req.params.id);
    if (!childData) {
      res.status(404).json({ message: 'No child with this id!' });
      return;
    }
    
    res.render('comment', {
      ...childData,
      // ...childData,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a child
router.put('/:id', async (req, res) => {
  try {
    const childData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!childData[0]) {
      res.status(404).json({ message: 'No child with this id!' });
      return;
    }
    res.status(200).json(childData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a child
router.delete('/:id', async (req, res) => {
  try {
    const childData = await Child.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!childData) {
      res.status(404).json({ message: 'No child with this id!' });
      return;
    }
    res.status(200).json(childData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;