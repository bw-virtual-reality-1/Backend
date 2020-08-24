const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authMiddleware.js');
const authRouter = require('../auth/authRouter.js');
const funderRouter = require('../fund/funder-router.js');
const fundraiserRouter = require('../fund/fundraiser-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api', authRouter);
server.use('/api/auth/funder', authenticate, funderRouter);
server.use('/api/auth/fundraiser', authenticate, fundraiserRouter);

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up and running...'})
});

module.exports = server;