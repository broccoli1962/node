const { Client } = require("pg");
const express = require('express');
const app = express();

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
});

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`);
});