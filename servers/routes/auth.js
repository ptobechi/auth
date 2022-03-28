const router = require("express").Router();
const {check} = require("express-validator");
const { signup, signin } = require("../controllers/user");


//http://localhost:3000/api/user/signup
router.post("/signup", [
    check("name", "Name should be more than 3 characters").isLength({min: 3}),
    check("email", "Email should be valid").isEmail(),
    check("password", "Password should be at least 6 characterts").isLength({min: 6}),
], signup);

//http://localhost:3000/api/user/signin
router.post("/signin", [
    check("email", "Email should be valid").isEmail(),
    check("password", "Password should be at least 6 characterts").isLength({min: 6}),
], signin)



module.exports = router;