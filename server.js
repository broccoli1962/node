const express = require('express');
const app = express();
const rank = require("./routes/rank");
const home = require("./routes/blog");
const database = require("./routes/database");
// app.use(express.json);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


const PORT = 3000;

//랭킹보드용 테스트
app.use(rank);
//웹 페이지용 테스트
app.use(home);

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}/`);
});