const express= require('express');
const app = express();
const port = 8000;
const cookieParser = require('cookie-parser');

const db = require('./config/mongoose');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));

// use express router
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.set('views','./views');
app.listen(port,function(err){
      if(err){
          console.log(`Error: ${err}`);
      }else{
    console.log(`server is running on port : ${port}`);
      }  
});