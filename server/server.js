//require the express module (installed via 'npm i express')
const express = require('express');

//make an express app. no "new" keyword...
const app = express();

//import cors "middleware" to enable our server to do CORS
const cors = require('cors');
app.use(cors());

//register express "middleware" for converting incoming
//request body to deserialized request.body property
app.use(express.json());

//connect to the database
const pg = require('pg');
const Client = pg.Client;
//COME BACK AND ADD PATH
const databaseUrl = 'postgres://localhost:5432/';
const client = new Client(databaseUrl);
client.connect();

/* routes: */
//recipe: app.<method>(<path>, handler)
app.get('/api/glucoseLogs', (req, res) => {

  client.query(`
    SELECT * FROM glucoseLogs;
  `).then(result => {
    res.send(result.rows);
  });
  
});

//app.post
app.post('/api/glucoseLogs', (req, res) => {
  const body = req.body;
  
  client.query(`
    INSERT INTO glucoseLogs (date, day, changeInsulin, beforeBreakfast, afterBreakfast, beforeLunch, afterLunch, beforeDinner, afterDinner)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
  `,
  [body.date, body.day, body.changeInsulin, body.beforeBreakfast, body.afterBreakfast, body.beforeLunch, body.afterLunch, body.beforeDinner, body.afterDinner]
  ).then(result => {
    //send back object
    res.send(result.rows[0]);
  });
  
});

//ADD app.delete
// app.delete('/api/glucoseLogs', (req, res) => {
//   console.log(req.params.id);

//   //implement client query

//   res.send({ removed: true });
// });

//keeping this code just in case:
/* app.use((req, res) => {
  console.log(req.method, req.url, req.body.day);
  res.send({ error: 'path not found' });
}); */

//start "listening" (run) the app (server)
app.listen(3000, () => console.log('app is running...'));