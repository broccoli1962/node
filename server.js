const { Client } = require("pg");
const express = require('express');
const multer = require('multer');

const app = express();
const rank = require("./routes/rank");
const router = require("./routes/index");
// app.use(express.json);

client.connect();
const PORT = 3000;

//통합 데이터베이스
const client = new Client({
  user: "root",
  host: "svc.sel5.cloudtype.app",
  database: "testdb",
  password: "13241324",
  port: 32280,
});

const storage = multer.memoryStorage(); // 메모리 저장소를 사용
const upload = multer({ storage: storage });

//랭킹보드용 테스트
app.use('/ranking',rank);
app.use('/data', rank);

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/`);
});