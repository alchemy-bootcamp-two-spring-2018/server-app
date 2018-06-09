const URL = 'http://localhost:3000/api';
const EVENTS_URL = `${URL}/events`;

export function getEvents() {
  return fetch(EVENTS_URL, {
    headers: { 'Content-type': 'application/json' }
  })
    .then(response => response.json());
}

export function addEvent(event) {
  return fetch(EVENTS_URL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(event)
  })
    .then(response => response.json());
}


export function updateEvent(event) {
  return fetch(`${EVENTS_URL}/${event.id}`, {
    method: 'PUT',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(event)
  })
    .then(response => response.json());
}


export function deleteEvent(id) {
  return fetch(`${EVENTS_URL}/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json());
}


export function getBoardGames() {
  return fetch(`${URL}/boardgames`, {
    headers: { 'Content-type': 'application/json' }
  })
    .then(response => response.json());
}

export function getCategories() {
  return fetch(`${URL}/categories`, {
    headers: { 'Content-type': 'application/json' }
  })
    .then(response => response.json());
}



