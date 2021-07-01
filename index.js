'use strict';

require('dotenv').config();
const server = require('./src/server');
const port = process.env.PORT || 7000;

server.start (port);

