const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/gameslist';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS games (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        system VARCHAR(256),
        year INTEGER,
        completed BOOLEAN
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });