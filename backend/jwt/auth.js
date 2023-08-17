const jwt = require('jsonwebtoken');


const jwt_auth = async(req,res,next)=>{
    try {
        const token = await req.headers.authorization.split(" ")[1]
        console.log('token from jwt func ',token)
        const decodedToken = await jwt.verify(token,"MY_SECRET-KEY-FOR_JWT")
        console.log('detoken from jwt func ',decodedToken)

        const user = await decodedToken;
        req.user = user;
        next()
    
    } catch (error) {
        res.status(401).json({
            error:new Error("INVALID REQUEST"),
        })
    }
}


module.exports = jwt_auth;