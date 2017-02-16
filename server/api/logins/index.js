var express=require('express');
var router=express.Router();
console.log("In Api Users");
var controller=require('./logins.controller.js');
router.post('/userInfo',controller.submitInfo);


module.exports=router;
