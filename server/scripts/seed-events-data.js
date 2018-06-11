const client = require('../db-client');
const events = require('./sample-events.json');

Promise.all(
  events.map(event => {
    return client.query(`
      INSERT INTO events (name, date, time, game_id, guests_allowed, message)
        VALUES ($1, $2, $3, $4, $5, $6);
    `,
    [event.name, event.date, event.time, event.gameID, event.guestsAllowed, event.message]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed event data load successful'),
    err => console.log(err)
  )
  .then(() => client.end());