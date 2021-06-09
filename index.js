const express = require('express');
const routes = require('./src/routes');
require('dotenv').config();

const { PORT } = process.env;

const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Online');
});

app.use('/', routes);

app.listen(PORT, () => console.log('Online'));
