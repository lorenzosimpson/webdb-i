const express = require('express');
const accountRouter = require('./routers/accountRouter')
const cors = require('cors')

const server = express();

server.use(express.json());
server.use('/api/accounts', accountRouter);
server.use(cors());


module.exports = server;