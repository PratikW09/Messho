const User = require("../models/user");
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');



// JWT CREATE TOKEN FUNCTION

 const SECRET="PRATIK_WALALE_SECRET_KEY"

const createToken =(_id)=>{
    
    return jwt.sign({_id},SECRET,{expiresIn:'1d'});
}

// SIGNUP CONTROLLER
const signupUser = async (req,res)=>{
    // res.json({msg:"signup user"})
    const {name,email,password}= req.body;
    console.log('from signup function controller ',req.body);
    try {
        if(!email || !password || !name){
            throw Error("ALL INFO MUST BE FIELD");
        }

        if(!validator.isEmail(email)){
            throw Error("EAMIL IS NOT VALID");
        }
        if(!validator.isStrongPassword(password)){
            throw Error("PASSWORD IS NOT STRONG ENOUGH");
        }
        const user_exist = await User.findOne({email});

        if(user_exist){
            throw Error('EMAIL ALREADY EXISTS')
        }
    
        const salt = await bcrypt.genSalt(10);
        const hash_pass = await bcrypt.hash(password,salt)
    
        const new_user = await User.create({name,email,password:hash_pass});

        //CREATE THE TOKEN BY THE CREATETOKEN FUNCTION
        const token = createToken(new_user._id);
        console.log('token ',token);
    
        console.log('when user is save',email)
        res.status(200).json({new_user,token})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error:error.message})
    }

}

// LOGIN CONTROLLER

const loginUser = async(req,res)=>{
    // res.json({msg:"login user"});
    try {
        console.log("first ",req.body)
        const {email,password} = req.body;

        if(!email || !password){
            throw Error('ALL FIELD IS NECCESSARY');
        }

        const user_email_exit = await User.findOne({email});
        console.log(user_email_exit);

        if(!user_email_exit){
            throw Error('EMAIL NOT FOUND..PLEASE REGISTER FIRST ');
        }

        const match_pass = await bcrypt.compare(password, user_email_exit.password);

        if(!match_pass){
            throw Error('PASSWORD NOT MATCHED ..ENTER THE CORRECT PASSWORD');
        }

        

        //CREATE THE TOKEN 
        const token = createToken(user_email_exit._id);
        res.status(200).json({email,token,user_email_exit})

    } catch (error) {
        console.log("error",error.message)
        res.status(400).json({error:error.message})
        
    }
    

}

module.exports ={signupUser,loginUser};