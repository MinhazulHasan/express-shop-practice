const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop.controller');

/* GET Users Listening */
router.post('/', shopController.create);
router.get('/', shopController.getAll);
router.get("/:id", shopController.getById);
router.put("/:id", shopController.updateById);
router.delete("/:id", shopController.deleteById);

router.get('/test/:name', (req, res, next) => {
    const name = req.params.name;
    return res.status(200).json({ name: name });
})

module.exports = router;