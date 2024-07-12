const input = require("./constants").input;
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === "\u0003") {
    console.log("Disconnecting...");
    process.exit();
  }
  connection.write(input[key]);
};

module.exports = {
  setupInput
};