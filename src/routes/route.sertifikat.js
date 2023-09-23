const express = require("express");
const sertifikatRoute = express.Router();
const controller = require("../controllers/sertifikat.controller");
const tokenVerification = require("../middleware/tokenVerification");

sertifikatRoute.get("/sertifikat", (req, res) => {
  return res.send("daftarseminar api");
});

sertifikatRoute.get("/sertifikat/:id", controller.getSertifikat);
sertifikatRoute.post("/sertifikat/add", controller.addSertifikat);
sertifikatRoute.put("/sertifikat/update/:id", controller.updateSertifikat);
sertifikatRoute.delete("/sertifikat/delete/:id", controller.deleteSertifikat);

module.exports = sertifikatRoute;
