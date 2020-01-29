const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require("./middleware/authenticate")
const businessRouter = require("./businesses/business-router")
const foodRouter = require('./foodPickup/food-router')
const volunteerRouter = require("./volunteers/volunteer-router")

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

require("dotenv").config()

server.use("/api/businesses", businessRouter)
server.use("/api/foodPickup", foodRouter)
server.use("/api/volunteers", volunteerRouter)
server.use("/api/businesses", authenticate, businessRouter)

server.get("/", (req, res, next) => {
    return res.status(201).json({ message:" Welcome to Replate!" })
})

server.use((err, req, res, next) => {
    console.log("Error", err)
    return res.status(500).json({ message: "Incorrect, check again." })
})

module.exports = server