const { getWeatherForecast } = require("../services/weatherService");

async function handleWeatherForecastCommand(location, days, units) {
  try {
    const data = await getWeatherForecast(location, days, units);

    for (let i = 0; i < data.list.length; i += 8) {
      console.log(`${data.city.name} (${data.city.country})`);
      console.log(new Date(data.list[i].dt * 1000).toLocaleDateString());
      console.log(`> Weather: ${data.list[i].weather[0].description}`);
      console.log(
        `> Temperature: ${data.list[i].main.temp} ${
          units === "metric" ? "°C" : "°F"
        }`
      );
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

module.exports = handleWeatherForecastCommand;
