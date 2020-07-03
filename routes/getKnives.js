const express = require('express');
const router = express.Router();

const User = require('../models/User');

router.post('/', (req, res) => {
    User.findById({ _id: req.body.userId }).then(user => {
        res.json(user);
    });
})


module.exports = router;