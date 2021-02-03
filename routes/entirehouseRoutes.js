// const client = require('../constants/client');
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = [
    '/propertyDetails',
    createProxyMiddleware({
        target: 'http://localhost:5545',
        // onProxyRes: (proxyRes, req, res) => {
        //     const { propertyId } = req.params;
        //     proxyRes.on('data', (data) => {
        //         if (res.statusCode < 400) {
        //             const cacheData = data.toString();
        //             client.setex(`entirehouse${propertyId}`, 3600, cacheData);
        //         }
        //     });
        // },
    }),
];
