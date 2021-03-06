var express = require('express');
var router = express.Router();

var ctrlLocations = require('../controllers/locations') ;
var ctrlOthers = require('../controllers/others') ;

/* GET users listing. */
router.get('/', ctrlLocations.homelist);
router.get('/location/:locationid' , ctrlLocations.locationInfo) ;
router.get('/location/:Locationid/review/new' , ctrlLocations.addReview) ;
router.post('/location/:locationid/review/new' , ctrlLocations.doAddReview) ; 

router.get('/about' , ctrlOthers.about) ;

module.exports = router;
