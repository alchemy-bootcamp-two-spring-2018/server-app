// basic express app
const express = require('express');
const app = express();

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

//connect to the database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);

client.connect();

//routes
app.get('/api/amps', (req, res) => {
  
  client.query(`
    select a.id,
      a.name,
      c.id as "countryId"
      c.name as "countryName",
      introduced,
      tubes
    from amps a
    join countries c
    on a.country_id = c.id
    order by name;
  `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/amps', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO amps (name, country_id, introduced, tubes)
    VALUES ($1, $2, $3, $4)
    RETURNING *, country_id as "countryId";
    `,
  [body.name, body.countryId, body.introduced, body.tubes]
  ).then(result => {
    // send back object
    res.send(result.rows[0]);
  })
});

app.put('/api/amps/:id', (req, res) => {
  const body = req.body;

  client.query(`
    update amps
    set
      name = $1,
      country_id = $2,
      introduced = $3,
      tubes = $4
    where id = $6
    returning *;
  `,
  [body.name, body.countryId, body.introduced, body.tubes, req.params.id]
).then(result => {
  res.send(result.rows[0]);
  });
});

app.delete('/api/amps/:id', (reg, res) => {
  client.query(`
  delete from amps where id=$1;
  `,
  [req,params.id]
  ).then(() => {
      res.send({ removed: true });
  });
});

app.get('/api/countries', (req, res) => {

  client.query(`
    select * from countries;
  `)
    .then(result => {
      res.send(result.rows);
    });
});

// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));