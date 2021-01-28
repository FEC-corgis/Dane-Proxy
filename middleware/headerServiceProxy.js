const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res, next) => {
    const options = {
        target: 'http://localhost:5001',
        changeOrigin: true,
        ws: true,
    };
};
