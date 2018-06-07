const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS climbingstyles (
    id SERIAL PRIMARY KEY,
    type VARCHAR(64) UNIQUE NOT NULL
  );
  CREATE TABLE IF NOT EXISTS climbinglocations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64),
    location VARCHAR(64),
    elevation INTEGER,
    climbingstyle_id INTEGER NOT NULL REFERENCES climbingstyles(id),
    yearRoundClimbing BOOLEAN,
    description VARCHAR(1024)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });
  