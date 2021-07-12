const fs = require("fs");
let path = process.argv[2];

let fileBuffer = fs.readFileSync(path);

let fileString = fileBuffer.toString();

let fileLineArr = fileString.split("\n");

let noOfNewLines = fileLineArr.length - 1;

console.log(noOfNewLines);
