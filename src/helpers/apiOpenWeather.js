// Geocoding API
export const petition = async (city) => {
  // const city = "Pasto";
  const appid = "26a3020b426b79dddcf22bfbc10603a5";
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${appid}`;
  const resp = await fetch(url);
  try {
    const data = await resp.json();
    const geocoding = data.map((results) => ({
      name: results.name,
      lat: results.lat,
      lon: results.lon,
      state: results.state,
    }));
    console.log(geocoding);
    return geocoding;
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
  }
};

// Current weather data API
