export function getPodcasts() {
  return fetch('http://localhost:3000/api/podcasts', {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addPodcast(podcast) {
  return fetch('http://localhost:3000/api/podcasts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(podcast)
  })
    .then(response => response.json());
}

// commented out for now
// export function removePodcast(podcast) {
//   return fetch('http://localhost:3000/api/podcasts', {
//     method: 'DELETE'  
//   })
//     .then(response => response.json());
// }