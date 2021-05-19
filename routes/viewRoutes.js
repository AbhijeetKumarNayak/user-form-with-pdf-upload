const express = require('express');
const viewsController = require('../controllers/viewController');
const router = express.Router();
router.get('/',viewsController.getpage);
router.post('/createdetail',viewsController.createdetail);

module.exports = router;