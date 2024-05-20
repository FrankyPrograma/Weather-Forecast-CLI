const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const handleCurrentWeatherCommand = require("./commands/currentWeather");
require("dotenv").config();

const argv = yargs(hideBin(process.argv)).argv;

if (argv._[0] === "current" && argv._[1]) {
  handleCurrentWeatherCommand(argv._[1], argv.units);
}
