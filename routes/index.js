var express = require('express');
var router = express.Router();

router.get('/index', function(req, res) {
  res.send('it works...')
});

module.exports = router;
