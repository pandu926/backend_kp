const express = require("express");
const userRoute = express.Router();
const controller = require("./user.controller");

userRoute.get("/user", (req, res) => {
    return res.send("pandu");
})

userRoute.post("/user/register", controller.registerController);

module.exports = userRoute;