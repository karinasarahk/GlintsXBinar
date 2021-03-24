const express = require("express");
const app = express();
const transaksiRoute = require("./routes/transaksiRoute");


// import route

// Use to read req.body
app.use(express.urlencoded({ extended: true}));

// Define Route
app.use("/transaksi", transaksiRoute);

// Server running on port 3000

app.listen(3000, () => console.log("Server running 3000!"));