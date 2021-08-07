const Prodi = require('./Prodi');
module.exports = (sequelize, DataTypes) => {
  const Mahasiswa = sequelize.define('Mahasiswa', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nim: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prodi_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'updated_at'
    }
  })

  return Mahasiswa;
}