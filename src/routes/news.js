const express = require('express')
const router = express.router()
const NewsController = require('../app/Controller/NewsController')
router.use('/:slug', newController.show)
router.use('/', newController.index)

module.exports = router