const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/bg';
const client = new Client(databaseUrl);


client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS boardgames;
    `);
  })
  .then(
    () => console.log('dropping tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });