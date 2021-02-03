const client = require('../constants/client');

module.exports.headerCache = (req, res, next) => {
    const key = `entirehouse${req.params.propertyId}`;
    client.get(key, (err, data) => {
        if (err) throw err;

        if (data != null) {
            return res.status(200).send(data);
        }
        next();
    });
};
