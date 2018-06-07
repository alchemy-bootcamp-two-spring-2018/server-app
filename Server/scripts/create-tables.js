const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS amps (
        id SERIAL PRIMARY KEY,
        name VARCHAR(40),
        country VARCHAR(40),
        introduced INTEGER,
        tubes BOOLEAN
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