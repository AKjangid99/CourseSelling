const express = require("express")
const Router = express.Router
 
// or  you can do this both are same 
// const {Router} = require("express")

const userRouter = Router()

userRouter.post("/signup", function ( req, res ){
    res.json({
        message : "Signup endpoint"
    })
})

userRouter.post("/signin", function ( req,  res ){
    res.json({
        message : "Signin endpoint"
    })
})

userRouter.get("/purchasedCourse", function ( req ,res  ){
    res.json({ message: "purchases endpoint" });
})


module.exports = userRouter
