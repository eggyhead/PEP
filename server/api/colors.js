const router = require('express').Router();
const { Color } = require('../db/models');

module.exports = router;

// GET api/colors
router.get('/', function (req, res, next) {
  Color.findAll()
    .then(colors => res.json(colors))
    .catch(next);
});

router.get('/greys', function(req, res, next) {
  Color.findAll({
    where: {
      colorId: {$gte: 231}
    }
  })
  .then(greys => res.json(greys))
  .catch(next);
});


  router.get('/:colorId', function(req, res, next) {
    Color.findOne({
      where: {
        colorId: req.params.colorId
      }
    })
    .then(color => res.json(color))
    .catch(next);
  })
