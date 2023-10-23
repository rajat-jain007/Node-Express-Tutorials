const eventEmitter = require("events");
const event = new eventEmitter();

event.on("sayName", () => {
  console.log("Name is Bond");
});

event.on("sayName", () => {
  console.log("Name is James");
});

event.on("sayName", () => {
  console.log("Name is JamesBond");
});
// It Works synchronously. It calls each of the listeners or registered call backs() for named events here say: "sayName"
// NOte:  We can call multiple of events from on single event. Here event.emit() calls other registered events

event.emit("sayName");
