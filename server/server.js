const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

//connect
const pg = require('pg');
const Client = pg.Client;
const databaseURL = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);
client.connect();

/* eslint-disable-next-line */
/* const motorcycles = require('./data/motorcycles');
const fs = require('fs');
const dataPath = 'data/motorcycles.json'; */

app.get('/api/motorcycles', (req, res) => {

  client.query(`
  SELECT * from motorcycles;
  `).then(result => {
    res.send(result.rows);
  });

/*   const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  res.send(data); */


});

app.post('/api/motorcycles', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO neighborhoods ()
  `);
/*   const raw = fs.readFileSync(dataPath);
  const data = JSON.parse(raw);
  data.push(req.body);
  fs.writeFileSync(dataPath, JSON.stringify(data));
  res.send(req.body); */


});

app.listen(3000, () => console.log('Application is running...'));