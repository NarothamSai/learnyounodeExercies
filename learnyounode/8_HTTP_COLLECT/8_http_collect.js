const http = require("http");

const url = process.argv[2];

http
  .get(url, {}, function (response) {
    response.setEncoding("utf-8");
    let noOfChars = 0;
    let chars = "";

    response.on("data", (chunk) => {
      noOfChars += chunk.length;
      chars += chunk;
    });
    response.on("end", () => {
      console.log(noOfChars);
      console.log(chars);
    });
    response.on("error", console.error);
  })
  .on("error", console.error);
