const Post=require('../models/post');
const User=require('../models/user');
module.exports.create=function(req,res){
        Post.create({
            content: req.body.content,
            user: req.user._id
        },function(err,post){
            if(err){console.log('error in create a post');return;}

            return res.redirect('back');
        });
    }