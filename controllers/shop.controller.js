const shopService = require('../services/shop.service');

// Insert single shop data
module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    }
    catch(e) {
        console.log(e);
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// Get all Data
module.exports.getAll = async (req, res, next) => {
    try {
        const shop = await shopService.totalData();
        return res.send(shop);
    }
    catch(e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// Get Single data
module.exports.getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const singleShop = await shopService.getById(id);
        res.send(singleShop);
    }
    catch(e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// Update By Id
module.exports.updateById = async (req, res, next) => {
    const id = req.params.id;
    const updateField = req.body;
    try {
        const shop = await shopService.updateShopData(
            { _id: id },
            updateField,
            {
                new: true,
                runValidators: true
            }
        );
        return res.send(shop);
    }
    catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

// Delete Shop
module.exports.deleteById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const deleteShopData = await shopService.deleteSingleShopData({ _id: id });
        res.send(deleteShopData);
    }
    catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}