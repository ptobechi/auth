const express = require("express");
const app = express();
const dotenv = require("dotenv");
//import routes
const authRoute = require("./routes/auth");

dotenv.config();

//database connection
const connectDB = require("./services/database/connection");
connectDB();

//Middleware
app.use(express.json());

//Route middleware
app.use("/api/user", authRoute);
app.get("/", (req, res) => {
    res.send("Hello World");
});

const port = process.env.PORT || 8000

//start a server
app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
})