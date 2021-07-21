const router = require('express').Router();

const pageroutes = require('./pageroutes')
const apiroutes = require('./api')

router.use('/', pageroutes);
router.use('/api', apiroutes);

module.exports = router