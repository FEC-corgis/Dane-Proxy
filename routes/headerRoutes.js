const { headerCache } = require('../middleware/headerCache');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = [
    '/api/headerService/:propertyId',
    headerCache,
    createProxyMiddleware('http://localhost:5001'),
];
