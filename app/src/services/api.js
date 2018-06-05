export function getBoardGames() {
  return fetch('http://localhost:3000/api/boardGames', {
    headers: { 'Content-type': 'application/json' }
  })
    .then(response => response.json());
}

export function addBoardGame(boardGame) {
  return fetch('http://localhost:3000/api/boardGames', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(boardGame)
  })
    .then(response => response.json())
    .then(console.log('addBoardGame function: done'));
}