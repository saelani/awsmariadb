module.exports = (sequelize, DataTypes) => {
    const Laporan = sequelize.define("laporan", {
      judul: {
        type: DataTypes.STRING,
      },
      isi: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.BLOB("long"),
      }
    });
  
    return Laporan;
  };