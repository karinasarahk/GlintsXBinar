require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

// Express
const express = require("express");

const fileUpload = require("express-fileupload");

// import routes
const transaksiRoutes = require("./routes/transaksiRoutes");

// make express app
const app = express();

// Body-parser to read req.body
app.use(express.json()); // enable req.body JSON type
app.use(
    express.urlencoded({
        extended: true,
    })
); // support urlencode body

// To read form-data request
app.use(fileUpload());

// Set static file directory
app.use(express.static("public"));

// make routes
app.use("/transaksi", transaksiRoutes);

// running server
app.listen(3000, () => console.log("Server running on 3000"));