const client = require('../db-client');
const formats = require('./formats.json');

Promise.all(
  formats.map(format => {
    return client.query(`
        INSERT INTO formats(format)
        VALUES ($1);
    `,
    [format.format]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed data loaded, thank god.'),
    err => console.error(err)
  )
  .then(() => client.end());