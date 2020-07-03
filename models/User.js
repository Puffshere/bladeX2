const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
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
            register_date: {
                type: Date,
                default: Date.now
            }
        }
    ],
});

module.exports = User = mongoose.model('user', UserSchema);