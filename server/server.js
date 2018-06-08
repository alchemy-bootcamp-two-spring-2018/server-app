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
      glucoselogs.date,
      days.id,
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
    ON glucoselogs.day_id = days.id
    ORDER BY glucoselogs.date;
  `).then(result => {
    res.send(result.rows);
  });
  
});

app.post('/api/glucoselogs', (req, res) => {
  const body = req.body;
  client.query(`
    INSERT INTO glucoselogs (date, day_id, changeInsulin, beforeBreakfast, afterBreakfast, beforeLunch, afterLunch, beforeDinner, afterDinner)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *;
  `,
  [body.date, body.day_id, body.changeinsulin, body.beforebreakfast, body.afterbreakfast, body.beforelunch, body.afterlunch, body.beforedinner, body.afterdinner]
  ).then(result => {
    //send back object
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


//start "listening" (run) the app (server)
app.listen(3000, () => console.log('app is running...'));