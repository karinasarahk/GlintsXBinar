const express = require('express'); // Import express
const router = express.Router(); // Make a router

// Import controller
const transaksiController = require("../controllers/transaksiController");


// Define routes
router.get("/", transaksiController.getAll);


module.exports = router; // Export router
