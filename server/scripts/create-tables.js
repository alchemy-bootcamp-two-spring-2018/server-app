const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/bg';
const client = new Client(databaseUrl);


client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS boardgames (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        published VARCHAR(8),
        minPlayers INTEGER,
        maxPlayers INTEGER,
        avgPlayingTime INTEGER,
        description VARCHAR(512),
        owned BOOLEAN
      );
    `);
  })
  .then(
    () => console.log('creating tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });