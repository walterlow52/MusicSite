import fetch from 'node-fetch';

// Replace with the access token you received (console err may pop up if token expires; go to api_fetch and run it for a new token)
const accessToken = 'BQCyI4PJn0sVHYeHDJCQmDjeyGaczuo57bEXadMKUyvPoLOgWDzL2l_mWY7K5DJ34GNb3fm15SD-qd3gAmkvFmPmBNVQE9R5EQrtIYHEP-AaxrI9GflT2ZiowivshPaqfPb8EhT4faU';  

// Define the query (e.g., a song name or artist)
const query = 'cocoa tea kes';

// Spotify's search endpoint for tracks
const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=1`;

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  },
})
  .then(response => response.json())
  .then(data => {
    if (data.tracks.items.length > 0) {
      const track = data.tracks.items[0];
      console.log(`Track: ${track.name}`);
      console.log(`Artist: ${track.artists[0].name}`);
      console.log(`${track.external_urls.spotify}`);
      console.log(`Album: ${track.album.name}`);
    } else {
      console.log('No track found.');
    }
  })
  .catch(error => console.error('Error fetching track:', error));


// {"img":"","name":"","artist":"","music":""},

