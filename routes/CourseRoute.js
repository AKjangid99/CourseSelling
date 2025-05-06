const express = require("express")
const  Router  = express.Router

const coursesRouter = Router()

coursesRouter.get("/preview", function (  req , res ){
    res.json({
        message : "AllCourses endpoint"
    })
})

coursesRouter.post("/purchase", function( req,res ) {
    res.Json({
        message : "purche course"
    })
})

module.exports = coursesRouter