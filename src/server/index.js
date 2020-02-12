const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
  });
});

app.listen(7073, () => console.log('Listening on port 7070!'));
