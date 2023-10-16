const { readFile, writeFile, read } = require("fs");

console.log("Start");
readFile("./PathContent/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./PathContent/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./PathContent/result-async.txt",
      `Here is the Aysnc file result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with the Task");
      }
    );
  });
});
console.log("Starting Next Task");
