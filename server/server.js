const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ItemList = require('./itemList.js');

const app = express();
var itemList = new ItemList();

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use(bodyParser.json());

app.get('/api/home', function (req, res) {
  itemList.get(null, function (result, err) {
    res.send(result, err ? 500 : 200);
  });
});

app.get('/api/user/:userid', function (req, res) {
  itemList.get(parseInt(req.params.userid, 10), function (result, err) {
    res.send(result, err ? 500 : 200);
  });
});

app.get('/api/summary', function (req, res) {
  itemList.computeSummary(function (result, err) {
    res.send(result, err ? 500 : 200);
  });
});

app.post('/api/new', function (req, res) {
  try {
    itemList.add(req.body, function (result, err) {
      res.send(result, err ? 500 : 200);
    });
  } catch (err) {
    res.send(err, 500);
  }
});

app.post('/api/edit', function (req, res) {
  try {
    itemList.edit(req.body, function (result, err) {
      res.send(result, err ? 500 : 200);
    });
  } catch (err) {
    res.send(err, 500);
  }
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