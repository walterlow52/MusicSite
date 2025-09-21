import fetch from 'node-fetch';

// Replace with the access token you received
const accessToken = 'BQAecZoWbPaEcQw5FtCACR6TJ5QdYhzuy5h4NN8d8_lM9wpPqK422CEZ_GsLTo9HGWjKkgUBhgk98cd9DwCxgy51Xp_ai-TmKPu-2qHRND4JGBVAueRj5hjCCK06SOMljrceEYecVQ0';  

// Define the query (e.g., a song name or artist)
const query = 'The Color Violet';

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
