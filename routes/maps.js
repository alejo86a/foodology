var express = require('express');
var router = express.Router();
var mapsCtrl = require('../controllers/mapsCtrl')

/* GET users listing. */
router.post('/list-position/:deliverycompany', mapsCtrl.listPositions);
router.post('/list', mapsCtrl.listPositions);

module.exports = router;
