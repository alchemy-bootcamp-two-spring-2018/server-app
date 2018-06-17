const client = require('../db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS formats (
    id SERIAL PRIMARY KEY,  
    format VARCHAR(256) NOT NULL
    );

  CREATE TABLE IF NOT EXISTS podcasts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256),
    formattype VARCHAR(256) NOT NULL,
    publisher VARCHAR(256),
    averageminutes INTEGER,
    category VARCHAR(256),
    nsfw BOOLEAN,
    description VARCHAR(1024)
    );
  `)

  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });

 