require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

const dotenv = require("dotenv"); // import dotenv

const express = require('express');

// import router
const transaksiRoutes = require("./routes/transaksiRoutes");

// configure dotenv
// dotenv.config({ path: `.env.${process.env.NODE_ENV}`});

// make express app
const app = express();

// enable body parser
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// make routes
app.use("/transaksi", transaksiRoutes);

// run server
app.listen(3000, () => console.log("Server running on 3000!"));