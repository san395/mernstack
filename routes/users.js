const express=require('express');
const router=express.Router();
const users_controllers=require('../controllers/users_controllers');
router.get('/profile',users_controllers.profile);
router.get('/signup',users_controllers.signUp);
router.get('/signin',users_controllers.signIn);
router.post('/create',users_controllers.create);
router.post('/create-session',users_controllers.createSession);
module.exports=router;