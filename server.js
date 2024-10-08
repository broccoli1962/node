const express = require('express');
const app = express();
const rank = require("./routes/rank");
const router = require("./routes/index");
const database = require("./routes/database");
// app.use(express.json);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


const PORT = 3000;

//랭킹보드용 테스트
app.use(rank);

app.use('/', router);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/`);
});