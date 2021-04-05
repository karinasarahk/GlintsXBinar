const mongoose = require("mongoose"); // import mongoose
const mongooseDelete = require("mongoose-delete"); // import mongoose-delete

const PelangganSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      unique: true,
      required: true,
    },
    photo: {
        type: String,
        required: false,
        default: null,
        // getter
        get: getPhoto,
    }
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

// Getter function for barang
function getPhoto(photo) {
    return `/images/${photo}`;
}

// Enable soft delete
PelangganSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("pelanggan", PelangganSchema, "pelanggan"); // Export pelanggan model