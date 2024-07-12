const userInputs = require("./constants").userInputs;
let connection;

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
  if (key === "\u0003") {
    console.log("Disconnecting ...");
    process.exit();
  }
  
  connection.write(userInputs[key]);
};

module.exports = {
  setupInput
};