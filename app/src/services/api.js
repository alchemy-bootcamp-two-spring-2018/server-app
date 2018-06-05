export function getMeleeCharacters() {
  return fetch('http://localhost:3030/api/meleecharacters', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addMeleeCharacter(meleeCharacters) {
  return fetch('http://localhost:3030/api/meleecharacters', {
    method: 'POST',
    headers: { 'content-Type': 'application/json' },
    body: JSON.stringify(meleeCharacters)
  })
    .then(response => response.json());
}