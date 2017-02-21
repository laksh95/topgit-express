var express=require('express');
var router=express.Router();
var controller=require('./login.controller');
router.post('/checkUser',controller.checkInfo);
router.post('/submitUser',controller.submitInfo);
router.put('/updateUser',controller.updateInfo);
router.delete('/deleteUser',controller.deleteInfo);
module.exports=router;