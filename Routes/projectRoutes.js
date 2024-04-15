const express = require('express')
const {homepage,Blog,contactus,AboutUs,Services} = require('../Controller/projectController')
const router = express.Router()

router.get('/homepage', homepage)
router.get('/Blog', Blog)
router.get('/contactus', contactus)
router.get('/Aboutus', AboutUs)
router.get('/Services', Services)


module.exports = router;