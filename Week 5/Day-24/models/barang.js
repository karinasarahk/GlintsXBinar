const mongoose = require("mongoose"); // import mongoose
const mongooseDelete = require("mongoose-delete"); // import mongoose-delete

const BarangSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      unique: true,
      required: true,
    },
    harga: {
      type: Number,
      required: true,
    },
    pemasok: {
      type: mongoose.Schema.ObjectId,
      ref: "pemasok",
      required: true,
    },
    image: {
      type: String,
      default: null,
      required: false,
      // Getter
      get: getImage,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    toJSON: { getters: true }, // Enable getter
  }
);

// Getter function for barang
function getImage(image) {
    return `/images/${image}`;
}

// Enable soft delete
BarangSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("barang", BarangSchema, "barang"); // Export barang model