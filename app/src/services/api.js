const URL = 'http://localhost:3000/api';
const BOARDGAMES_URL = `${URL}/boardGames`;

export function getBoardGames() {
  return fetch(BOARDGAMES_URL, {
    headers: { 'Content-type': 'application/json' }
  })
    .then(response => response.json());
}

export function addBoardGame(boardGame) {
  return fetch(BOARDGAMES_URL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(boardGame)
  })
    .then(response => response.json());
}


export function updateBoardGame(boardGame) {
  console.log('updating', boardGame);
}


export function deleteBoardGame(boardGame) {
  return fetch(BOARDGAMES_URL + boardGame.id, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
  })
    .then(response => response.json());
}


export function getCategories() {
  return fetch(`${URL}/categories`, {
    headers: { 'Content-type': 'application/json' }
  })
    .then(response => response.json());
}



