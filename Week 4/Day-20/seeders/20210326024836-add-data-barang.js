'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('barang', [{
      nama: "Pepsodent1",
      harga: 14500,
      id_pemasok: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      nama: "Lifeboy2",
      harga: 24600,
      id_pemasok: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      nama: "Clear3",
      harga: 44500,
      id_pemasok: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('barang', null, {})

  }
};
