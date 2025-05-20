require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express();
const userRouter = require('./routes/UserRoute');
const courseRouter = require('./routes/CourseRoute');
const adminRouter = require('./routes/adminRouter');


app.use(express.json())

app.use("/user", userRouter)
app.use("/admin", adminRouter)
app.use("/courses", courseRouter)
console.log( "hamlo " , process.env.DATABASE_URL)


async function main() {
    await mongoose.connect(process.env.DATABASE_URL)
    app.listen(3000)
    console.log('lisning at port 3000')
}

main()