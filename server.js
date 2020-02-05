const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const businessRouter = require("./businesses/business-router")
const foodRouter = require('./foodRequest/food-router')
const volunteerRouter = require("./volunteers/volunteer-router")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

require("dotenv").config()

server.use("/api/businesses", businessRouter)
server.use("/api/foodRequest", foodRouter)
server.use("/api/volunteers", volunteerRouter)


server.get("/", (req, res, next) => {
    return res.status(201).json({ message: "Welcome to Replate!" })
})

server.use((err, req, res, next) => {
    console.log("Error", err)
    return res.status(500).json({ message: "Incorrect, check again." })
})

module.exports = server