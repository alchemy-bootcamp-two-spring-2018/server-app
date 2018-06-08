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
  return fetch(`${BOARDGAMES_URL}/${boardGame.id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(boardGame)
  })
    .then(response => response.json());
}


export function deleteBoardGame(id) {
  return fetch(`${BOARDGAMES_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json());
}


export function getCategories() {
  return fetch(`${URL}/categories`, {
    headers: { 'Content-type': 'application/json' }
  })
    .then(response => response.json());
}



