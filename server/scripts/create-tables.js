const client = require('../db-client');

client.query(`
  
  CREATE TABLE IF NOT EXISTS types (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50),
    fictional BOOLEAN,
  );
  
  CREATE TABLE IF NOT EXISTS walruses (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        weight INTEGER,
        url VARCHAR(50),
        photo_url VARCHAR(50),
        description VARCHAR(512)
      );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });