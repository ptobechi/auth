const express = require("express")
const {signup} = require("../controllers/user")
const {check} = require("express-validator")
const router =  express.Router()

//http://localhost:3000/api/signup
router.post("/signup", [
    check("name", "Name should be more than 3 characters").isLength({min: 3}),
    check("email", "Email should be valid").isEmail(),
    check("password", "Password should be at least 6 characterts").isLength({min: 6}),
], signup)

module.exports = router