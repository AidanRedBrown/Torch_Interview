import * as WeatherModel from "./weather.model.js";


async function fetchWeatherFromNOAA(location) {
  const [lat, lon] = location.split(",");
  if (!lat || !lon) throw new Error("Location must be in 'lat,lon' format");

  const res1 = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
  if (!res1.ok) throw new Error("NOAA point lookup failed");
  const data1 = await res1.json();
  const forecastUrl = data1.properties.forecast;

  const res2 = await fetch(forecastUrl);
  if (!res2.ok) throw new Error("NOAA forecast fetch failed");
  return await res2.json();
}


export async function getWeather(req, res) {
  const location = req.params.location;
  const ip = req.ip || req.connection.remoteAddress;

  let reqId;
  try {
    reqId = await WeatherModel.logRequest(location, ip);

    const fullData = await fetchWeatherFromNOAA(location);

    // Simplified data for display
    const w = fullData.properties.periods[0];
    const simplified = {
      temperature: w.temperature,
      forecast: w.shortForecast,
      windSpeed: w.windSpeed,
      windDirection: w.windDirection,
    };

    await WeatherModel.updateRequest(reqId, "success", JSON.stringify(fullData));

    res.json({ location, weather: simplified });
  } catch (err) {
    if (reqId) await WeatherModel.updateRequest(reqId, "error", err.message);
    res.status(500).json({ error: err.message });
  }
}


export async function getRequests(req, res) {
  const recent = await WeatherModel.getRecentRequests();
  res.json(recent);
}