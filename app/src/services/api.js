const URL = 'http://localhost:3000/api';
const RAPPERS_URL = '${URL}/rappers';

export function getRappers() {
  return fetch('http://localhost:3000/api/rappers', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addRappers(rapper) {
  return fetch('http://localhost:3000/api/rappers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rapper)
  })
    .then(response => response.json());
}

export function updateRappers(rapper) {
  console.log('HERE IS LOG IN API', rapper.id);
  return fetch('http://localhost:3000/api/rappers/' + rapper.id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(rapper)
  })
    .then(response => response.json());
}

export function deleteRappers(id) {
  return fetch('http://localhost:3000/api/rappers/' + id, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application.json' },
  })
    .then(response => response.json());
}

export function getPositions() {
  return fetch(`${URL}/positions`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}