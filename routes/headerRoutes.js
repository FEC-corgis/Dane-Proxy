const { createProxyMiddleware } = require('http-proxy-middleware');
const { headerCache } = require('../middleware/headerCache');
const client = require('../constants/client');

module.exports = [
    '/api/headerService/:propertyId',
    headerCache,
    createProxyMiddleware({
        target: 'http://localhost:5001',
        onProxyRes: (proxyRes, req, _res) => {
            const { propertyId } = req.params;
            proxyRes.on('data', (data) => {
                const cacheData = data.toString();
                client.setex(`header${propertyId}`, 3600, cacheData);
            });
        },
    }),
];
