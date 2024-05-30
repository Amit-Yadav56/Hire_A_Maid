const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.get('/', (req, res) => {
  res.send("Hello there")
})

const userRoute = require("./routes/user.js")
app.use("/api/users/", userRoute)

app.listen(4000, () => {
  console.log("listening to port http://localhost:4000")
})