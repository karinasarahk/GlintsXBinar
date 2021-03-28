const mysql = require("mysql2"); // Import mysql

// Make mysql connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "karinasarahk",
  password: "1234567890",
  database: "penjualan",
});

module.exports = connection; // Export connection
