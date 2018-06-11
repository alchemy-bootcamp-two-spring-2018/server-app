const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:Bl0winBetty!@localhost:5432/guitarapp';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS guitarists (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        age INTEGER,
        living BOOLEAN,
        img_url VARCHAR(256)
      );
    `);
  })
  .then(() => {
    client.end();
  });