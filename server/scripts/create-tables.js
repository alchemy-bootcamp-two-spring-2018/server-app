const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS climbingstyles (
    id SERIAL PRIMARY KEY,
    type VARCHAR(64)
  );
  CREATE TABLE IF NOT EXISTS climbingLocations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64),
    location VARCHAR(64),
    elevation INTEGER,
    yearRoundClimbing BOOLEAN,
    description VARCHAR(128)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
  