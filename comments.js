// Create web server

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

const comments = [
  { username: 'test', comment: 'test comment' },
  { username: 'test2', comment: 'another test comment' }
];