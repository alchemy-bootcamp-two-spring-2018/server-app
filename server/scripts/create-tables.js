const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS alcohols (
    id SERIAL PRIMARY KEY,
    alcohol VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS cocktails (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    alcohol_id INTEGER NOT NULL REFERENCES alcohols(id),
    ingredients VARCHAR(256),
    served VARCHAR(256),
    garnish VARCHAR(256),
    tried BOOLEAN,
    image VARCHAR(256)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });