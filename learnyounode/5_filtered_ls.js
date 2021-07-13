const fs = require("fs");
const path = require("path");

let directoryPath = process.argv[2];
let filterFiles = "." + process.argv[3];

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    console.log(err);
    return;
  }

  let filesFiltered = files.filter((elem) => {
    return path.extname(elem) === filterFiles;
  });

  filesFiltered.forEach((elem) => {
    console.log(elem);
  });
});
