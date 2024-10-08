const { Client } = require("pg");
const express = require('express');

const app = express();
const rank = require("./routes/rank");
const router = require("./routes/index");
// app.use(express.json);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//통합 데이터베이스
const client = new Client({
  user: "root",
  host: "svc.sel5.cloudtype.app",
  database: "testdb",
  password: "13241324",
  port: 32280,
});

client.connect();
const PORT = 3000;

//랭킹보드용 테스트
app.use('/ranking',rank);
app.use('/data', rank);

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/`);
});