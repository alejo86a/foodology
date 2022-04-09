const CheapRuler = require('cheap-ruler');

class MapService {

    getClosedPlaces(latitude, longitude, km) {
        const kmToDegree = 1/111.1;
        const ruler = new CheapRuler(latitude, 'kilometers');

        const bbox = ruler.bufferPoint([latitude, longitude], km);

        return {
            east: {
                latitude,
                longitude: bbox[3],
            },
            north: {
                latitude : bbox[2],
                longitude
            },
            west: {
                latitude,
                longitude: bbox[1],
            }
            ,south: {
                latitude: bbox[0],
                longitude 
            }
        };
    }
}

module.exports = new MapService();