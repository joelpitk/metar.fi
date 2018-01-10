import config from "./config";

const api = {
  async getMetarAirports() {
    const url = `${config.apiUrl}anbdata/airports/weather/metar-stations-list?api_key=${config.apiKey}&format=json&airports=&states=`;
    const response = await fetch(url);
    return response.json();
  },
  async getMetar(airportCode) {
    const url = `${config.apiUrl}anbdata/airports/weather/current-conditions-list?api_key=${config.apiKey}&airports=${airportCode}&format=json&states=`;
    const response = await fetch(url);
    return response.json();
  }
};

export default api;
