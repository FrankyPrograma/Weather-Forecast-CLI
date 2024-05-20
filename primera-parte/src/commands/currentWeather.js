const { getCurrentWeather } = require("../services/weatherService");

async function handleCurrentWeatherCommand(location, units) {
  try {
    const weatherData = await getCurrentWeather(location, units);
    console.log(`${weatherData.name} (${weatherData.country})`);
    console.log(weatherData.date);
    console.log(`Weather: ${weatherData.weather}`);
    console.log(`Temperature: ${weatherData.temperature}`);
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = handleCurrentWeatherCommand;
