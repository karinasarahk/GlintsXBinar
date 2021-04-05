const mongoose = require("mongoose"); // import mongoose
const mongooseDelete = require("mongoose-delete"); // import mongoose-delete

const TransaksiSchema = new mongoose.Schema(
  {
    barang: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    pelanggan: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    jumlah: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    // enable timestamps
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
    toJSON: { getters: true }, // Enable getter
  }
);

// Enable soft delete
TransaksiSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("transaksi", TransaksiSchema, "transaksi"); // Export transaksi model