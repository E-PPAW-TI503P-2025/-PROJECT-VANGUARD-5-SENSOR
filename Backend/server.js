const express = require("express");
const cors = require("cors");

const roomRoutes = require("./routes/room.routes");
const sensorRoutes = require("./routes/sensor.routes");
const settingsRoutes = require("./routes/settings.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);   // ⬅️ LOGIN DI SINI
app.use("/api/rooms", roomRoutes);
app.use("/api/sensor", sensorRoutes);
app.use("/api/settings", settingsRoutes);

app.listen(3001, () => {
  console.log("🚀 Backend running on http://localhost:3001");
});
