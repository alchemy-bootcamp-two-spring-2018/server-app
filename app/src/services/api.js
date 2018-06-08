
const URL = 'http://localhost:3000/api';
const MOTORCYCLES_URL = `${URL}/motorcycles`;
export function getMotorcycles() {
  return fetch(MOTORCYCLES_URL, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json());
}

export function addMotorcycle(motorcycle) {
  return fetch(MOTORCYCLES_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(motorcycle)
  })
    .then(response => response.json());
}

export function updateMotorcycle(motorcycle) {
  return fetch(`${MOTORCYCLES_URL}/${motorcycle.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(motorcycle)
  })
    .then(response => response.json());
}

export function removeMotorcycle(motorcycle) {
  return fetch(MOTORCYCLES_URL, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(motorcycle)
  });
}

export function getTypes() {
  return fetch(`${URL}/mototypes`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}