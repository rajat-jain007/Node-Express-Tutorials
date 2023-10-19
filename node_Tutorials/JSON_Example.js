const bioData = {
  name: "Vinod",
  age: 26,
  channel: "technical",
};

console.log(bioData.channel);

// Use JSON.stringify() method to turn object into JSON
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

// Use JSON.parse() method to turn JSON to object
const objData = JSON.parse(jsonData);

console.log(objData);


