const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")

const auth = require("./routes/auth.js")
const house = require("./routes/house.js")
const reservations = require("./routes/reservations.js")
const port = process.env.PORT||3001 ;


require('dotenv').config();


const app = express();

// parse Data
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/auth", auth);
app.use("/house", house);
app.use("/reservations", reservations)


async function main() {
    await mongoose.connect(`mongodb+srv://surajkushwaha8272:Suraj123@cluster0.ukjysjt.mongodb.net/bookingsystem`)
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`)
        })
        console.log('MongoDB connected By Mongo Client Sk Miraj!')
    } catch (err) {
        console.log(err)
    }
}

app.get('/',(req,res)=>{
    res.send(` Hello Express is server Working on ${process.env.PORT}`);
})

main();



//  mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tkzvadc.mongodb.net/motel-develpoment-db