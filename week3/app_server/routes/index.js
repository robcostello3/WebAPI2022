var express = require('express')
var router = express.Router()
var ctrlLocations = require('../controller/locations')

router.get('/', ctrlLocations.home)
router.get('/contact', ctrlLocations.contact)
router.get('/about', ctrlLocations.about)
router.get('/profile', ctrlLocations.profile)
router.get('/dataTest', ctrlLocations.dataTest)

router.post('/testdata')

module.exports = router