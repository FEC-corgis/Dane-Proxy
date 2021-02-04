const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = [
    '/propertyDetails',
    createProxyMiddleware({
        target: 'http://localhost:5545',
    }),
];
