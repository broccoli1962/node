const { Client } = require("pg");
const express = require('express');
const multer = require('multer');
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
  // console.log(err, res);
});
client.query("SELECT * FROM rank", (err, res) => {
  // console.log(err, res);
  client.end();
});

const PORT = 3000;

const storage = multer.memoryStorage(); // 메모리 저장소를 사용
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/ranking', upload.none(), async (req, res) => {
  try {
    console.log(req.body);
    let playerName = req.body.playerName;
    let score = parseInt(req.body.score);
    console.log('playerName :', playerName);
    console.log('score :', score);

    // await client.connect();
    // const query = 'INSERT INTO rank (player_id, score) VALUES ($1, $2)';
    // const values = [playerName, score];
    // await client.query(query, values);
    // await client.end();
    res.status(200).send('rank data saved');
  } catch (err) {
    console.error(err);
    res.status(500).send('error rank data saved');
  }
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/`);
});