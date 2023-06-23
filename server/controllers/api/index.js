const router = require('express').Router();

const bottlecapRoutes = require('./bottlecapRoutes.js');
const tagRoutes = require('./tagRoutes.js');

router.use('/bottlecaps', bottlecapRoutes);
router.use('/tags', tagRoutes);

module.exports = router;