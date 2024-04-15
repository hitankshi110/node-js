const express = require('express')
const homepage = require('../Controller/UserController')
const router = express.Router()


router.get('/homepage', homepage)

module.exports = router;
