const Shop = require('../models/Shop.model');

// Insert a shop data
module.exports.create = shop => {
    return Shop.create(shop);
}

// Get all shop data
module.exports.totalData = () => {
    return Shop.find();
}

// Get single shop Data
module.exports.getById = (shopId) => {
    return Shop.findById(shopId);
}

//update shop data
module.exports.updateShopData = (updateId, updatedField, validators) => {
    return Shop.findOneUpdate(updateId, updatedField, validators);
}

// Delete Shop
module.exports.deleteSingleShopData = (shop) => {
    return Shop.findOneAndDelete(shop);
}