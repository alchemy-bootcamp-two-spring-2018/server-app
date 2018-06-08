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
    SELECT n.id,
      n.name,
      published,
      averageminutes,
      category,
      nsfw,
      description

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

app.put('/api/podcasts/:id', (req, res) => {
  const body = req.body;

  client.query(`
    update podcastss
    set
      name = $1,
      publisher = $2,
      averageminutes = $3,
      category = $4,
      nsfw = $5
      description = $6
    where id = $7
    returning *;
  `,
  [body.name, body.publisher, body.averageminutes, body.category, body.nsfw, body.description, req.params.id]
  ).then(result => {
    res.send(result.rows[0]);
  });
});


app.delete('/api/podcasts/:id', (req, res) => {
  console.log(req.params.id);
  client.query(`
    delete from podcasts where id=$1;
  `,
  [req.params.id]
  ).then(() => {
    res.send({ removed: true });
  });
});


app.listen(3000, () => console.log('app running, please be running'));