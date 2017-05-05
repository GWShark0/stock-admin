const express = require('express');
const router = express.Router();
const imageService = require('../service/imageService');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/images', imageService.getAllImages);
router.get('/api/images/:id', imageService.getSingleImage);

module.exports = router;
