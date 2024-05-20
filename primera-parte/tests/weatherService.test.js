const { getCurrentWeather } = require("../src/services/weatherService");

test("should fetch weather data for a valid location", async () => {
  const data = await getCurrentWeather("Madrid,ES", "metric");
  expect(data.name).toBe("Madrid");
  expect(data.country).toBe("ES");
});
