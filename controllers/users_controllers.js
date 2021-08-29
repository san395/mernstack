module.exports.profile=function(req,res){
    res.render('users',{
         title: "users"
    });
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

//will save database of signup later ,will do authentication later

module.exports.create=function(req,res){

}

module.exports.createSession=function(req,res){

}