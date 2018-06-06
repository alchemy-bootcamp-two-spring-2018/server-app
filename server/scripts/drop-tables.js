const pg = require(pg);
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/walruses';
const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    return client.query(`
      DROP TABLE IF EXISTS walruses;
    `);
  })
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });