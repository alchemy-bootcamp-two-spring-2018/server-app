const URL = 'http://localhost:3030/api';
const MELEECHARACTERS_URL = `${URL}/meleeCharacters`;

export function getMeleeCharacters() {
  return fetch(MELEECHARACTERS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addMeleeCharacter(meleeCharacter) {
  return fetch(MELEECHARACTERS_URL, {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify(meleeCharacter)
  })
    .then(response => response.json());
}

export function removeMeleeCharacter(id) {
  return fetch(`${MELEECHARACTERS_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json());
}