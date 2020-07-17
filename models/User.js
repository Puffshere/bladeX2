const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // activated_token: {
    //     type: String, default: ""
    // },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    knives: [
        {
            brand: {
                type: String
            },
            model: {
                type: String
            },
            price: {
                type: Number
            },
            steel: {
                type: String
            },
            handleMaterial: {
                type: String
            },
            bladeShape: {
                type: String
            },
            allKnives: {
                type: Boolean,
                default: true
            },
            forSalePrice: {
                type: Number
            },
            forSale: {
                type: Boolean,
                default: false
            },
            flipper: {
                type: Boolean,
                default: false
            },
            assisted: {
                type: Boolean,
                default: false
            },
            slipJoint: {
                type: Boolean,
                default: false
            },
            edc: {
                type: Boolean,
                default: false
            },
            wishList: {
                type: Boolean,
                default: false
            },
            id: {
                type: Number
            },
            userId: {
                type: Number
            },
            automatic: {
                type: Boolean,
                default: false
            },
            frontFlipper: {
                type: Boolean,
                default: false
            },
            thumbStud: {
                type: Boolean,
                default: false
            },
            fixedBlade: {
                type: Boolean,
                default: false
            },
            register_date: {
                type: Date,
                default: Date.now
            }
        }
    ],
});

module.exports = User = mongoose.model('user', UserSchema);
