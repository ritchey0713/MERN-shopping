const express = require('express');
const router = express.Router();

//Item model

const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/');


module.exports = router;
