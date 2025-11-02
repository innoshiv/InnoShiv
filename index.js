// index.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Express + Axios app!');
});

// Example route that fetches data from an external API
app.get('/joke', async (req, res) => {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
