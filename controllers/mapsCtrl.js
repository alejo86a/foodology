const rappiService = require('../services/rappiService');
const MapService = require('../services/mapService');
class MapsCtrl {
    async listPositions(req, res, next) {
        const { deliverycompany } = req.params;
        const { latitude, longitude, km } = req.body;
        const closedPlaces = MapService.getClosedPlaces(latitude,longitude,km)

        const north = await rappiService.getRestaurantes(closedPlaces.north.latitude,closedPlaces.north.longitude)
        const south = await rappiService.getRestaurantes(closedPlaces.south.latitude,closedPlaces.south.longitude)
        const east  = await rappiService.getRestaurantes(closedPlaces.east.latitude,closedPlaces.east.longitude)
        const west = await rappiService.getRestaurantes(closedPlaces.west.latitude,closedPlaces.west.longitude)

        const response  = MapService.resumeRestaurantsPosition(rappiService.getRestaurantsByResponse(north),rappiService.getRestaurantsByResponse(south),rappiService.getRestaurantsByResponse(east),rappiService.getRestaurantsByResponse(west));

        return res.status(200).json(response).end();
    }
}

module.exports = new MapsCtrl();