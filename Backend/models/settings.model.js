const db = require("../db");

exports.getSettings = async () => {
  const [rows] = await db.query(
    "SELECT * FROM system_settings WHERE id = 1"
  );
  return rows[0];
};

exports.updateSettings = async (data) => {
  const { auto_mode, threshold } = data;
  await db.query(
    "UPDATE system_settings SET auto_mode = ?, threshold = ? WHERE id = 1",
    [auto_mode, threshold]
  );
};
