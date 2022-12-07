const productData = require("./product.model")


async function create(data) {
    return await productData.create(data);
}
 
async function read(filter, specificField) {
    return await productData.find(filter, specificField);
}

async function updateMany(ProductId, newData) {
    return await productData.updateMany(ProductId, newData);
}
 
async function del(ProductId) {
    return update(ProductId, {isActive : false});
}

module.exports = {del, updateMany, read, create}