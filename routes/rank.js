const express = require('express');
const rank = express().router;

/*데이터 db 저장*/
rank.post('/ranking', upload.none(), async (req, res) => {
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
  rank.post('/data', async (req, res) =>{
  
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

module.exports = rank;