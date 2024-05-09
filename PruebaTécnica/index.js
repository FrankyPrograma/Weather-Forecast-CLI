require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

async function getCurrentWeather(location, units = "metric") {
  const API_KEY = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${units}&appid=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Print the data
    console.log(`${data.name} (${data.sys.country})`);
    console.log(new Date().toLocaleDateString());
    console.log(`Weather: ${data.weather[0].description}`);
    console.log(
      `Temperature: ${data.main.temp} ${units === "metric" ? "°C" : "°F"}`
    );
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Get the arguments from the command line and hide the bin
const argv = yargs(hideBin(process.argv)).argv;

if (argv._[0] === "current" && argv._[1]) {
  getCurrentWeather(argv._[1], argv.units);
}

/**
 * Use the following command to run the script:
 * node index.js current Madrid,ES
 * node index.js current Madrid,ES --units=imperial
 */
