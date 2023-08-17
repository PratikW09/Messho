const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema =new mongoose.Schema({
    name : {
        type:String,
        required: [true, "Please provide an name!"],
    
    },
    email:{
        type:String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },
    password:{
        type:String,
        required: [true, "Please provide a password!"],
    unique: false,
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false,
    },
},{timestamps:true})


// //STATIC SIGNUP METHODE
// userSchema.statics.signup = async function(name,email,password){

//     try {
//         const user_exist = await this.findOne({email});

//     if(user_exist){
//         throw Error('EMAIL ALREADY EXISTS')
//     }

//     const salt = await bcrypt.genSalt(10);
//     const hash_pass = await bcrypt.hash(password,salt)

//     const new_user = await this.create({name,email,password:hash_pass})


//     return new_user;
//     } catch (error) {
//         console.log(error)
//     }
    
// }

const User = mongoose.model("User",userSchema);
module.exports = User;
