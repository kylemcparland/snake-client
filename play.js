const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.setEncoding("utf-8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("You have connected successfully!")
  });

  conn.on("close", () => {
    console.log("You have been disconnected!");
  });

  conn.on("end", () => {
    console.log("The game has been closed!");
  });

  conn.on("error", (error) => {
    console.log(`Error ocurred: ${error}`);
  });

  return conn;
};

console.log("Connecting ...");
connect();