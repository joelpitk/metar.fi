const get = async (resource) => {
  try {
    const response = await fetch(resource);
    return response.json();
  } catch (error) {
    return { error };
  }
}

const api = {
  async getMetarAirports() {
    return get("/api/airports");
  },
  async getMetar(airportCode) {
    return get(`/api/airports/${airportCode}/metar`);
  }
};

export default api;
