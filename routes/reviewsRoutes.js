const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = [
    '/reviews',
    createProxyMiddleware({
        target: 'http://localhost:1984',
    }),
];
