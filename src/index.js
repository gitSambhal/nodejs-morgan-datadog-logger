require('dotenv').config();
const express = require('express');
const { morganMiddleware } = require('./morgan-middleware');
require('dd-trace').init();

const app = express();

const PORT = process.env.PORT || 3000;
app.use(morganMiddleware);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`);
});
