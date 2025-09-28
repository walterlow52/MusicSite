import fetch from 'node-fetch';

// Replace with the access token you received (console err may pop up if token expires; go to api_fetch and run it for a new token)
const accessToken = 'BQBerDX9tnrlhojb4gjd2znqbuI9uShaIHT-dgMshPeLF2Xh_qvBhsutrrFkcnQoFovTH5TtO4diaRxQw687fchq8wXgnvkJfJOQUbrW42dlRNPc23R3G1cp4XlPuE0dkwg2WP7nh6Y';  

// Define the query (e.g., a song name or artist)
const query = "dahlia";

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

