var express=require('express');
var router=express.Router();
var controller=require('./address.controller');
console.log("address index called");
router.post('/submitAddress',controller.submitAddress);

module.exports=router;