const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/explore';
const client = new Client(databaseUrl);


client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS podcasts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(256),
        publisher VARCHAR(256),
        averageminutes INTEGER,
        category VARCHAR(256),
        nsfw BOOLEAN,
        description VARCHAR(1024)
      );
    `);
  })
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });

 