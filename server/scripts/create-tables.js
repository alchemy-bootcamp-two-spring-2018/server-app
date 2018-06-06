const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/subs';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id SERIAL PRIMARY KEY,
        service VARCHAR(256),
        price INTEGER,
        ads BOOLEAN
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