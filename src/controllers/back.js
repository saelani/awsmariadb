const path = require("path");

const back = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/back.html`));
};

module.exports = {
  getBack: back
};