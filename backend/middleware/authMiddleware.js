const jwt = require('jsonwebtoken');
const User = require('../models/user');


const requireAuth =async (req,res,next)=>{

    const SECRET="PRATIK_WALALE_SECRET_KEY"
    const {authorization} = req.headers;
    // console.log('from auth ',req.headers);
    console.log('from authersiatuin ',authorization);

    if(!authorization){
        return res.status(401).json({error:'AUTHORIZATION TOKEN IS NECESSARY'});

    }

    const token = authorization.split(' ')[1];
    console.log('token',token);

    try {
        const {_id} = jwt.verify(token,SECRET);

        req.user = await User.findOne({_id}).select('_id');
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({error:'REQUEST IS NOT AUTHERISED'})
    }
}

module.exports = requireAuth;