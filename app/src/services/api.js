const URL = 'http://localhost:1337/api';
const GUITARISTS_URL = `${URL}/guitarists`;

export function getGuitarists() {
  return fetch('http://localhost:1337/api/guitarists', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addGuitarist(guitarist) {
  return fetch(GUITARISTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(guitarist)
  })
    .then(response => response.json());
}

export function updateGuitarist(guitarist) {
  return fetch(`${GUITARISTS_URL}/${guitarist.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(guitarist)
  })
    .then(response => response.json());
}

export function removeGuitarist(guitarist) {
  return fetch(`${GUITARISTS_URL}/${guitarist.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function getCurrent(guitarist) {
  return fetch(`${GUITARISTS_URL}/${guitarist.id}`, {
    headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json());
}

export function getGuitars() {
  return fetch(`${URL}/guitars`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}