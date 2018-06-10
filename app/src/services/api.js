

export function getClimbingLocations() {
  return fetch('http://localhost:3000/api/climbingLocations', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addLocation(location){
  return fetch('http://localhost:3000/api/climbingLocations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(location)
  })
    .then(response => response.json());
}