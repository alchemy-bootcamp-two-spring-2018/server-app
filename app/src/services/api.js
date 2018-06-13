const URL = 'http://localhost:3030/api';
const MELEECHARACTERS_URL = `${URL}/meleeCharacters`;

export function getMeleeCharacters() {
  return fetch(MELEECHARACTERS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addMeleeCharacter(character) {
  return fetch(MELEECHARACTERS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(character)
  })
    .then(response => response.json());
}

export function updateMeleeCharacter(character) {
  console.log('character id is:', character.id);
  return fetch(`${MELEECHARACTERS_URL}/${character.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(character)
  })
    .then(response => response.json());
}

export function removeMeleeCharacter(id) {
  return fetch(`${MELEECHARACTERS_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json());
}

export function getStages() {
  return fetch(`${URL}/stages`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}


