var express = require('express');
var router = express.Router();

const answerController=require("../controller/answer")
const deviceInfo=require("../util/Deviceinfo");

/* GET home page. */
router.get('/',answerController.GetQuestion);
router.post("/",answerController.CreateQuestion)
router.put("/",answerController.addAnswer)

module.exports = router;
