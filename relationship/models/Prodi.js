module.exports = (sequelize, DataTypes) => {
  const Prodi = sequelize.define('Prodi', {
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
    createdAt: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'updated_at'
    }
  });

  return Prodi;
}