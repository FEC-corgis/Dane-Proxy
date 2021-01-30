const router = require('express').Router();
const axios = require('axios');

router.get('/photos/:propertyId', async (req, res) => {
    try {
        const { data } = await axios.get(
            `http://localhost:5000/api/photos/${req.params.propertyId}`
        );

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
