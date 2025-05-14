const JWT = require('jsonwebtoken')

function userMiddleWare(req, res, next ){
    const token = req.header.authToken
    const decode = JWT.verify(token, process.env.user_jwt)

    if(decode){
        req.userId = decode.id;
        next()        
    }else{
        res.status(403).json({
            message : 'You are not signed in '
        })
    }
}

module.exports = {
    userMiddleWare : userMiddleWare 
}