const { connect } = require("./client");
const { setupInput } = require("./input");
const readline = require("readline");

// Initialize readline for use in username input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Allow user to input their own in-game username
rl.question("Please enter username (max 3 letters): ", (username) => {
  rl.close();
  console.log("Connecting ...");
  setupInput(connect(username));
});