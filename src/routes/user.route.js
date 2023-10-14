const express = require("express");
const userRoute = express.Router();
const controller = require("../controllers/user.controller");
const tokenVerification = require("../middleware/tokenVerification");

const { authController } = require("../controllers/auth.controller");

userRoute.get("/user", (req, res) => {
  return res.send("pandu");
});

userRoute.post("/auth/register", controller.registerController);
userRoute.get("/user/list", controller.getUserSingleController);
userRoute.put("/user/update/:id", controller.updateController);
userRoute.delete("/user/delete/:id", controller.deleteController);
userRoute.post("/auth/login", authController);

module.exports = userRoute;
