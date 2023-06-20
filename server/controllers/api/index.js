const router = require('express').Router();

const bottlecapRoutes = require('./bottlecapRoutes.js');

router.use('/bottlecaps', bottlecapRoutes);

module.exports = router;