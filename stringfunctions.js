const colors = require("colors");
const figlet = require("figlet");

const raining = () => {
  console.log("It's raining outside".rainbow);
};

const title = () => {
  figlet("Andy Jacko", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data.rainbow);
  });
};

module.exports = {
  raining,
  title,
};
