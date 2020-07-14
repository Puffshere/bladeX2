const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.post('/', (req, res) => {
  const { firstname, lastname, email, password, brand, model, price, steel, handleMaterial, bladeShape } = req.body;

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

module.exports = router;
