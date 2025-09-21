import fetch from 'node-fetch';
const clientId = '70ef5e8de30e4f44a9a8d9b07ec8c10a';  // Replace with your actual client ID
const clientSecret = 'ff865eb5a9c643debb99071aed00eea6';  // Replace with your actual client secret

const authString = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

// Make a POST request to get the access token
fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Authorization': `Basic ${authString}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'grant_type=client_credentials',
})
  .then(response => response.json())
  .then(data => {
    const accessToken = data.access_token;
    console.log('Access Token:', accessToken);  // Store this token for later use

    // Use this token in subsequent API calls
  })
  .catch(error => console.error('Error fetching token:', error));
