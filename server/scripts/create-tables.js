const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS classifications (
      id SERIAL PRIMARY KEY,
      classification VARCHAR(256) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS fruits (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256),
      classification_id INTEGER NOT NULL REFERENCES classifications(id),
      color VARCHAR(256),
      skinEdible BOOLEAN,
      calories INTEGER
    );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });