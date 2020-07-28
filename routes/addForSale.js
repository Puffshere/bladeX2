const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', (req, res) => {
    const { forSale } = req.body;

        const newForSale = new User({
            knives: [
                {
                    forSale: !forSale,
                }
            ]
        });
        newForSale.save()
});

module.exports = router;
