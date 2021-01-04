const express = require('express');
const { first, second, third } = require('../middlewares/middlewares');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ message: 'Hello World!' });
});

router.get('/journey', first, second, third);

module.exports = router;
