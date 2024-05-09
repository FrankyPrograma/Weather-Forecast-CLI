require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

async function getWeatherForecast(location, days = 1, units = "metric") {
  // Throw an error if the number of days is greater than 5
  if (days > 5 || days < 1) {
    throw new Error(
      "Forecast day limit exceeded. Maximum is 5 days and Minimum is 1 day."
    );
  }

  const API_KEY = process.env.API_KEY;

  // The API returns 8 forecasts per day (3-hour intervals) so we multiply the days by 8
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=${
    days * 8
  }&units=${units}&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Print the data
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
    console.error(`Error: ${error}`);
  }
}

// Get the arguments from the command line and hide the bin
const argv = yargs(hideBin(process.argv)).argv;

if (argv._[0] === "forecast" && argv._[1]) {
  getWeatherForecast(argv._[1], argv.days, argv.units);
}

/**
 * Use the following command to run the script:
 * node index2.js forecast Santander,ES --days=2 --units=imperial
 * node index2.js forecast Santander,ES --days=3
 */
