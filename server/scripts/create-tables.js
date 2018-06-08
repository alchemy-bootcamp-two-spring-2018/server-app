const client = require('../db-client');


client.query(`
  CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    category VARCHAR(64) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS boardgames (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    category_id INTEGER NOT NULL REFERENCES categories(id),
    players INTEGER,
    avg_playing_time INTEGER,
    description VARCHAR(1024)
  );

  CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    date VARCHAR(32),
    time VARCHAR(8),
    game_id INTEGER NOT NULL REFERENCES boardgames(id),
    guests_allowed BOOLEAN,
    message VARCHAR(1024)
  )
`)
  .then(
    () => console.log('creating tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });