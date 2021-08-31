const express=require('express');
const router=express.Router();

const commentsController=require('../controllers/comments_controllers');

router.post('/create',commentsController.create);

module.exports=router;








