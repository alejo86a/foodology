class MapService {

    getClosedPlaces(latitude, longitude, km) {
        const kmToDegree = 1/111.1;

        return {
            north: {
                latitude: latitude+kmToDegree*km,
                longitude
            },
            east: {
                latitude,
                longitude: latitude-kmToDegree*km
            },
            south: {
                latitude: latitude-kmToDegree*km,
                longitude
            }
            ,west: {
                latitude,
                longitude: latitude+kmToDegree*km
            }
        };
    }
}

module.exports = new MapService();