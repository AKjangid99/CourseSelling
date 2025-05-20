const express = require('express')
const { adminModel, courseModel } = require('../DB.js')
const Router = express.Router
const adminRouter = Router()
const JWT = require("jsonwebtoken")


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
        courseId : course._Id
    })
})

adminRouter.put('/course', function (req, res) {

    const adminId = req.adminId
    const { tittle , description , imageUrl, price , courseId  } = req.body

    res.json({
        message: "update Current course "
    })
})

adminRouter.get('/course/bulk', function (req, res) {
    res.json({
        message: " get all current courses"
    })
})

module.exports = adminRouter