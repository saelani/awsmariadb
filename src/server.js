const express = require("express");
const app = express();
const db = require("./models");
const initRoutes = require("./routes/web");


global.__basedir = __dirname;
//console.log(__dirname);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));
initRoutes(app);

db.sequelize.sync();
 //db.sequelize.sync({ force: true }).then(() => {
  // console.log("Drop and re-sync db.");
 //});

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});