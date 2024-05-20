const { getWeatherForecast } = require("../src/services/weatherService");

test("should fetch weather forecast data for a valid location", async () => {
  const data = await getWeatherForecast("Madrid,ES", 1, "metric");
  expect(data.city.name).toBe("Madrid");
  expect(data.city.country).toBe("ES");
  expect(data.list).toHaveLength(8);
});
