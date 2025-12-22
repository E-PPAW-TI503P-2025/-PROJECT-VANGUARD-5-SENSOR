const Sensor = require("../models/sensor.model");

exports.getLightLogs = async (req, res) => {
  try {
    const rows = await Sensor.getLightLogs(); // ✅ harus sesuai dengan nama di model
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEnergyLogs = async (req, res) => {
  try {
    const rows = await Sensor.getEnergyLogs();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST log
exports.addLightLog = async (req, res) => {
  try {
    const id = await Sensor.insertLightLog(req.body);
    res.json({ message: "Light log tersimpan", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addEnergyLog = async (req, res) => {
  try {
    const id = await Sensor.insertEnergyLog(req.body);
    res.json({ message: "Energy log tersimpan", id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
