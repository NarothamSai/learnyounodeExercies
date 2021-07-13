const fs = require("fs");
const path = require("path");

let filesFilter = function (directoryPath, extensionFilter, callback) {
  if (extensionFilter[0] !== ".") {
    extensionFilter = "." + extensionFilter;
  }
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return callback(err);
    }

    let filesFiltered = files.filter((elem) => {
      return path.extname(elem) === extensionFilter;
    });

    return callback(null, filesFiltered);
  });
};

module.exports = filesFilter;
