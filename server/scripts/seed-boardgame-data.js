const client = require('../db-client');
const boardGames = require('./board-games.json');

Promise.all(
  boardGames.map(game => {
    return client.query(`
      INSERT INTO boardgames (name, category_id, players, avg_playing_time, description)
        VALUES ($1, $2, $3, $4, $5);
    `,
    [game.name, game.categoryID, game.players, game.avgPlayingTime, game.description]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed board game data load successful'),
    err => console.log(err)
  )
  .then(() => client.end());