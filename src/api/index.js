import config from "./config";

const apiUrl = (resource) =>
  `${config.apiUrl}anbdata/airports/weather/${resource}&api_key=${config.apiKey}&format=json`

const get = async (resource) => {
  try {
    const url = apiUrl(resource);
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return { error };
  }
}

const api = {
  async getMetarAirports() {
    return get("metar-stations-list?airports=&states=");
  },
  async getMetar(airportCode) {
    return get(`current-conditions-list?airports=${airportCode}&states=`);
  }
};

export default api;
