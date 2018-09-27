const express = require('express');
const router = express.Router();

//Item model

const Item = require('../../models/Item');

// @route GET API/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
  Item.find()
  .sort({ date: -1 })
    .then(items => res.json(items)) 
    .catch(err => console.log(err))
});

// @route POST API/items
// @desc Create Items
// @access Public
router.post('/', (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save()
  .then(item => res.json(item))
  .catch(err => console.log(err))
});


module.exports = router;
