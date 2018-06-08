const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS quadrants (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    direction VARCHAR(8) UNIQUE NOT NULL
  );

  CREATE TABLE IF NOT EXISTS locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    description VARCHAR(1024),
    neighborhood VARCHAR(256)
    quadrant_id INTEGER NOT NULL REFERENCES quadrants(id),
    power BOOLEAN,
    rating INTEGER
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });