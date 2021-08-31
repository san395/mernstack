const Post=require('../models/post');
const User=require('../models/user');
const Comment=require('../models/comments');
module.exports.home=function(req,res){
    // Post.find({},function(err,posts){
    //     return res.render('home',{
    //         title: "Codeial | Home",
    //         posts: posts
    //    });
    // });

    Post.find({}).
    populate('user').
    populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    })
    .exec(function(err,posts){
        return res.render('home',{
            title: "Codeial | Home",
            posts: posts
       });
    });
}