const express = require("express");
const router = express.Router();
const controller = require("../controllers/room.controller");

router.get("/", controller.getRooms);
router.put("/:id/light", controller.updateLight);

module.exports = router;
