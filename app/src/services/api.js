
const URL = 'http://localhost:3000/api';
const LOCATIONS_URL = `${URL}/neighborhoods`;

export function getLocations() {
  return fetch(LOCATIONS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addLocation(location) {
  return fetch(LOCATIONS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(location)
  })
    .then(response => response.json());
}

export function updateLocation(location) {
  return fetch(`${LOCATIONS_URL}/${location.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(location)
  })
    .then(response => response.json());
}

export function removeLocation(id) {
  return fetch(`${LOCATIONS_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json());
}

export function getQuadrants() {
  return fetch(`${URL}/quadrants`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

