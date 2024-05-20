const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const handleWeatherForecastCommand = require("./commands/weatherForecast");

const argv = yargs(hideBin(process.argv)).argv;

if (argv._[0] === "forecast" && argv._[1]) {
  handleWeatherForecastCommand(argv._[1], argv.days, argv.units);
}
