const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//import routes
const authRoute = require("./routes/auth");

dotenv.config();

//connect to DB
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB connected");
}).catch((err) => {
    // console.log("Unable to connect to DB")
    console.log(`Unable to connect to DB: ${err} `);
    process.exit(1)
});

//Middleware
app.use(express.json());
//Route middleware
app.use("/api/user", authRoute);

const port = process.env.PORT || 8000

//start a server
app.listen(port, () =>{
    console.log(`App is running on ${port}`)
})