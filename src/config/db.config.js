module.exports = {
    HOST: "mysql1.c46nklo9tppz.ap-southeast-1.rds.amazonaws.com",
    USER: "admin",
    PASSWORD: "Kuning4n",
    DB: "sekolah",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };