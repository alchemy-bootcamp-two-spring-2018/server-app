const client = require('../db-client');
const types = require('.types.json');
const walruses = require('./walruses.json');

Promise.all(
  types.map(type => {
    return client.query(`
    INSERT INTO types (type, fictional)
    VALUES ($1, $2);
    `,
    [type.name, type.fictional]
  ).then(result => result.rows[0];
  })
)
  .then(
    () => console.log('seed data loaded successfully'),
    err => console.error(err)
  )
  .then(() => client.end());
