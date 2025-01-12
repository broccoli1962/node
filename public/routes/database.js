const { Client } = require("pg");

//통합 데이터베이스
const client = new Client({
    user: "root",
    host: "svc.sel5.cloudtype.app",
    database: "testdb",
    password: "13241324",
    port: 32280,
  });
  
global.client = client;
client.connect();

module.exports = {
    client
};