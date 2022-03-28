const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

dotenv.config();

//database connection
const connectDB = require("./servers/services/database/connection");
connectDB();

//log all http request to the conso9le
app.use(morgan("tiny")); 

// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/media', express.static(path.resolve(__dirname, "assets/media")));
app.use('/plugins', express.static(path.resolve(__dirname, "assets/plugins")));

//render signup page to client side
app.get("/", (req, res) => {
    res.render("signin");
})






//listening port 
const port = process.env.PORT || 8000

//start a server
app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`);
})