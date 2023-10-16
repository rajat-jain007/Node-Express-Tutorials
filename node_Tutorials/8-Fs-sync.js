const { readFileSync, writeFileSync } = require("fs");
console.log("Start of the Process");

// Without utf or other methods, It will return Buffer
const first = readFileSync("./PathContent/first.txt", "utf-8");
const second = readFileSync("./PathContent/second.txt", "utf8");

console.log(first, second);

// writeFileSync used to write content in a file or overwrite the existing one

writeFileSync(
  "./PathContent/result-sync.txt",
  `Result of both the first and second files : ${first}, ${second} \n`
);

// To append the existing file use flag:"a"

writeFileSync(
  "./PathContent/result-sync.txt",
  `From here starts the appended file : \n Result of both the first and second files : ${first}, ${second}  `,
  { flag: "a" }
);

console.log("End Of the Process");

console.log("Starting Next Process");
