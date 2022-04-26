const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const usersRoutes = require('./routes/users');
const trackersRoutes = require('./routes/tracker');
const habitsRoutes = require('./routes/habits');

server.use('/users', usersRoutes);
server.use('/trackers', trackersRoutes);
server.use('/habits', habitsRoutes);

server.get('/', (req, res) => res.send('Welcome to A.Day!'));

module.exports = server;
