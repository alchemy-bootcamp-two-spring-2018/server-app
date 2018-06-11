const client = require('../db-client');

client.query(`

  CREATE TABLE IF NOT EXISTS genres (
    id SERIAL PRIMARY KEY,
    genre VARCHAR(256)
  );

  CREATE TABLE IF NOT EXISTS programs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256),
    host VARCHAR(256),
    audienceSize INTEGER,
    yearStarted INTEGER,
    daily BOOLEAN,
    genre_id INTEGER NOT NULL REFERENCES genres(id),
    description VARCHAR(4096)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });