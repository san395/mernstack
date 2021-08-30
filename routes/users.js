const express=require('express');
const passport=require('passport');
const router=express.Router();
const users_controllers=require('../controllers/users_controllers');
router.get('/profile',users_controllers.profile);
router.get('/signup',users_controllers.signUp);
router.get('/signin',users_controllers.signIn);
router.post('/create',users_controllers.create);

//we use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/signin'},
), users_controllers.createSession);
module.exports=router;