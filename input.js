const { MOVE, MSG } = require("./constants");

let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();

  return stdin;
};

const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
    //conn.write("Move: up")
  }
  if (key === MOVE.UP_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE.LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE.DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE.RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (key === "h") {
    connection.write("Say: Whaaaaaaaa");
  }
};

module.exports = { setupInput };
