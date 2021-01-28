const { hostedbyCache } = require('../middleware/hostedbyCache');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = [
    '/api/hostedbyService/:propertyId',
    hostedbyCache,
    createProxyMiddleware('http://localhost:5002'),
];
