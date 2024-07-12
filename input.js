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
  //messages:
  if (key === "\u0068") {
    connection.write("Say: HELLO");
  }
  if (key === "\u006C") {
    connection.write("Say: LOL");
  }
  if (key === "\u0067") {
    connection.write("Say: GG");
  }
  if (key === "\u006F") {
    connection.write("Say: OMG");
  }
};

/*
One small suggestion is to consider using a mapping object for the movement
commands instead of multiple if statements. This could make your code more concise
and easier to maintain. For example, you could create an object where the keys are
the WASD keys and the values are the corresponding directions. Then, you could look
up the direction based on the key pressed and send the command to the server
*/

module.exports = {
  setupInput
};