// require the express module (installed via `npm i express`)
const express = require('express');

// make an express app. no "new" keyword ¯\_(ツ)_/¯
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/npr';
const client = new Client(databaseUrl);
client.connect();

// temp solution to updating data...
// const fs = require('fs');
// path to data file:
// const dataPath = 'data/npr-programs.json';

// ROUTE:  get all programs
app.get('/api/programs', (req, res) => {

  client.query(`
    SELECT * from programs;
  `).then(result => {
    res.send(result.rows);
  });

});

app.post('/api/programs', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO programs (title, host, audienceSize, yearStarted, daily, description)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,
  [body.title, body.host, body.audienceSize, body.yearStarted, body.daily, body.description]
  ).then(result => {
    // send back object
    res.send(result.rows[0]);
  });

});

/*  from Marty

// routes
app.get('/api/neighborhoods', (req, res) => {

  client.query(`
    SELECT * from neighborhoods;
  `).then(result => {
    res.send(result.rows);
  });

});



app.delete('/api/neighborhoods/:id', (req, res) => {
  console.log(req.params.id);

  // implement client query
  
  res.send({ removed: true });
});

*/





/*
// app.<method>(<path>, handler)
app.get('/api/programs', (req, res) => {
  // fs file paths are relative to pwd (cwd) aka where you started node
  const raw = fs.readFileSync(dataPath);
  // make into js array with objects
  const data = JSON.parse(raw);
  res.send(data);
});
*/

/*
app.post('/api/programs', (req, res) => {
  console.log(req.method, req.url, req.body);
  // fs file paths are relative to pwd (cwd) aka where you started node
  const raw = fs.readFileSync(dataPath);
  // make into js array with objects
  const data = JSON.parse(raw);
  // push our new object into array
  data.push(req.body);
  // save file
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  // send back object
  res.send(req.body);
});
*/

// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));