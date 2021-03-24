const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "karina",
    password: "AccioVivo!1",
    database: "penjualan_morning",
})

module.exports= connection;