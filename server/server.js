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
    SELECT podcasts.id,
      name,
      formattype,
      publisher,
      averageminutes,
      category,
      nsfw,
      description
    FROM podcasts 
    `).then(result => {
    res.send(result.rows);
  });

});

app.post('/api/podcasts', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO podcasts (name, formattype, publisher, averageminutes, category, nsfw, description)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `,

  [body.name, body.format, body.publisher, body.averageminutes, body.category, body.nsfw, body.description]
  ).then(result => {
    res.send(result.rows[0]);
  });

});

app.put('/api/podcasts/:id', (req, res) => {
  const body = req.body;

  client.query(`
    update podcasts
    set
      name = $1,
      formattype = $2,
      publisher = $3,
      averageminutes = $4,
      category = $5,
      nsfw = $6,
      description = $7
    where id = $8
    returning *;
  `,
  [body.name, body.format, body.publisher, body.averageminutes, body.category, body.nsfw, body.description, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
});


app.delete('/api/podcasts/:id', (req, res) => {
  client.query(`
    DELETE FROM podcasts where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});

app.get('/api/formats', (req, res) => {

  client.query(`
    SELECT * FROM formats;
    `)
    .then(result => {
      res.send(result.rows);
    });
});

app.listen(3000, () => console.log('app running, please be running'));