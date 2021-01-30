const express = require('express');
const { join } = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = process.env.PORT || 5000;

const publicPath = join(__dirname, 'dist');

app.use(express.static(publicPath));

app.use('/api/headerService', createProxyMiddleware('http://localhost:5001'));
app.use('/api/hostedbyService', createProxyMiddleware('http://localhost:5002'));

app.get('*', (_req, res) => {
    res.sendFile(join(publicPath, 'index.html'), (err) => {
        if (err) throw err;
    });
});

app.listen(port, () => console.log(`Proxy started on port ${port}...`));
