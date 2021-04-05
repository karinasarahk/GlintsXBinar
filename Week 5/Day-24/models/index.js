const mongoose = require("mongoose"); // import mongoose

const uri = process.env.MONGO_URI; // add URI to MongoDB Atlas
console.log(uri);

// connect express to MongoDB with mongoose
mongoose
    .connect(uri, {
    useUnifiedTopology: true, // Must be added
    useNewUrlParser: true, // Must be added
    useCreateIndex: true, // Enables unique data type
    useFindAndModify: false, // Use findOneAndUpdate instead of findAndModify
    })
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.error(err));
    


// Import models
const barang = require("./barang");
const pelanggan = require("./pelanggan");
const pemasok = require("./pemasok");
const transaksi = require("./transaksi");

module.exports = { barang, pelanggan, pemasok, transaksi }; // export models
