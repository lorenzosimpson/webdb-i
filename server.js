const express = require('express');
const accountRouter = require('./routers/accountRouter')
const cors = require('cors')

const server = express();


server.use(cors());
server.use(express.json());
server.use('/api/accounts', accountRouter);



module.exports = server;