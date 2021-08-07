'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('tb_prodi', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      prodi: {
        type: Sequelize.STRING,
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
    return await queryInterface.dropTable('tb_prodi');
  }
};
