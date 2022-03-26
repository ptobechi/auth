const User = require("../models/user")
const {validationResult} = require("express-validator")
var jwt = require("jsonwebtoken")

exports.signup = (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({
            error: errors.array()[0].msg
        })
    }

    const user = new User(req.body)
    user.save((err, user) => {
        if(err){
            return res.status(400).json({
                error: "Unable to add user"
            })
        }

        return res.json({
            message: "Registration Success",
            user
        })
    })
}

exports.signin = (req, res) => {
    const {email, password} = req.body

    User.findOne({email}, (err, user) => {
        if(err || !user){
            return res.status(400).json({
                error: "Email was not found"
            })
        }

        //Authennticate user password
        // if(!user.authenticate(password)){
        //     return res.status(400).json({
        //         error: "Email and Password do not match",
        //     })
        // }

        //create a token
        const token = jwt.sign({_id: user._id}, process.env.SECRET)

        //store token in cookies
        res.cookie("token", token, {expire: new Date() + 1})

        //send response to webpage
        const {_id, name, email} = user
        return res.json({
            token,
        })
    })
}

exports.signout = (req, res) => {
    res.clearCookie("token")
    return res.json({
        message: "User signout successful"
    })
}