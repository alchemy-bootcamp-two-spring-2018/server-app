//engage express
const express = require('express');
const app = express();

//make sure to use cors and read your json file
const cors = require('cors');
app.use(cors());
app.use(express.json());

//here is how you connect to database
//for further reading google pg.Client and read documentation
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/explore';
const client = new Client(databaseUrl);
client.connect(() => {
  console.log('SERVER.JS IS CONNECTED')
});


app.get('/api/rappers', (req, res) => {
  console.log('something happened')
  client.query(`
  
  SELECT * from rappers;
  `).then(result => {
    res.send(result.rows);
  });
});

app.post('/api/rappers', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO rappers (name, born, numAlbums, albums, aka, affiliates, dead)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *;
  `,
  [body.name, body.born, body.numAlbums, body.albums, body.aka, body.affiliates, body.dead]
  ).then(result => {
    res.send(result.rows[0]);
  })

});

// {"name":"Kanye West","born":"Chicago, IL","numAlbums":8,
// "albums":"The College Dropout, Graduation My Beautiful Dark Twisted Fantasy",
//"aka":"Yeezus, Ye",
// "affiliates":"Jay-Z, No I.D.","dead":false}

app.use((req, res) => {
  console.log(req.method, req.url, req.body.name);
  res.send({ error: 'path not found ' });
});

app.delete('/api.rappers/:id', (req, res) => {
  const params = req.params.id;
  console.log(params);

  client.query(`
    DELETE FROM rappers
    WHERE id = $1
  `)
  
  [params.id].then(result => {
    res.send({ removed: true });
  });

});

app.listen(3000, () => console.log('app is doing stuff'));