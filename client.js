const { IP, PORT } = require("./constats");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name: MRM');
    conn.write('Say: LOL');
    setTimeout(() => {
      conn.write("Move: up");
    }, 2000)
  });

  return conn;
};

module.exports = { connect };