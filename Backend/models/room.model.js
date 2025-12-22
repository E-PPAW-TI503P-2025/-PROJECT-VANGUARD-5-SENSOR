const db = require("../db");

exports.getAllRooms = async () => {
  const [rows] = await db.query("SELECT * FROM rooms");
  return rows;
};

exports.updateLightStatus = async (id, light_on) => {
  await db.query(
    "UPDATE rooms SET light_on = ? WHERE id = ?",
    [light_on, id]
  );
};
