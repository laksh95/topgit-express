var express=require('express');
var router=express.Router();
var controller=require('./address.controller');
console.log("address index called");
router.post('/submitAddress',controller.submitAddress);
router.get('/getAddress',controller.getAddress);
router.put('/updateAddress',controller.updateAddress);
router.delete('/deleteAddress',controller.deleteAddress);
module.exports=router;