const pg = require(pg);
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/walruses';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      CREATE TABLE IF NOT EXISTS walruses (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50),
        weight INTEGER,
        type VARCHAR(30),
        fictional BOOLEAN,
        descriptionb VARCHAR(256)
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