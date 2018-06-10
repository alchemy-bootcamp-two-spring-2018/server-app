const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS guitars (
      id SERIAL PRIMARY KEY,
      brand VARCHAR(256) UNIQUE NOT NULL,
      type VARCHAR(256) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS guitarists (
      id SERIAL PRIMARY KEY,
      name VARCHAR(256) UNIQUE,
      age INTEGER,
      living BOOLEAN,
      guitar_id INTEGER NOT NULL REFERENCES guitars(id),
      img_url VARCHAR(256)
    );
  `)
  .then(
    () => console.log('dunn did some table makin\''),
    err => console.log('\nERRORR BILL BOBBINSON!!\n\n', err)
  )
  .then(() => {
    client.end();
  });