const mangoose= require('mongoose');

//This schema structure designed for simple user data application 
const userSchema = new mangoose.Schema({
    name: {
        type:String,
        required:[true,'Please enter your name with initial']
    },
    //email id will be unique and non duplicated so i used unuique:true
    email:{
        type:String,
        required:[true,'mail id will be unique and non duplicated'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'create a strong password dont inculde your name in password']
    },
    //phone number will be unique and non duplicated so i used unuique:true
    phoneNo:{
        type:String,
        required:[true, 'enter the phone number with country code'],
        unique:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});
const UserData= mangoose.model('UserData',userSchema);
//export the data for use in other files
module.exports = UserData;
