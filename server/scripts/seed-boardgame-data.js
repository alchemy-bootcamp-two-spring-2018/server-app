const client = require('../db-client');
const boardGames = require('../data/board-games.json');

Promise.all(
  boardGames.map(game => {
    return client.query(`
      INSERT INTO boardgames (name, published, category_id, min_players, max_players, avg_playing_time, description, owned)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
    `,
    [game.name, game.published, game.categoryID, game.minPlayers, game.maxPlayers, game.avgPlayingTime, game.description, game.owned]
    ).then(result => result.rows[0]);
  })
)
  .then(
    () => console.log('seed board game data load successful'),
    err => console.log(err)
  )
  .then(() => client.end());