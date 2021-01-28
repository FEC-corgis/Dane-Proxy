const { resolve } = require('path');

exports.header = resolve(
    __dirname,
    '..',
    'HeaderService',
    'frontend',
    'src',
    'index.jsx'
);

exports.headerNodeModules = resolve(
    __dirname,
    '..',
    'HeaderService',
    'node_modules'
);

exports.hostedby = resolve(
    __dirname,
    '..',
    'HostedByService',
    'frontend',
    'src',
    'index.jsx'
);

exports.hostedbyNodeModules = resolve(
    __dirname,
    '..',
    'HostedByService',
    'node_modules'
);
