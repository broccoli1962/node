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

app.get('/ranking', async (req, res) => {
  const data = req.body;
  const score = data.score;
  const playerName = data.playerName;

  try{
    await client.connect();
    const query = 'INSERT INTO rank (player_id , score) VALUES ($1, $2)';
    const values = [playerName, score];
    await client.query(query, values);
    await client.end();
    res.status(200).send('rank data saved');
  }catch(err){
    console.error(err);
    res.status(500).send('error rank data saved');
  }
});

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`);
});