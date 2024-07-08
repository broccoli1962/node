const { Client } = require("pg");
const client = new Client({
  user: "root",
  host: "svc.sel5.cloudtype.app",
  database: "testdb",
  password: "13241324",
  port: 32280,
});
client.connect();
client.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
});
client.query("SELECT * FROM rank", (err, res) => {
    console.log(err, res);
    client.end();
})