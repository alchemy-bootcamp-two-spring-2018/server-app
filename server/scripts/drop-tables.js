const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/explore';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS rappers;
    `);
  })
  .then(
      () => console.log('drop tables complete'),
  )
  .then(() => {
      client.end();
  });