

export function getAmps() {
  return fetch('http://localhost:3000/api/amps', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addAmp(amp) {
  return fetch('http://localhost:3000/api/amps', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(amp)
  })
    .then(response => response.json()); 
}