// APP ID ACCESS
const appid = "26a3020b426b79dddcf22bfbc10603a5";

// Geocoding API
export const petitionCity = async (city) => {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${appid}&lang=es`;
  const resp = await fetch(url);
  try {
    const data = await resp.json();
    const geocoding = data.map((results) => ({
      name: results.name,
      lat: results.lat,
      lon: results.lon,
      state: results.state,
    }));
    return geocoding;
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
  }
};

// Current weather data API
export const petitionWeatherCity = async (latCity, lonCity) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latCity}&lon=${lonCity}&units=metric&appid=${appid}&lang=es`;
  const resp = await fetch(url);
  try {
    const data = await resp.json();
    const cityClimateData = data.weather.map((results) => ({
      id: results.id,
      country: data.sys.country,
      name: data.name,
      description: results.description,
      icon: results.icon,
      temp: data.main.temp,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      clouds: data.clouds.all,
      pressure: data.main.pressure,
    }));
    return cityClimateData;
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
  }
};

export const petitionForecastCity = async (latCity, lonCity) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latCity}&lon=${lonCity}&units=metric&cnt=6&appid=${appid}&lang=es`;
  const resp = await fetch(url);
  try {
    const data = await resp.json();
    const cityWeatherDataForecast = data.list.map((results) => ({
      dt: results.dt,
      temp: results.main.temp,
      country: data.city.country,
      name: data.city.name,
      dt_txt: results.dt_txt,
      description: results.weather[0].description,
      icon: results.weather[0].icon,
    }));

    return cityWeatherDataForecast;
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
  }
};
