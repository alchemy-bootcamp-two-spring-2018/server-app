const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);
client.connect();


app.get('/api/podcasts', (req, res) => {

  client.query(`
  SELECT * from podcasts;
  `).then(result => {
    res.send(result.rows);
  });

});

app.post('/api/podcasts', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO podcasts (name, publisher, averageminutes, category, nsfw, description)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `,

  [body.name, body.publisher, body.averageminutes, body.category, body.nsfw, body.description]
  ).then(result => {
    res.send(result.rows[0]);
  });

});

// app.delete('/api/podcasts/:id', (req, res) => {
//   console.log(req.params.id);
 
//   res.send({ removed: true });
// });


app.listen(3000, () => console.log('app running, please be running'));