const client = require('../db-client');
const countries = require('.countries.json');

Promise.all(
  countries.map(country => {
    return client.query(`
        INSERT INTO countries (name, direction)
        VALUES ($1, $2);
    `,
    [country.name, country]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());