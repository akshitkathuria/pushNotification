const express = require('express');
const router = express.Router();

const adminController = require('../controller/adminController')

router.post('/feed', adminController.addUserFeed);
router.post('/push', adminController.push);

module.exports = router;