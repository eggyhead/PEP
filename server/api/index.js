const router = require('express').Router();
module.exports = router;

router.use('/colors', require('./colors'));
router.use('/categories', require('./categories'));

router.use((req, res, next) => {
  res.status(404).send('Not found');
});