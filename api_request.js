import fetch from 'node-fetch';

// Replace with the access token you received (console err may pop up if token expires; go to api_fetch and run it for a new token)
const accessToken = 'BQA64Pt6qHv2BUB3dWaQz_irkM3L2SwSemltkzF1ZwNRTznNKLDpV3vqLuPPv3iJ00hdYqQh_qoG1pOatT1RLdyoYiSykh5_SVHjcNsQm1vEmPg3P43XpmHuv2TePKee1aATb13dx3s';  

// Define the query (e.g., a song name or artist)
const query = "wild babymonster";

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

