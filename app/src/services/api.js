
const URL = 'http://localhost:3000/api';
const LOCATIONS_URL = `${URL}/neighborhoods`;

export function getLocations() {
  return fetch('http://localhost:3000/api/locations', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addLocation(location) {
  return fetch('http://localhost:3000/api/locations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(location)
  })
    .then(response => response.json());
}
// TO DO: marty 21 updateLocation(location)

export function removeLocation(id) {
  return fetch(`${LOCATIONS_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json());
}

