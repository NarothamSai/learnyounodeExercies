const filesFilter = require("./6_my_module.js");

filesFilter(process.argv[2], process.argv[3], function (err, data) {
  if (err) {
    console.log(err);
    return;
  }
  data.forEach((elem) => {
    console.log(elem);
  });
});
