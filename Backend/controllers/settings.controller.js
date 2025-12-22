const Settings = require("../models/settings.model");

exports.getSettings = async (req, res) => {
  try {
    const data = await Settings.getSettings();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSettings = async (req, res) => {
  try {
    await Settings.updateSettings(req.body);
    res.json({ message: "System setting diperbarui" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
