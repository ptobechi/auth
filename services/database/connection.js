const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false,
            // useCreateIndex: true
        })

        console.log(`Server is running on http://localhost:${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB

// /connect to DB
// mongoose.connect(process.env.DB, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log("DB connected");
// }).catch((err) => {
//     // console.log("Unable to connect to DB")
//     console.log(`Unable to connect to DB: ${err} `);
//     process.exit(1)
// });