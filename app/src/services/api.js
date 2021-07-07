

export function getGlucoseLogs() {
  return fetch('http://localhost:3000/api/glucoselogs', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}
 
export function addGlucoseLog(glucoseLog) {
  return fetch('http://localhost:3000/api/glucoselogs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(glucoseLog)
  })
    .then(response => response.json());
}