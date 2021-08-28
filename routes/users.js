const express=require('express');
const router=express.router();
const users_controllers=require('../controllers/users_controllers');
router.get('/profile',users_controllers.profile);

module.exports=router;