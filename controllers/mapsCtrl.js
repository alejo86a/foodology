const rappiService = require('../services/rappiService');
const MapService = require('../services/mapService');
class MapsCtrl {
    async listPositions(req, res, next) {
        const { deliverycompany } = req.params;
        const { latitude, longitude } = req.body;
        let response;

        try{
            response = await rappiService.getRestaurantes(latitude,longitude)

        } catch (e) {

        }

        const closedPlaces = MapService.getClosedPlaces(latitude,longitude,5)


        return res.status(200).json({
            status: `success`,
            message: `found`,
            latitude,
            longitude,
            deliverycompany,
            closedPlaces,
            data: response.widgets[2].data
        }).end();
    }
}

module.exports = new MapsCtrl();