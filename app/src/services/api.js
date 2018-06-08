const URL = 'http://localhost:3000/api';
const PODCASTS_URL = `${URL}/podcasts`;

export function getPodcasts() {
  return fetch(PODCASTS_URL, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}

export function addPodcast(podcast) {
  return fetch(PODCASTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(podcast)
  })
    .then(response => response.json());
}

export function updatePodcast(podcast) {
  return fetch(`${PODCASTS_URL}/${podcast.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(podcast)
  })
    .then(response => response.json());
}

export function removePodcast(id) {
  return fetch(`${PODCASTS_URL}/${id}`, {
    method: 'DELETE'  
  })
    .then(response => response.json());
}

export function getFormats() {
  return fetch(`$URL}/formats`, {
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json());
}