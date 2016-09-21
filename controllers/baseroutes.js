const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function (req, res) {
  res.render('index', { title: 'Add Email Forwarding', message: 'Hello there!'});
});


module.exports = router;