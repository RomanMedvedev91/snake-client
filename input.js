const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  // \u0003 maps to ctrl+c input
if (key === '\u0003') {
  console.log("Connecting closing");

  process.exit();
}
};

module.exports = { setupInput };