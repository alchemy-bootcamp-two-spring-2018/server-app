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
const databaseUrl = 'postgres://localhost:5432/glucoselogs';
const client = new Client(databaseUrl);
client.connect();

/* routes: */
//recipe: app.<method>(<path>, handler)
app.get('/api/glucoselogs', (req, res) => {

  client.query(`
    SELECT glucoselogs.id,
      date,
      days.id as "dayId",
      days.name,
      changeInsulin, 
      beforeBreakfast, 
      afterBreakfast, 
      beforeLunch, 
      afterLunch, 
      beforeDinner, 
      afterDinner 
    FROM glucoselogs 
    JOIN days 
    ON glucoselogs.day = days.id
    ORDER BY glucoselogs.date;
  `).then(result => {
    res.send(result.rows);
  });
  
});

app.post('/api/glucoselogs', (req, res) => {
  const body = req.body;
  client.query(`
    INSERT INTO glucoselogs (date, day, changeInsulin, beforeBreakfast, afterBreakfast, beforeLunch, afterLunch, beforeDinner, afterDinner)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
  `,
  [body.date, body.dayId, body.changeInsulin, body.beforeBreakfast, body.afterBreakfast, body.beforeLunch, body.afterLunch, body.beforeDinner, body.afterDinner]
  ).then(result => {
    res.send(result.rows[0]);
  });
  
});

app.put('/api/glucoselogs/:id', (req, res) => {
  const body = req.body;

  client.query(`
    UPDATE glucoselogs
    SET
      date = $1, 
      day = $2, 
      changeInsulin = $3, 
      beforeBreakfast = $4, 
      afterBreakfast = $5, 
      beforeLunch = $6, 
      afterLunch = $7, 
      beforeDinner = $8, 
      afterDinner = $9
    WHERE id = $10
    RETURNING *;
  `,
  [body.date, body.dayId, body.changeInsulin, body.beforeBreakfast, body.afterBreakfast, body.beforeLunch, body.afterLunch, body.beforeDinner, body.afterDinner, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
  
});

app.delete('/api/glucoselogs/:id', (req, res) => {
  console.log(req.params.id);

  client.query(`
    DELETE FROM glucoselogs
    WHERE id = $1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });

});

app.get('/api/days', (req, res) => {

  client.query(`
    SELECT *
    FROM days; 
  `).then(result => {
    res.send(result.rows);
  });
  
});


//start "listening" (run) the app (server)
app.listen(3000, () => console.log('app is running...'));