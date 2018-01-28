const router = require('express').Router();
const { Color } = require('../db/models');

module.exports = router;

// GET api/channels
router.get('/', function (req, res, next) {
  Color.findAll()
    .then(colors => res.json(colors))
    .catch(next);
});