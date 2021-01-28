const { createProxyMiddleware } = require('http-proxy-middleware');
const { headerCache } = require('../middleware/headerCache');

module.exports = [
    '/api/headerService/:propertyId',
    headerCache,
    createProxyMiddleware('http://localhost:5001'),
];
