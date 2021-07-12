const fs = require("fs");

let filePath = process.argv[2];

fs.readFile(filePath, function (err, data) {
  if (err) throw err;
  console.log(data.toString().split("\n").length - 1);
});
