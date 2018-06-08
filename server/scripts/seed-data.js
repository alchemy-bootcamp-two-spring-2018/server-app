const client = require('../db-client');
const classifications = require('./classifications.json');

Promise.all(
  classifications.map(classification => {
    return client.query(`
        INSERT INTO classifications (classification)
        VALUES ($1);
    `,
    [classification.classification]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());