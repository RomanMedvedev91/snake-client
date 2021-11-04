// Stores the active TCP connection object.
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const setupInput = function (conn) {
  stdin.on("data", (data)=>handleUserInput(conn, data));
  stdin.resume();
  return stdin;
};

const handleUserInput = function (conn, input) {
  // \u0003 maps to ctrl+c input
  if (input === '\u0003') {
    console.log("Connecting closing");
    process.exit();
  }
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 2000);
    
  if (input === 'w'){ //'\u0077') {
    console.log("w is pressed");
    setInterval(() => conn.write("Move: up"), 100);
  }
  if (input === 'd') {
    setInterval(() => conn.write("Move: left"), 100);
  }
  if (input === 's') {
    setInterval(() => conn.write("Move: down"), 100);
  }
  if (input === 'a') {
    setInterval(() => conn.write("Move: right"), 100);
  }
};

module.exports = setupInput;