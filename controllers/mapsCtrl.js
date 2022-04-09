const rappiService = require('../services/rappiService');
const MapService = require('../services/mapService');
class MapsCtrl {
    async listPositions(req, res, next) {
        const { deliverycompany } = req.params;
        const { latitude, longitude } = req.body;
        let response;
        const closedPlaces = MapService.getClosedPlaces(latitude,longitude,5)

        // Promise.all([
        //     rappiService.getRestaurantes(closedPlaces.north),
        // ]).then(
        //     value => response=value[0]
        // )

        // try{
        //     response = await rappiService.getRestaurantes(latitude,longitude)

        // } catch (e) {

        // }

        try{
            response = await rappiService.getRestaurantes(closedPlaces.north.latitude,closedPlaces.north.longitude)

        } catch (e) {

        }

        console.log('closedPlaces',closedPlaces)



        return res.status(200).json({
            status: `success`,
            message: `found`,
            latitude,
            longitude,
            deliverycompany,
            closedPlaces,
            data: response
        }).end();
    }
}

module.exports = new MapsCtrl();