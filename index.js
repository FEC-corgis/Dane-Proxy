const express = require('express');
const { join } = require('path');
const headerServiceRoutes = require('./routes/headerRoutes');
const app = express();
const port = process.env.PORT || 5000;

const publicPath = join(__dirname, 'dist');

app.use(express.static(publicPath));
app.use('/api/headerService', headerServiceRoutes);

app.get('*', (_req, res) => {
    res.sendFile(join(publicPath, 'index.html'), (err) => {
        if (err) throw err;
    });
});

app.listen(port, () => console.log(`Proxy started on port ${port}...`));
