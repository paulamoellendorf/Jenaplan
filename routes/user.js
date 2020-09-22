const express = require('express');
const router = express.Router();
const User= require('../models/User');

router.get('/', (req, res) => {

  User.find()
  // .populate('Student')
    .then(User=> {
      res.status(200).json(User);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;