 const JWT = require('jsonwebtoken')


function adminMiddleWare(req, res, next ){
    const token = req.header.authToken
    const decode = JWT.verify(token, process.env.admin_jwt)

    if(decode){
        req.adminId = decode.id;
        next()        
    }else{
        res.status(403).json({
            message : 'You are not signed in '
        })
    }
}

module.exports = {
    adminMiddleWare : adminMiddleWare 
}