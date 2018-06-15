// require the express module (installed via `npm i express`)
const express = require('express');

// make an express app. no "new" keyword ¯\_(ツ)_/¯
const app = express();

// import cors "middleware" to enable our server to do CORS
const cors = require('cors');
// register it
app.use(cors());

// register express "middleware" for converting incoming
// request body to deserialized request.body property
app.use(express.json());

// connect to the database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);
client.connect();


// routes
app.get('/api/fruits', (req, res) => {

  client.query(`
      select f.id,
        f.name,
        c.id as "classificationId",
        c.classification as "classification",
        color,
        skinedible,
        calories
      from fruits f
      join classifications c
      on f.classification_id = c.id
      order by f.name;  
    `).then(result => {
    res.send(result.rows);
  });
  
});

app.post('/api/fruits', (req, res) => {
  const body = req.body;

  client.query(`
      insert into fruits (name, classification_id, color, skinedible, calories)
      values ($1, $2, $3, $4, $5)
      returning *, classification_id as "classificationId";
    `,
  [body.name, body.classificationId, body.color, body.skinedible, body.calories]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.put('/api/fruits/:id', (req, res) => {
  const body = req.body;
  
  client.query(`
     update fruits
     set
       name = $1,
       classification_id = $2,
       color = $3,
       skinedible = $4,
       calories = $5
     where id = $6
     returning *;
  `,
  [body.name, body.classificationId, body.color, body.skinedible, body.calories, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/fruits/:id', (req, res) => {
  client.query(`
    delete from fruits where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.get('/api/classifications', (req, res) => {

  client.query(`
    select * from classifications;
  `)
    .then(result => {
      res.send(result.rows);
    });
});
  
// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));