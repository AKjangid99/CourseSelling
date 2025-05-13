const express = require('express')
const app = express()

const UserArr = [];

app.use(express.json());

function TokenGenrater() {
    let option = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

    let token = ""

    for (let i = 0; i < 10; i++) {

        token += option[Math.floor(Math.random() * option.length)];
    }
    return token
}

app.get("/hamlo", (req, res) => {
    res.json({
        message: "hamlo "
    })
})

app.post("/Signup", (req, res) => {

    const UserName = req.body.UserName;
    const Password = req.body.Password;

    // if(user.filter ( u => u.UserName === UserName)){
    //     res.json({
    //         message : "you already have account"
    //     })
    //     return
    // }
    UserArr.push({
        UserName: UserName,
        Password: Password
    })

    console.log(UserArr)

    res.json({
        message: "you are signin "
    })
})

app.post("/Signin", (req, res) => {

    const UserName = req.body.UserName;
    const Password = req.body.Password;

    const FoundUser = UserArr.find(user => user.UserName === UserName && user.Password === Password)



    if (FoundUser) {
        const token = TokenGenrater()
        FoundUser.token = token
        res.json({
            message: token
        })
    }
    else {
        res.status(403).send({
            message: "invalid username or password "
        })
    }

})

app.listen(3000);