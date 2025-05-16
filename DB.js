const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId


const userSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
})

const adminSchema = new Schema({
    email: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = new Schema({
    tittle: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})

const parchasedCourseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
})

const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model('admin', adminSchema)
const courseModel = mongoose.model('course', courseSchema)
const parchasedCourseModel = mongoose.model('parchasedcourse', parchasedCourseSchema)

module.exports = {
    userModel, adminModel, courseModel, parchasedCourseModel
}