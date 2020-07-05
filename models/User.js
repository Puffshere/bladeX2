const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
            register_date: {
                type: Date,
                default: Date.now
            }
        }
    ],
});

module.exports = User = mongoose.model('user', UserSchema);