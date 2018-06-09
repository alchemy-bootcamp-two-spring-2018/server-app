const client = require('../db-client');
const countries = require('./countries.json');

Promise.all(
  countries.map(country => {
    return client.query(`
        INSERT INTO countries (name)
        VALUES ($1);
    `,
    [country.name]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());