const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/glucoselogs';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS glucoselogs (
        id SERIAL PRIMARY KEY,
        date DATE,
        day VARCHAR(256),
        changeinsulin BOOLEAN,
        beforebreakfast INTEGER,
        afterbreakfast INTEGER,
        beforelunch INTEGER,
        afterlunch INTEGER,
        beforedinner INTEGER,
        afterdinner INTEGER
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