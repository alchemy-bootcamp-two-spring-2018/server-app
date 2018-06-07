const pg = require('pg');
const Client = pg.Client;
const databaseURL = 'postgresql://localhost:5432/timetoclimb';
const client = new Client(databaseURL);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS climbingLocations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(128),
        image VARCHAR(512),
        location VARCHAR(128),
        elevation INTEGER,
        yearRoundClimbing BOOLEAN,
        description VARCHAR(512)
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
  