const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/locations';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        description VARCHAR(1024),
        neighborhood VARCHAR(256),
        power BOOLEAN,
        rating INTEGER
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