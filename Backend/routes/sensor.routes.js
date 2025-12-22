const express = require("express");
const router = express.Router();
const controller = require("../controllers/sensor.controller");
const auth = require("../authMiddleware"); // ⬅️ import auth middleware

// Tambahkan auth ke semua route
router.post("/light", auth, controller.addLightLog);
router.post("/energy", auth, controller.addEnergyLog);
router.get("/light", auth, controller.getLightLogs);
router.get("/energy", auth, controller.getEnergyLogs);

module.exports = router;
