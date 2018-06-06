const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/motorcycles';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS motorcycles (
        id SERIAL PRIMARY KEY,
        year INTEGER,
        make VARCHAR(256),
        model VARCHAR(256),
        color VARCHAR(256),
        forSale BOOLEAN
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