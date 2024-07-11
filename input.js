let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput);
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    console.log("Disconnecting...");
    process.exit();
  }
  //up
  if (key === "\u0077") {
    connection.write("Move: up");
  }
  //down
  if (key === "\u0073") {
    connection.write("Move: down");
  }
  //left
  if (key === "\u0061") {
    connection.write("Move: left");
  }
  //right
  if (key === "\u0064") {
    connection.write("Move: right");
  }
};

module.exports = {
  setupInput
};