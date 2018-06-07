const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://postgres:1234@localhost:5432/explore';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
      return client.query(`
        CREATE TABLE IF NOT EXISTS positions (
            id SERIAL PRIMARY KEY,
            name VARCHAR(256) NOT NULL
        );

        CREATE TABLE IF NOT EXISTS rappers (
            id SERIAL PRIMARY KEY,
            name VARCHAR(256),
            born VARCHAR(256),
            numalbums INTEGER,
            albums VARCHAR(256),
            aka VARCHAR(256),
            affiliates VARCHAR(256),
            dead BOOLEAN
        );
      `);
  })
  .then(
      () => console.log('tables have been created'),
      err => console.log(err)
  )
  .then(() => {
      client.end();
  });

