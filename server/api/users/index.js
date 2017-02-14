var express=require('express');
var router=express.Router();
console.log("In Api Users");
var controller=require('./users.controller.js');
router.post('/',controller.submitInfo);


module.exports=router;
