const _ = require("lodash");

const things = ["Work", "Football", "YoYo", "Spiders"];

const goodThings = _.tail(things);
const badThings = _.head(things);
const now = _.now();

console.log("These are things I do:");
things.forEach((thing) => {
  console.log(thing);
});

console.log("\nThese are good things:");
goodThings.forEach((thing) => {
  console.log(thing);
});

console.log("\nThese are bad things:");
console.log(badThings);

console.log(
  `\n\nIts been ${Math.floor(now / 1000)} seconds since 1 January 1970`
);
