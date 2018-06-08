//TAs: how do I get rid of this linter error on line 5?
const URL = 'http://localhost:3000/api';
const WALRUSES_URL = `${URL}/walruses`;

export function getWalruses() {
  return fetch(WALRUSES_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
}

export function addWalrus(walrus) {
  return fetch(WALRUSES_URL, {
  method: 'POST',  
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(walrus)
  })
  .then(response => response.json());
}

export function deleteWalrus(id) {
  return fetch(`${WALRUSES_URL}/${walrus.id}`, {
    method: 'DELETE'
  })
    .then(response => response.json());
}
export function getTypes () {
  return fetch(`${URL}/types`, {
    headers: { 'Content-Type': 'application/json'}
  })
  .then(response => response.json());
}
