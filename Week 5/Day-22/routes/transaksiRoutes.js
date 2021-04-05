const express = require("express"); // Import express

// Import validator
const transaksiValidator = require("../middlewares/validators/transaksiValidator");

// Import controller
const transaksiController = require("../controllers/transaksiController");

// Make router
const router = express.Router();

// Get All Data
router.get("/", transaksiController.getAll);

// Get One Data
router.get("/:id", transaksiController.getOne);

// Create data
router.post("/", transaksiValidator.create, transaksiController.create);

// Update Data
router.put("/:id", transaksiValidator.update, transaksiController.update);

// Delete One Data
router.delete("/:id", transaksiController.delete);

// Export router
module.exports = router;
