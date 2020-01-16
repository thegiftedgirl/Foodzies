const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');

router.get('/new', recipesCtrl.new);
router.post('/', recipesCtrl.new);

module.exports = router;

