const express = require ('express')
const router = express.Router();
const SiteController = require('../app/Controller/SiteController')
router.use('/admin',SiteController.admin)
router.use('/',SiteController.index)
module.exports = router
