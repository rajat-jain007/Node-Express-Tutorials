const names = require("./4-names.js");
const sayHi = require("./5-utils.js");
console.log(names);

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

require("./example2");
