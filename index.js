const express = require('express');
const { S3 } = require('aws-sdk');
const headerArgs = require('./routes/headerRoutes');
const hostedbyArgs = require('./routes/hostedbyRoutes');

const s3 = new S3();
const app = express();
const port = process.env.PORT || 5000;

app.use(...headerArgs);
app.use(...hostedbyArgs);

app.get('*', (_req, res) => {
    const params = {
        Bucket: 'fec-corgis',
        Key: 'static/index.html',
    };

    s3.getObject(params)
        .on('httpHeaders', (code, headers) => {
            res.set('Cache-Control', 'public, max-age=31557600');
        })
        .createReadStream()
        .pipe(res);
});

app.listen(port, () => console.log(`Proxy started on port ${port}...`));
