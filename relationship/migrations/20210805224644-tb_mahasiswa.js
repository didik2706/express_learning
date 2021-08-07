'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tb_mahasiswa', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nim: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      prodi_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('tb_mahasiswa');
  }
};
