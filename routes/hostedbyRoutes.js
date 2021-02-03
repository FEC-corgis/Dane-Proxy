const { createProxyMiddleware } = require('http-proxy-middleware');
const { hostedbyCache } = require('../middleware/hostedbyCache');

module.exports = [
    '/api/hostedbyService/:propertyId',
    hostedbyCache,
    createProxyMiddleware('http://localhost:5002'),
];
