"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Barang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Barang.init(
    {
      nama: DataTypes.STRING,
      harga: DataTypes.DECIMAL,
      id_pemasok: DataTypes.INTEGER,
      image: {
        type: DataTypes.STRING,
        //Set custom getter for book image using URL
        get() {
          const image = this.getDataValue("image");
          return "/images/" + image;
        },
      },
    },
    {
      sequelize,
      paranoid: true, // Activate soft delete
      timestamps: true, // timestamps
      freezeTableName: true, // because we use Indonesian
      modelName: "barang",
    }
  );
  return Barang;
};
