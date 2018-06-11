const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/cocktails';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS cocktails (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        alcohol VARCHAR(256),
        ingredients VARCHAR(256),
        served VARCHAR(256),
        garnish VARCHAR(256),
        tried BOOLEAN,
        image VARCHAR(256)
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