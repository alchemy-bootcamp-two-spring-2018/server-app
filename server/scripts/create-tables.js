const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS fruits (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        classification VARCHAR(256),
        color VARCHAR(256),
        skinEdible BOOLEAN,
        calories INTEGER
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