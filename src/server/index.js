const express = require('express');
const dataMock = require('../data.json');

const app = express();

app.use(express.static('dist'));

app.get('/api/getData', (req, res) => {
  res.json(dataMock);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
  });
});

app.listen(7073, () => console.log('Listening on port 7070!'));
