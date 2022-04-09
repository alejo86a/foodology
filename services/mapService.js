const CheapRuler = require('cheap-ruler');
const config = require("config");

class MapService {

    getClosedPlaces(latitude, longitude, km) {
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

    resumeRestaurantsPosition(north, south, east, west) {
        return config.get("foodology.restaurantes").map(r => {
            const northPosition = north?.findIndex(t=>t===r.title);
            const southPosition = south?.findIndex(t=>t===r.title);
            const eastPosition = east?.findIndex(t=>t===r.title);
            const westPosition = west?.findIndex(t=>t===r.title);
            return {
                restaurante: r.title,
                position: (northPosition===-1?0:northPosition + southPosition===-1?0:southPosition + eastPosition===-1?0:eastPosition + westPosition===-1?0:westPosition)/4
        }
        });
    }
}

module.exports = new MapService();