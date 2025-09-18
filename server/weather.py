import json
import os
from datetime import datetime
import requests

DB_PATH = "server/db/requests.json"

# Ensure JSON db exists
if not os.path.exists(DB_PATH):
    with open(DB_PATH, "w") as f:
        json.dump([], f)

def log_request(location, full_data):
    with open(DB_PATH, "r") as f:
        data = json.load(f)

    entry = {
        "timestamp": datetime.now().isoformat(),
        "location": location,
        "data": full_data
    }
    data.append(entry)

    with open(DB_PATH, "w") as f:
        json.dump(data, f, indent=2)

    return entry

def get_recent_requests(limit=10):
    with open(DB_PATH, "r") as f:
        data = json.load(f)
    return data[-limit:][::-1]

def fetch_weather(location):
    lat_lon = location.split(",")
    if len(lat_lon) != 2:
        raise ValueError("Location must be in 'lat,lon' format")
    lat, lon = lat_lon

    # NOAA API request
    try:
        r1 = requests.get(f"https://api.weather.gov/points/{lat},{lon}")
        r1.raise_for_status()
        point_data = r1.json()
        forecast_url = point_data["properties"]["forecast"]

        r2 = requests.get(forecast_url)
        r2.raise_for_status()
        forecast_data = r2.json()

        # Extract only relevant info for display
        first_period = forecast_data["properties"]["periods"][0]
        display_data = {
            "temperature": first_period["temperature"],
            "forecast": first_period["shortForecast"],
            "windSpeed": first_period["windSpeed"],
            "windDirection": first_period["windDirection"],
            "coordinates": {"lat": lat, "lon": lon}
        }

        # Store full JSON but display only display_data
        log_request(location, forecast_data)

        return display_data
    except Exception as e:
        raise ValueError(f"NOAA lookup failed: {str(e)}")