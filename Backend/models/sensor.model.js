const db = require("../db");

const Sensor = {
  insertLightLog: async ({ intensity, mode }) => {
    const [result] = await db.query(
      "INSERT INTO light_logs (intensity, mode) VALUES (?, ?)",
      [intensity, mode]
    );
    return result.insertId;
  },

  insertEnergyLog: async ({ kwh, cost, carbon }) => {
    const [result] = await db.query(
      "INSERT INTO energy_logs (kwh, cost, carbon) VALUES (?, ?, ?)",
      [kwh, cost, carbon]
    );
    return result.insertId;
  },

  getLightLogs: async () => {
    const [rows] = await db.query(
      "SELECT * FROM light_logs ORDER BY created_at DESC"
    );
    return rows;
  },

  getEnergyLogs: async () => {
    const [rows] = await db.query(
      "SELECT * FROM energy_logs ORDER BY created_at DESC"
    );
    return rows;
  },
};

module.exports = Sensor;
