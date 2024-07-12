const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function(username) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("You have connected successfully!");
    conn.write("Name: " + username);
  });

  conn.on("data", (data) => {
    console.log("Message from server:", data);
  });

  conn.on("close", () => {
    console.log("You have been disconnected!");
  });

  conn.on("error", (error) => {
    console.log("Error ocurred: ", error);
  });

  return conn;
};

module.exports = {
  connect
};