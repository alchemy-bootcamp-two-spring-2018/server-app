
const URL = 'http://localhost:3000/api';
const AMPS_URL = `${URL}/amps`;

export function getAmps() {
  return fetch(AMPS_URL, {
    header: { 'Content-Type': 'application/json', }
  })
    .then(response => response.json());
}

export function addAmp(amp) {
  return fetch(AMPS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.(amp)
  })
    .then(response => response.json()); 
}

export function updateAmp(amp) {
  return fetch(`${AMPS_URL}/${amp.id}`, {
    method: 'PUT',
    header: { 'Content-Type': 'application/json' },
    body: JSON.(amp)
  })
    .then(response => response.json());
}

export function removeAmp(id) {
  return fetch(`${AMPS_URL}/${id}`, {
    method: 'DELETE' 
  })
    .then(response => response.json());
}

export function getCountries() {
  return fetch(`${URL}/countries`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}