const express = require("express");
const pendaftaranRoute = express.Router();
const conn = require("../controllers/controller.pendaftaranSeminar");

pendaftaranRoute.get("/daftarseminar", (req, res) => {
  return res.send("daftarseminar api");
});
pendaftaranRoute.post("/daftarseminar", conn.registerController);
pendaftaranRoute.get("/daftarseminar/peserta/:id", conn.getSingleData);
pendaftaranRoute.get("/daftarseminar/peserta", conn.getAllData);
pendaftaranRoute.put("/daftarseminar/peserta/:id", conn.updateController);

module.exports = pendaftaranRoute;
