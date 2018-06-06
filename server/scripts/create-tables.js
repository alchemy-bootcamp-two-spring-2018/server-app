const pg = require('pg');
const Client = pg.Client;
const databaseURL = 'postgresql://localhost:5432/timetoclimb';
const client = new Client(databaseURL);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS climbingLocations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        image VARCHAR(100),
        location VARCHAR(100),
        elevation INTEGER,
        yearRoundClimbing BOOLEAN,
        description VARCHAR(500)
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
  