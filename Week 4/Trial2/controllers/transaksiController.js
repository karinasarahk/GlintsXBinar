// Import mysql connection
const connection = require("../models");
const mysql = require("../models");


// get All data from transaksi

const getAll = (req, res) => {
    // make SQL query
    let sql = 
        "SELECT t.id, b.nama as nama_barang, p.nama as nama_pelanggan, b.harga, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON t.id_pelanggan = p.id;"

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
}

const create = (req, res) => {
    // find price of barang
    let sqlFindBarang = "SELECT * FROM barang WHERE id = ?";

    // Run sqlFindBarang
    connection.query(sqlFindBarang, [req.body.id_barang], (err, results) => {
        let price = eval(results[0].harga);
        let total = eval(req.body.jumlah * price);

        // Make sql query
        let sqlCreate = 
            "INSERT INTO transaksi(id_barang, id_pelanggan, jumlah, total) VALUES (?, ?, ?, ?)";

        // Run Query Create
        connection.query(
            sqlCreate,
            [req.body.id_barang, req.body.id_pelanggan, req.body.jumlah, total],
            (err, results) => {
                // If error
                if (err) {
                    return res.status(500).json({
                        message: "Internal Server Error",
                        error: err,
                    });
                }

                return res.status(200).json({
                    message: "Success",
                    data: results,
                });
            }   

        );    
    })
};






module.exports = { getAll }; // Export getAll function