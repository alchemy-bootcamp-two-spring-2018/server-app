const client = require('../db-client');
const events = require('./comments.json');

Promise.all(
  events.map(comment => {
    return client.query(`
      INSERT INTO comments (event_id, username, comment)
        VALUES ($1, $2, $3);
    `,
    [comment.eventID, comment.username, comment.comment]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed comment data load successful'),
    err => console.log(err)
  )
  .then(() => client.end());