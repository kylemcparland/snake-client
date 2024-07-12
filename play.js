const { connect } = require("./client");
const { setupInput } = require("./input");

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let username = "";
rl.question("Set username (max 3 letters):", (name) => {
  username = name;
  rl.close();

  console.log("Connecting ...");
  setupInput(connect(username));
});