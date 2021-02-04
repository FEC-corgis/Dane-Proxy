const express = require('express');
const { S3 } = require('aws-sdk');
const headerArgs = require('./routes/headerRoutes');
const hostedbyArgs = require('./routes/hostedbyRoutes');
const reviewsArgs = require('./routes/reviewsRoutes');
const entirehouseArgs = require('./routes/entirehouseRoutes');
const { join } = require('path');

const s3 = new S3();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(join(__dirname, 'public')));

app.use(...headerArgs);
app.use(...hostedbyArgs);
app.use(...entirehouseArgs);
app.use(...reviewsArgs);

app.get('*', (_req, res) => {
    const params = {
        Bucket: 'fec-corgis',
        Key: 'static/index.html',
    };

    s3.getObject(params).createReadStream().pipe(res);
});

app.listen(port, () => console.log(`Proxy started on port ${port}...`));
