const express = require(' express ')
const Router = express.Router
const adminRouter = Router 

adminRouter.post('/signup' , function (req , res ){ 
    res.json ({
        message : " Admin signup"
    })
})

adminRouter.post('/signin' , function (req , res ){ 
    res.json ({
        message : " Admin signin "
    })
})

adminRouter.post('/course' , function (req , res ){ 
    res.json({
        message : " add new Course"
    })
})

adminRouter.put('/course', function (req , res ){
    res.json({
        message : "update Current course "
    })
})

adminRouter.get('/course/bulk', function(req ,res ){
    res.json({
         message : " get all current courses"
    })
})

module.exports = adminRouter