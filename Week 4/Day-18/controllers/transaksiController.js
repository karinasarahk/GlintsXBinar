// Import mysql connection
const mysql = require("../models");


// get All data from transaksi

const getAll = (req, res) => {
    // make SQL query
    let sql = 
        "SELECT t.id, b.nama as nama_barang, p.nama as nama_pelanggan, b.harga, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON t.id_pelanggan = p.id;"
}

// Run the SQL query
mysql.query(sql, (err, results) => {
    // If error, it will go here:
    if (err) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: err,
        });
    }

    // If no error, it will go here
    return res.status(200).json({
        message: "Success",
        data: results,

    })
})

module.exports = { getAll }; // Export getAll function