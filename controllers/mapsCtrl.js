const rappiService = require('../services/rappiService');
const RappiService = require('../services/rappiService');
class MapsCtrl {
    async listPositions(req, res, next) {
        const { deliverycompany } = req.params;
        const { latitude, longitude } = req.body;

        const response = await rappiService.getRestaurantes(latitude,longitude)


        return res.status(200).json({
            status: `success`,
            message: `found`,
            latitude,
            longitude,
            deliverycompany,
            response
        }).end();
    }
}

module.exports = new MapsCtrl();