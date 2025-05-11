const express = require("express")
const Router = express.Router
const JWT = require("jsonwebtoken")
const {user_jwt} = require('../config.js')

// or  you can do this both are same 
// const {Router} = require("express")
const userRouter = Router()
const userModel = require('../DB.js')

userRouter.post("/signup", function ( req, res ){

    const { email, password, firstName, lastName} = req.body

    userModel.create({
        email, password , firstName , lastName 
    })

    res.json({
        message : "Signup endpoint"
    })
})

userRouter.post("/signin", async function ( req,  res ){

    const { email, password } = req.body 

    const user = await userModel.findOne({
        email: email,
        password: password 
    })

    if(user){
        const token = JWT.sign({
            id: user._id
        }, user_jwt)

        //  For_Later: Do_cookie_logic

        res.json({
            token : token
        })
    }else {
            res.status(403).json({
                message : "Worng Email and Password"
            })
    }
})

userRouter.get("/purchasedCourse", function ( req ,res  ){
    res.json({ message: "purchases endpoint" });
})


module.exports = userRouter
