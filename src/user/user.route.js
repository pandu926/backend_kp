const express = require("express");
const userRoute = express.Router();
const controller = require("./user.controller");
const tokenVerification = require("../middleware/tokenVerification");

const {
    authController
} = require("../auth/auth.controller");

userRoute.get("/user", (req, res) => {
    return res.send("pandu");
})

userRoute.post("/user/register", controller.registerController);
userRoute.get("/user/:id", controller.getUserSingleController);
userRoute.put("/user/update", tokenVerification, controller.updateController)
userRoute.delete("/user/delete/:id", controller.deleteController);
userRoute.post("/user/login", authController)

module.exports = userRoute;