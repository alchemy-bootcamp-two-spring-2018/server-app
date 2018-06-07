const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS systems (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    system_id INTEGER NOT NULL REFERENCES systems(id),
    year INTEGER,
    completed BOOLEAN
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });