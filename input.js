const userInputs = require("./constants").userInputs;
let connection;

// Define and utilize stdin to send inputs to server
const setupInput = function(conn) {
  console.log("Game controls:", userInputs);
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true)
       .setEncoding("utf8")
       .resume()
       .on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  // CTRL+C to escape
  if (key === "\u0003") {
    console.log("Disconnecting ...");
    process.exit();
  }

  // Unassigned key pressed
  if (!userInputs[key]) {
    console.log("\nNo such key in game controls!\n");
  }

  // Else, send command
  connection.write(userInputs[key]);
};

module.exports = {
  setupInput
};