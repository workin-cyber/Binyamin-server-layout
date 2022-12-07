const orderData = require("./order.model")


async function create(data) {
    return await orderData.create(data);
}

async function read(filter, proj) {
    return await orderData
        .find(filter, proj)
        .populate('userId', 'email permission')
        .populate('products.product');
}

async function updateOne(orderId, newData) {
    return await orderData.findOneAndUpdate(orderId, newData, { new: true });
}

async function updateMany(orderId, newData) {
    return await orderData.updateMany(orderId, newData);
}

async function del(orderId) {
    return update(orderId, { isActive: false });
}

module.exports = { del, updateOne, updateMany, read, create }





//   select * from table
// where x in (select id from table b)