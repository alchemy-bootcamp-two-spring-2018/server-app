

export function getClimbingLocations() {
  return fetch('http://localhost:3000/api/climbingLocations', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}