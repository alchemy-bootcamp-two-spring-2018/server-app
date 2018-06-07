const client = require('../db-client');

client.query(`
    CREATE TABLE IF NOT EXISTS positions (
        id SERIAL PRIMARY KEY,
        position VARCHAR(256) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS rappers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        born VARCHAR(256),
        role_id INTEGER NOT NULL,
        numalbums INTEGER,
        albums VARCHAR(256),
        aka VARCHAR(256),
        affiliates VARCHAR(256),
        dead BOOLEAN
    );
`)
  .then(
      () => console.log('tables have been created'),
      err => console.log(err)
  )
  .then(() => {
      client.end();
  });

