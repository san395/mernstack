const express=require('express');
const router=express.Router();
const passport=require('../config/passport-local-strategy');
const commentsController=require('../controllers/comments_controllers');

router.post('/create',passport.checkAuthentication,commentsController.create);

module.exports=router;








