const { connect } = require("./client");
const { setupInput } = require("./input");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter username (max 3 letters): ", (username) => {
  rl.close();
  console.log("Connecting ...");
  setupInput(connect(username));
});