const express = require('express')
const app = express();
const userRouter = require('./routes/UserRoute');
const courseRouter = require('./routes/CourseRoute');
const adminRouter = require('./routes/adminRouter')

app.use("/user",userRouter)
app.use("/admin" ,adminRouter)
app.use("/courses" ,courseRouter)

app.listen(3000)