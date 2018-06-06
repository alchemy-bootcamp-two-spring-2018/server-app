const pg = require('pg');
const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/explore';
const client = new Client(dbUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS meleeCharacters (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        universe VARCHAR(256),
        difficulty INTEGER,
        walljump BOOLEAN
      );
    `);
  })
  .then(
    () => console.log('Tables creation complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });