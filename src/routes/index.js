const routes = require('express').Router();

const brokerageRoute = require('./brokerageRoute');

routes.use('/brokerage', brokerageRoute);

module.exports = routes;
