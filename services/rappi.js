const fetch = require('node-fetch');

class RappiService {
    url ='https://example.com';
    headers = {
        "Content-Type": "application/json",
        "client_id": "1001125",
        "client_secret": "876JHG76UKFJYGVHf867rFUTFGHCJ8JHV"
    }

    async getRestaurantes(latitude, longitude) {
        const { deliverycompany } = req.params;
        const { latitude, longitude } = req.body;


        return fetch(url, { method: 'POST', headers: headers, body: data})
        .then((res) => {
           return res.json()
      });
    }
}

module.exports = new RappiService();