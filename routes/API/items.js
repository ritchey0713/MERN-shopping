const express = require('express');
const router = express.Router();

//Item model

const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (request, response) => {
  Item.find()
  .sort({ date: -1 })
    .then(items => response.json(items))
    .catch(err => console.log(err))
});

// @route POST api/items
// @desc Create A Item
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
  .then(item => res.json(item))
  .catch(err => console.log(err))
});

// @route DELETE api/items
// @desc Delete A Item
// @access Public
router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove()
    .then(() => res.json({ success: true})))
    .catch(err => res.status(404).json({success: false }))
    })




module.exports = router;
