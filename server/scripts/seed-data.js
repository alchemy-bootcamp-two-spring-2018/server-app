const client = require('../db-client');
const types = require('.types.json');
const walruses = require('./walruses.json');

Promise.all(
  walruses.map(walruses => {
    return client.query(`
    INSERT INTO walruses (name, fictional, description, photo_url, url)
    VALUES ($1, $2, $3, $4, $5);
    `,
    [walruses.name, walruses.fictional, walruses.description, walruses.photo_url, walruses.url]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('Walruses seed data loaded successfully'),
    err => console.error(err)
  );
types.map(type => {
  return client.query(`
  INSERT INTO types (type, fictional)
  VALUES ($1, $2);
  `,
  [type.type, type.fictional]
  ).then(result => result.rows[0]);
})
  .then(() => client.end());
