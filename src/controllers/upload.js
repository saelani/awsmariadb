const fs = require("fs");
const path = require("path");


const db = require("../models");
const Laporan = db.laporans;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    console.log(req.judul + req.isi)

    Laporan.create({
      judul: req.judul,
      isi: req.isi,
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/resources/static/assets/tmp/" + image.name,
        image.data 
      );

      //return res.send(`File has been uploaded.`);
      return res.sendFile(path.join(`${__dirname}/../views/back.html`));
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};

module.exports = {
  uploadFiles,
};