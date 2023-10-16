const { readFile } = require("fs");

console.log("Started The First Task");

// readFile() method is an asynchronous(Non-Blocking)

// CHECK FILE PATH
readFile("../PathContent/event-loop-text.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("Completed First Task");
});
console.log("New Task started without waiting");
