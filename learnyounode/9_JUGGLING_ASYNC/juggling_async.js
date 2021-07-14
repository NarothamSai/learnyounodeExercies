const http = require("http");

let url = [];
for (let index = 0; index < 3; index++) {
  url[index] = process.argv[index + 2];
}

let promiseArr = [];

for (let index = 0; index < 3; index++) {
  promiseArr[index] = new Promise((resolve, reject) => {
    http.get(url[index], function (response) {
      response.setEncoding("utf-8");
      let responseData = "";
      response.on("data", (chunk) => {
        responseData += chunk;
      });
      response.on("end", () => {
        resolve(responseData);
      });
      response.on("error", (err) => {
        reject(err);
      });
    });
  });
}

Promise.all(promiseArr)
  .then((data) => {
    for (let index = 0; index < 3; index++) {
      console.log(data[index]);
    }
  })
  .catch(console.error);
