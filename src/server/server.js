const express = require('express');
const path = require('path');

const app = express();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '../..', 'build')));

app.get('/api/home', function (req, res) {
  res.send([
    {
    title:'ha',
    number: 1,
    currency: 1,
    involve: [0, 1, 2]
    }]);
});

app.get('/api/user/:userid', function (req, res) {
  res.send('user ' + req.params.userid);
});

app.get('/api/summary', function (req, res) {
  res.send('summary');
});

app.post('/api/new', function (req, res) {
  res.send(req.body);
});

app.post('/api/edit', function (req, res) {
  res.send(req.body);
});

// Always return the main index.html, so react-router render the route in the client
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

module.exports = app;