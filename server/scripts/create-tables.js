const client = require('../db-client');

client.query(`
  
  CREATE TABLE IF NOT EXISTS types (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50),
    fictional BOOLEAN,
  );
  
  CREATE TABLE IF NOT EXISTS walruses (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        url VARCHAR(256),
        photo_url VARCHAR(256),
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