const User =require('../models/user');

module.exports.profile=function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id,function(err,user){
            if(err){console.log("Error in getting user data");return}
            if(user){
            res.render('users',{
                user: user
            });
        }else{
        res.redirect('/users/signin');
        }
        });
    }else{
        return res.redirect('/users/signin');
    }
}

module.exports.signUp=function(req,res){
    return res.render('user_signup',{
        title: "Codeial |Sign Up"
    })        
}

module.exports.signIn=function(req,res){
    return res.render('user_signin',{
        title: "Codeial |Sign In"
    })        
}


module.exports.create=function(req,res){
      if(req.body.password!=req.body.confirmpassword){
          return res.redirect('back');

      }
      User.findOne({email: req.body.email},function(err,user){
          if(err){console.log('error in finding user in signing up');return}

          if(!user){
              User.create(req.body,function(err,user){
                  if(err){console.log("Error in signing up");return}

                  return res.redirect('/users/signin');
              })
          }else{
              return res.redirect('back');
          }
      });
}

module.exports.createSession=function(req,res){
    User.findOne({email: req.body.email},function(err,user){
        if(err){console.log('error in finding user in signing up');return}

        if(user){
           if(user.password!=req.body.password){
               return res.redirect('back');
           }else{
               res.cookie('user_id',user.id);
               return res.redirect('/users/profile');
           }
        }else{
            return res.redirect('back');
        }

});
}