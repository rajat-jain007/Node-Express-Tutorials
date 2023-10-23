const fs = require("fs");
const bioData = {
  name: "Bond007",
  age: 30,
  mission: "code7",
};

const jsonData = JSON.stringify(bioData);

// Write this file with writeFile() method. NOTE:- Don't forget to put .json after the filename. Even if the file doesn't exist it will implicitely be created

fs.writeFile("fileName.json", jsonData, (err) => {
  console.log("done");
});

// 1: Let's take the created file "fileName" as API
// 2: Now read the external file using readFfile() method

fs.readFile("./fileName.json", "utf-8", (err, data) => {
  // Convert JSON to object again from the external file
  const jsonToObj = JSON.parse(data);
  console.log("reading the data" + data);
  // Converting to original Object
  console.log(jsonToObj);
});