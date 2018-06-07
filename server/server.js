// express app
const express = require('express');
const app = express();

//'middleware'  - CORS and read JSON body
const cors = require('cors');
app.use(cors());
app.use(express.json());

//connect to the database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/walruses';
const client = new Client(databaseUrl);
client.connect();


// routes
app.get('/api/walruses', (req, res) => {
  client.query(`
    SELECT * from walruses;
    `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/walruses', (req, res) => {
  const body = req.body;
  client.query (`
    INSERT INTO walruses (name, weight, type, url, photo_url, fictional, description)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `,
  [body.name, body.weight, body.type, body.url, body.photo_url, body.fictional, body.description]
  ).then (result => {
    res.send(result.rows[0]);
  });
});

app.delete('/api/walruses/:id', (req, res) => {
  client.query(`
    delete from walruses where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

//start "listening" (run) the app (server)
app.listen(3000, () => console.log('server is running on 3000...'));
app.listen(5432, () => console.log('database is running...'));