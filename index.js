const express = require('express');
const { join } = require('path');
const headerArgs = require('./routes/headerRoutes');
const hostedbyArgs = require('./routes/hostedbyRoutes');

const app = express();
const port = process.env.PORT || 5000;
const publicPath = join(__dirname, 'dist');

app.use(express.static(publicPath, { maxAge: 3600000 }));

app.use(...headerArgs);
app.use(...hostedbyArgs);

app.get('*', (_req, res) => {
    res.sendFile(join(publicPath, 'index.html'), (err) => {
        if (err) throw err;
    });
});

app.listen(port, () => console.log(`Proxy started on port ${port}...`));
