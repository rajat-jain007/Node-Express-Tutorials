// This is MODULE WRAPPER Function
// In Node.js, every module is wrapped in a function by the CommonJS module system. This function encapsulates the module's code and provides a private scope for its variables and functions. The parameters exports, require, module, __filename, and __dirname act as variables global to the entire code in a module. The module wrapper function ensures that all the code written inside a module is private to it unless explicitly stated otherwise (exported).

// The parameters of node modules like __filename, __dirname, require are defined in function wrapper which act as a global variable
(function (exports, require, module, __filename, __dirname) {
  const a = require("fs");
  module.exports = { kuchbhi };
});
