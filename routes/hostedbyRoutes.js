const { createProxyMiddleware } = require('http-proxy-middleware');
const { hostedbyCache } = require('../middleware/hostedbyCache');
const client = require('../constants/client');

module.exports = [
    '/api/hostedbyService/:propertyId',
    hostedbyCache,
    createProxyMiddleware({
        target: 'http://localhost:5002',
        onProxyRes: (proxyRes, req, _res) => {
            const { propertyId } = req.params;
            proxyRes.on('data', (data) => {
                const cacheData = data.toString();
                client.setex(`hostedby${propertyId}`, 3600, cacheData);
            });
        },
    }),
];
