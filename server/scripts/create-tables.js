const client = require('../db-client');


client.query(`
  CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    category VARCHAR(64) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS boardgames (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    published VARCHAR(8),
    category_id INTEGER NOT NULL REFERENCES categories(id),
    min_players INTEGER,
    max_players INTEGER,
    avg_playing_time INTEGER,
    description VARCHAR(512),
    owned BOOLEAN
  );
`)
  .then(
    () => console.log('creating tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });