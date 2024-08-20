const { Client } = require("pg");
const express = require('express');
const multer = require('multer');
const app = express();
// app.use(express.json);

const client = new Client({
  user: "root",
  host: "svc.sel5.cloudtype.app",
  database: "testdb",
  password: "13241324",
  port: 32280,
});

client.connect();

const PORT = 3000;

const storage = multer.memoryStorage(); // 메모리 저장소를 사용
const upload = multer({ storage: storage });

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

/*데이터 db 저장*/
app.post('/ranking', upload.none(), async (req, res) => {
  let playerName = req.body.playerName;
  let score = parseInt(req.body.score);
  console.log('playerName :', playerName);
  console.log('score :', score);

  try {
    const query = 'INSERT INTO users (u_name, u_score) VALUES ($1, $2)';
    const values = [playerName, score];
    console.log(values);
    await client.query(query, values);
    res.status(200).send('rank save');
  } catch (err) {
    console.error(err);
    res.status(500).send('rank fail');
  }
});

/*데이터 db 정보 가져오기*/
app.post('/data', async (req, res) =>{

  const query = 'select * from users order by u_score desc limit 10';
  try{
    const result = await client.query(query);
    res.json(result.rows);
    console.log('result =', result);
  }catch(err){
    console.error(err);
    res.status(500).send('rank info fail');
    return;
  }
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/`);
});