const router = require('express').Router();

const paragraph = require('./paragraph')
const user = require('./user')

router.use('/paragraph', paragraph);
router.use('/user', user);

module.exports = router