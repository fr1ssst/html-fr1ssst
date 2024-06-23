// server.js
const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/save-user', (req, res) => {
  const user = req.body;
  fs.writeFileSync('data/new.json', JSON.stringify(user), { encoding: 'utf8', flag: 'w' });
  res.send('User saved successfully!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
