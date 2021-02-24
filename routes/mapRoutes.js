const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = [
    '/map/:pId',
    createProxyMiddleware({
        target: `http://${process.env.MAP_DOMAIN}`,
    }),
];
