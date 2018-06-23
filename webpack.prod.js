/*eslint-disable*/
const clientConfig = require('./config/webpack.config.prod.client');
const serverConfig = require('./config/webpack.config.prod.server');

module.exports = [clientConfig, serverConfig];
