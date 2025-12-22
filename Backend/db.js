const mysql = require("mysql2/promise");

module.exports = mysql.createPool({
  host: "localhost",
  user: "root",
  port: 3307,
  password: "syafrina416",
  database: "smart_lighting"
});