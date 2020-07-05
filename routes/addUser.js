const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/', (req, res) => {
  const { firstname, lastname, email, password, brand, model, price, steel, handleMaterial, bladeShape } = req.body;

//Simple validation
if (!firstname || !lastname || !email || !password) {
return res.status(400).json({ msg: 'Please enter all fields.' });
}

//Check for existing user
User.findOne({ email }).then(user => {
if (user) return res.status(400).json({ msg: 'User already exists' });

const newUser = new User({
    firstname,
    lastname,
    email,
    password,
    knives: [
      {
        brand: brand,
        model: model,
        price: price,
        steel: steel,
        handleMaterial: handleMaterial,
        bladeShape: bladeShape,
      }
    ]
});
newUser.save()
  });
});

module.exports = router;