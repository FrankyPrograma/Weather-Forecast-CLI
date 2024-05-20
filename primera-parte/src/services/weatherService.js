const ApiConfig = require("../utils/apiConfig");

async function getCurrentWeather(location, units = "metric") {
  const API_KEY = ApiConfig.getApiKey();
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    const result = {
      name: data.name,
      country: data.sys.country,
      date: new Date().toLocaleDateString(),
      weather: data.weather[0].description,
      temperature: `${data.main.temp} ${units === "metric" ? "°C" : "°F"}`,
    };

    return result;
  } catch (error) {
    throw new Error(`Error fetching weather data: ${error.message}`);
  }
}

module.exports = {
  getCurrentWeather,
};
