const Room = require("../models/room.model");

exports.getRooms = async (req, res) => {
  try {
    const data = await Room.getAllRooms();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateLight = async (req, res) => {
  try {
    const { light_on } = req.body;
    await Room.updateLightStatus(req.params.id, light_on);
    res.json({ message: "Status lampu diperbarui" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
