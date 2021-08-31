const express= require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
app.use(express.urlencoded());

app.use(express.static('./assets'));


app.set('view engine','ejs');
app.set('views','./views');

//mongo store is used to store the session cookies in db
app.use(session({
  name: 'codeial',
  secret: 'blahsomething',
  saveUninitialized: false,
  resave : false,
  cookie: {
    maxAge: (1000*60*100)
  },

}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
app.use('/',require('./routes'));

app.listen(port,function(err){
      if(err){
          console.log(`Error: ${err}`);
      }else{
    console.log(`server is running on port : ${port}`);
      }  
});