const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoute = require('./routes/Users')
const messageRoute = require("./routes/Messages")
const cors = require('cors')

dotenv.config()

const PORT = process.env.PORT || 8200
const app = express()

const connectMongo = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
    }catch(err){
        throw err
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected :(')
})

mongoose.connection.on('connected', () => {
    console.log('MongoDB connected :)')
})

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("Welcome to your server")
})

app.use("/email/api/users", userRoute)
app.use("/email/api/messages", messageRoute)


app.listen(PORT, () => {
    connectMongo()
    console.log('Your app is live on PORT ' + PORT)
})