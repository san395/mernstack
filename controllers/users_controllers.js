const User =require('../models/user');

module.exports.profile=function(req,res){
    res.render('users',{
         title: "users"
    });
}

module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_signup',{
        title: "Codeial |Sign Up"
    })        
}

module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
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

                  return res.redirect('/');
              })
          }else{
              return res.redirect('back');
          }
      });
}

module.exports.createSession=function(req,res){
    return res.redirect('/');
}

module.exports.destroySession=function(req,res){
    req.logout();

    return res.redirect('/');
}