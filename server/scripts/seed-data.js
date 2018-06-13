
const client = require('../db-client');
const guitars = require('./guitars.json');

Promise.all(
  guitars.map(guitar => {
    return client.query(`
        INSERT INTO guitars (brand, type)
        VALUES ($1, $2);
    `,
    [guitar.brand, guitar.type]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed\'s gonna groooohhhhh!'),
    err => console.error(err)
  )
  .then(() => client.end());