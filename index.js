const mongoose = require("mongoose");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

//DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
}).then(() => {
    console.log("DB connected");
}).catch((err) => {
    // console.log("Unable to connect to DB")
    console.log(`Unable to connect to DB: ${err} `);
    process.exit(1)
})

//Use parsing middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//import routes
const userRoutes = require("./routes/user")

//using routes
app.use('/api', userRoutes)

const port = process.env.PORT || 8000

//start a server
app.listen(port, () =>{
    console.log(`App is running on ${port}`)
})

