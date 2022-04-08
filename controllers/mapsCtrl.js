class MapsCtrl {
    async listPositions(req, res, next) {
        const { deliverycompany } = req.params;
        const { latitude, longitude } = req.body;


        return res.status(200).json({
            status: `success`,
            message: `found`,
            latitude,
            longitude,
            deliverycompany
        }).end();
    }
}

module.exports = new MapsCtrl();