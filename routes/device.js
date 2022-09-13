var express = require('express');
var router = express.Router();

const deviceController=require("../controller/deviceController")


/* GET home page. */
router.get('/',deviceController.Getdevice);


module.exports = router;
