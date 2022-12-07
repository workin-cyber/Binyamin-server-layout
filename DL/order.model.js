const mongoose = require("mongoose");
require("./product.model");
require("./user.model");


const orderSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
        unique: true
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
        required: true
    },
    products: [{
        product: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "product",
            required: true
        },
        quantity: {
            type: Number
        },
        finalPrice: {
            type: Number,
            required: true,
            // default: function () { return this.quantity * this.product.price }
        }
    }],
    totalPrice: {
        type: Number
    },
    createDate: {
        type: Date,
        default: Date.now,
        immutable: true
    },
    status: {
        type: String,
        enum: ["active", "shipped", "done"],
        default: "active"
    },
    isActive: {
        type: Boolean,
        default: true
    }

})


const orderData = mongoose.model("order", orderSchema);


module.exports = orderData;