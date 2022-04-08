const axios = require('axios');
const config = require("config");
const fetch = require("node-fetch");

class RappiService {
    headers = {
        "Content-Type": "application/json",
        "client_id": "1001125",
        "authorization": "Bearer "+config.get("rappi.token")
    }

    async getRestaurantes(latitude, longitude) {

        const url = `${config.get("rappi.baseUrl")}lat=${latitude}&lng=${longitude}&view=web`;


        return fetch(url, { 
            method: 'GET', headers: this.headers })
        .then((res) => {
           return res.json()
      });
    }
}

module.exports = new RappiService();