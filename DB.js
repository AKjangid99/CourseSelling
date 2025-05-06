const {Schema , default : mongoose } = require('mongoose')

const userSchema = Schema({

})

const adminSchema = Schema({

})

const courseSchema = Schema({

})

const parchasedCourseSchema = Schema({
    
})

const userModel = mongoose.Model( "user" , userSchema)
const adminModel = mongoose.Model('admin' , adminSchema)
const courseModel = mongoose.Model('course' , courseSchema)
const parchasedCourseModel = mongoose.Model( 'parchasedcourse', parchasedCourseSchema )