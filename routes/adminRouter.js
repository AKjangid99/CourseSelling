const express = require('express')
const { adminModel, courseModel } = require('../DB.js')
const Router = express.Router
const adminRouter = Router()
const JWT = require("jsonwebtoken")
const admin_jwt = process.env.admin_jwt
const { adminMiddleware } = require("../Middleware/admin.js");

adminRouter.post('/signup', async function (req, res) {
    const { email, password, firstName, lastName } = req.body

    await adminModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message: "signup success"
    })
})

adminRouter.post('/signin', async function (req, res) {
    const { email, password } = req.body

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })

    if (admin) {
        const token = JWT.sign({
            id: admin._id
        }, admin_jwt)

        res.json({
            token: token
        })
    } else {

        res.status(403).json({
            error: "Wrong email and password "
        })

    }

    res.json({
        message: " Admin signin "
    })
})

adminRouter.post('/course', async function (req, res) {
    const adminId = req.adminId
    const {tittle , discription, price, imageUrl} = req.body

    const course =  await courseModel.create({ tittle , discription, price, imageUrl , creatorId : adminId})
    res.json({
        message: "New Course Added",
        courseId : course._id
    })
})

adminRouter.put('/course', adminMiddleware ,async function (req, res) {

    const adminId = req.adminId
    const { tittle , description , imageUrl, price , courseId  } = req.body

    const course =  await courseModel.updateone({
        _id: courseId,
        creatorId: adminId
    },
    { tittle , description, price, imageUrl , })


    res.json({
        message: "update Current course "
    })
})


adminRouter.get('/course/bulk',adminMiddleware , async function (req, res) {
    const { adminId  } = req.body 
    const courses = await courseModel .find({
        creatorId : adminId
    })

    if( courses.length ){  
    res.json({
        message: " get all current courses",
        courseDtail : courses
    })
    }else {
       res.json({
         message: "Can't Found any course",
       })
    }

})

module.exports = adminRouter