'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const noFoundHandler = require('./errorHandlers/404');
const erroeHandler = require('./errorHandlers/500');

const clothesRoute = require('./routes/clothes');
const foodRoute = require('./routes/food');
const logger = require('./middlewares/logger');

app.use(logger);
app.use(express.json());
app.use(cors());

app.get('/', checkServer);
app.use('/api/v1/clothes', clothesRoute);
app.use('/api/v1/food', foodRoute);
app.use('*', noFoundHandler);
app.use(erroeHandler);

function checkServer(req, res) {
  res.send('Hello From Sukina Class 03!');
}
function start (port) {
  app.listen (port, ()=>{
    console.log(`App is listening on the Port ${port}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
