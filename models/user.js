const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email :{
        type: String,
        required =true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name:{
        type: String,
        reuired: true
    },
    timestamps:true
    
});

const User =mongoose.model('User',userSchema);
module.exports =User;