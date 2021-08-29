const express=require('express');
const k=require('./users')
const router =express.Router();
const homecontroller =require('../controllers/home_controllers');
router.use('/users',k);
router.get('/',homecontroller.home);


module.exports=router;