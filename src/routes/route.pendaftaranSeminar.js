const express = require("express");
const pendaftaranRoute = express.Router();
const conn = require("./controller.pendaftaranSeminar");


pendaftaranRoute.get("/daftarseminar", (req, res) => {
    return res.send("daftarseminar api");
})
pendaftaranRoute.post("/daftarseminar", conn.registerController);
pendaftaranRoute.get("/daftarseminar/peserta/:id", conn.getSingleData);
pendaftaranRoute.get("/daftarseminar/peserta", conn.getAllData);


module.exports = pendaftaranRoute;