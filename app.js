const express = require('express');
const clientRouter = require('./routes/clientRouter.js');
const globalErrorHandler  = require('./controllers/errorController.js')

const app = express();
app.use(express.json());

app.use('/api/v1/clients', clientRouter)

app.use(globalErrorHandler);

module.exports = app;