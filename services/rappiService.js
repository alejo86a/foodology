const axios = require('axios');
const config = require("config");

class RappiService {
    headers = {
        "Content-Type": "application/json",
        "client_id": "1001125",
        "authorization": "Bearer "+config.get("rappi.token")
    }

    async getRestaurantes(latitude, longitude) {

        const url = `${config.get("rappi.baseUrl")}lat=${latitude}&lng=${longitude}$view=web`;


        return axios.get({ baseURL: "https://services.grability.rappi.com/api/ms/home/paginated?lat=6.238537599999999&lng=-75.55159689999999&view=web", headers: this.headers })
        .then((res) => {
           return res.json()
      });
    }
}

module.exports = new RappiService();