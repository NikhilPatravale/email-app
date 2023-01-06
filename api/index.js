const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoute = require('./routes/Users')
const messageRoute = require("./routes/Messages")

dotenv.config()

const PORT = process.env.PORT || 8200
const app = express()

mongoose.connect(process.env.MONGO_URL, (err) => {
    if(err) console.log(err)
    else console.log('MongoDB connected')
})

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to your server")
})

app.use("/email/api/users", userRoute)
app.use("/email/api/messages", messageRoute)


app.listen(PORT, () => {
    console.log('Your app is live on PORT ' + PORT)
})