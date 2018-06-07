const client = require('../db-client');
const subscriptions = require('../data/subscriptions.json');

Promise.all(
  subscriptions.map(subscription => {
    return client.query(`
      INSERT INTO subscriptions (name, purpose_id, price, ads)
      VALUES ($1, $2, $3, $4);
    `,
    [subscription.name, subscription.purpose_id, subscription.price, subscription.ads]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed sub data load successful'),
    err => console.error(err)
  )
  .then(() => client.end());