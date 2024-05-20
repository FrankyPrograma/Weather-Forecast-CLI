const ApiConfig = require("../utils/apiConfig");

async function getWeatherForecast(location, days = 1, units = "metric") {
  if (days > 5 || days < 1) {
    throw new Error(
      "Forecast day limit exceeded. Maximum is 5 days and Minimum is 1 day."
    );
  }

  const API_KEY = ApiConfig.getApiKey();
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=${
    days * 8
  }&units=${units}&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== "200") {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw new Error(`Error fetching weather forecast: ${error.message}`);
  }
}

module.exports = {
  getWeatherForecast,
};
